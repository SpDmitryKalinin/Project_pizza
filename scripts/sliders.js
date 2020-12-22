//Slider mobile
const sliderMobile = new Swiper('.sliderHeaderMobile',{
    freeMode: true,
    slidesPerView: 2.5,
    spaceBetween: 30,
    breakpoints:{
        320:{
            slidesPerView: 1.5,
            spaceBetween: 10
        },
        350:{
            slidesPerView: 1.8,
        },
        400:{
            slidesPerView: 2.3,
            spaceBetween: 20
        },
        450:{
            slidesPerView: 2.5,
            spaceBetween: 15
        },
        500:{
            slidesPerView: 3.4,
            spaceBetween: 15
        },
        600:{
            slidesPerView: 3.5,
            spaceBetween: 15
        },
        700:{
            slidesPerView: 4.3,
            spaceBetween: 20
        },
        800:{
            slidesPerView: 4.5,
            spaceBetween: 30
        }
    }
});

//Slider Hero
const mySlider = new Swiper('.swiper-hero', {
    spaceBetween: 40,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    breakpoints:{
        500:{
            slidesPerView: 1,
        },
        1350:{
            slidesPerView: 1.2,
        },
        1400:{
            slidesPerView: 1.3,
        },
        1500:{
            slidesPerView: 1.4,
        },
        1600:{
            slidesPerView: 1.5,
        },
        1800:{
            slidesPerView: 1.6,
        },
        1900:{
            slidesPerView: 1.7
        }
    }
})


//Slider in Popular
const sliderPopular = new Swiper('.swiper-popular',{
    freeMode: true,
    slidesPerView: 4.5,
    spaceBetween: 50,
    breakpoints:{
        882:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 2.5,
        },
        1400:{
            slidesPerView: 3,
        },
        1600:{
            slidesPerView: 3,
        }
    }
});

//Slider in basket
const sliderBasket = new Swiper('.swiper-basket', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerView: 2.5,
    freeMode: true
})

//Slider in basket-presents
const sliderPresent = new Swiper('.swiper-basket-present',{
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerView: 2.5,
    freeMode: true
})