document.addEventListener('DOMContentLoaded', (event) => {
    let sliderDivs = document.querySelectorAll('.slider'); // Ловим все слайдер-блоки

    sliderDivs.forEach((item) => { // Динамически добавляем кнопки каждому слайдеру
        if (item.className.includes('slider_drag') || item.className.includes('slider_swipe')) {
            item.querySelectorAll('div')[0].classList.add('slider_list');
        }
        let buttons = document.createElement('div');
        buttons.classList.add('slider_buttons');
        buttons.innerHTML = `<a href="#" id="prev" class="btn">prev</a>
                            <a href="#" id="next" class="btn">next</a>`;
        item.append(buttons);
    });

    document.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.closest('.slider') && event.target.parentElement.className.includes('slider_buttons')) {
            let params = getParams(event.target.parentElement.parentElement);
            let move = event.target.id;
            params.slideWidth += 50;
            
            moveSlide(params, move);
        }
    });

    document.addEventListener('mouseover', (event) => {
        if (event.target.tagName === 'DIV'
            && event.target.parentElement.className.includes('slider_list')) {
            let params = getParams(event.target.parentElement.parentElement);
            let isDown = false;
            let startX;
            let scrollLeft;
            let max = (params.slidesNum - params.slidesCount) * params.slideWidth;

            if (params.sliderDiv.className.includes('slider_drag')) {
                params.sliderDiv.addEventListener('mousedown', (event) => {
                    isDown = true;
                    startX = event.pageX;
                    scrollLeft = Number(params.list.style.transform.slice(11, -3));
                });

                //Мобильный
                params.sliderDiv.addEventListener('touchend', (event) => {
                    isDown = true;
                    startX = event.pageX;
                    scrollLeft = Number(params.list.style.transform.slice(11, -3));
                });


                params.sliderDiv.addEventListener('mouseleave', () => {
                    isDown = false;
                });

                params.sliderDiv.addEventListener('mouseup', () => {
                    isDown = false;
                });

                params.sliderDiv.addEventListener('mousemove', (event) => {
                    if (!isDown) return;
                    event.preventDefault();
                    let currScroll = Number(params.list.style.transform.slice(11, -3));
                    let walk = scrollLeft + (event.pageX - startX) * 1.5;
                    if (currScroll > 0) walk = -1;
                    if (currScroll <= -max) walk = -max + 1;
                    if (walk <= 0 && walk >= -max) params.list.style.transform = `translateX(` + walk + `px)`;
                });

                params.sliderDiv.addEventListener('touchmove', (event) => {
                    if (!isDown) return;
                    event.preventDefault();
                    let currScroll = Number(params.list.style.transform.slice(11, -3));
                    let walk = scrollLeft + (event.pageX - startX) * 1.5;
                    if (currScroll > 0) walk = -1;
                    if (currScroll <= -max) walk = -max + 1;
                    if (walk <= 0 && walk >= -max) params.list.style.transform = `translateX(` + walk + `px)`;
                });

            } else if (event.target.parentElement.parentElement.className.includes('slider_swipe')) {
                let hammer = new Hammer(event.target);
                hammer.on('swipeleft', () => {
                    params.slideWidth += 50;
                    moveSlide(params, 'next');
                });

                hammer.on('swiperight', () => {
                    params.slideWidth += 50;
                    moveSlide(params, 'prev');
                });
            }

        }
    });
});

function getParams(sliderDiv) {
    return {
        sliderDiv: sliderDiv,
        list: sliderDiv.querySelectorAll('div')[0],
        sliderWidth: sliderDiv.offsetWidth,
        listElements: sliderDiv.querySelectorAll('div')[0].querySelectorAll('div'),
        slidesCount: sliderDiv.offsetWidth / sliderDiv.querySelectorAll('div')[0].querySelectorAll('div')[0].offsetWidth,
        slideWidth: sliderDiv.offsetWidth / (sliderDiv.offsetWidth / sliderDiv.querySelectorAll('div')[0].querySelectorAll('div')[0].offsetWidth),
        slidesNum: sliderDiv.querySelectorAll('div')[0].querySelectorAll('div').length,
        num: Number((sliderDiv.querySelectorAll('div')[0].style.transform) ? sliderDiv.querySelectorAll('div')[0].style.transform.slice(11, -3) : 0),
    };
}

function moveSlide(params, direction) {
    if (direction === 'prev') {
        params.num += params.slideWidth;
        if (params.num > 0) {
            params.num = -((params.slidesNum - params.slidesCount) * params.slideWidth);
        }
        params.list.style.transform = `translateX( ${params.num}px )`;
        setCenter(params);
    } else if (direction === 'next') {

        params.num -= params.slideWidth;
        if (params.num < -((params.slidesNum - params.slidesCount) * params.slideWidth)){
            params.num = 0;
        }
        params.list.style.transform = `translateX( ${params.num}px )`;
        setCenter(params);
    }
}

function setCenter(params) {
    params.listElements.forEach((item) => {
        item.classList.remove('prev');
        item.classList.remove('center');
        item.classList.remove('next');
    })
    if (params.slidesCount < 3) return
    let index = Math.abs(params.num / params.slideWidth);
    let arr = [index];
    for (i = 1; i < params.slidesCount; i++) arr.push(index + i);
    if(params.slidesCount > 3) {
        index = arr[Math.round((arr.length - 1) / 2)];
        index = Math.round(index);
    }
    if (Math.round(params.slidesCount) % 2 == 0) {
        index -= 1;
        params.listElements[index - 1].classList.add('prev');
        params.listElements[index].classList.add('center');
        params.listElements[index + 1].classList.add('center');
        params.listElements[index + 2].classList.add('next');
    } else {
        params.listElements[index - 1].classList.add('prev');
        params.listElements[index].classList.add('center');
        params.listElements[index + 1].classList.add('next');
    }
}