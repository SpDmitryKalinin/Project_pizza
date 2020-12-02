const bannerContainer = document.querySelector('.banner');
const banner = document.querySelectorAll('.banner__image');
let bannerArr = Array.from(banner);
initBanner();
addEventListeners();
function initBanner(){
    console.log(bannerArr);
    bannerArr.forEach(item =>{
        if(item.classList.contains('banner__active')){
            initButtons(item);
        }
    });
}

function addEventListeners(){
    bannerArr.forEach(bannerItem =>{
        const buttons = Array.from(bannerItem.querySelectorAll('.banner__button'));
        buttons.forEach(button =>{
        if(button.classList.contains('banner__left-button')){
            button.addEventListener('click',() => leftArrowFunction());
        }
        else{
            button.addEventListener('click',() => rightArrowFunction());
        }
    });
});
}

function initButtons(item){
    const buttons = Array.from(item.querySelectorAll('.banner__button'));
    buttons.forEach(button =>{
        button.removeAttribute('disabled');
    });
}


function leftArrowFunction(){
    for(let i=0; i<bannerArr.length; i++){
        if(bannerArr[i].classList.contains('banner__post')){
            bannerArr[i].classList.remove('banner__post');
            bannerArr[i].classList.add('banner__prev');
            continue;
        }
        if(bannerArr[i].classList.contains('banner__active')){
            const buttons = Array.from(bannerArr[i].querySelectorAll('.banner__button'));
            buttons.forEach(button =>{
                button.setAttribute("disabled", "disabled");
                console.log(button);
            });
            bannerArr[i].classList.remove('banner__active');
            bannerArr[i].classList.add('banner__post');
            continue;
        }
        if(bannerArr[i].classList.contains('banner__prev')){
            bannerArr[i].classList.remove('banner__prev');
            bannerArr[i].classList.add('banner__active');
            continue;
        }
    }
    initBanner();
}

function rightArrowFunction(){
    console.log('right!');
}

