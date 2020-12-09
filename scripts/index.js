const selectorPage = document.querySelector('.page');
const phonePopUp = document.querySelector('.phone-Container');
const orderAcceptPopUp = document.querySelector('.order__accepted-Container');
const nowClosePopUp = document.querySelector('.window__now-close-Container');
const codePopUp = document.querySelector('.code-Container');
const codeForm = document.querySelector('.code');
const crossButtons = document.querySelectorAll('.cross');
const cabinetContainer = document.querySelector('.cabinet-container');
const cabinetForm = document.querySelector('.cabinet');
const phoneForm = document.querySelector('.phone');
const classPopUpOpen = 'popUp_is-open';
const classPopUpClose = 'popUp_is-close';
const buttonAut = document.querySelector('.header__button-autoriz');
const templateElement = document.querySelector('.template-element').content;
const elementsContainer = document.querySelector('.elements');
const basketButton = document.querySelectorAll('.header__basket');
const basketContainer = document.querySelector('.basket-container');
const mapPopUp = document.querySelector('.map-container');
const timeButton = document.querySelector('.header__present-time');
const deliveryPopUp = document.querySelector('.delivery-container');
const deliveryForm = document.querySelector('.delivery');
const deliveryButton = document.querySelector('.present___sum-button-element');
const backToBasketButton = document.querySelector('.delivery__back');
const timeDeliveryButton = document.querySelector('.delivery__time-button');
const timePopUp = document.querySelector('.miniform-container');
const deliverySubmitButton = document.querySelector('.delivery__take-order');
const thanksOrderPopUp = document.querySelector('.order__accepted-container');
const overlays = document.querySelectorAll('.overlay');
const placePopUp = document.querySelector('.place-container');
const placeForm = document.querySelector('.place');
const templatePopular = document.querySelector('.popular-template-element');
const forms = Array.from(document.forms);
const overlaysArr = Array.from(overlays);
const heroBannerSlider = document.querySelector('.slider-hero');
const heroBannerTemplate = document.querySelector('.hero-template-element').content;
const basketSliderOther = document.querySelector('.slider-basket-other');
const basketSliderPresent = document.querySelector('.slider-basket-present');
const basketTemplateElement = document.querySelector('.basket-template-element').content;



forms.forEach(itemForm =>{
    itemForm.addEventListener('submit', function (evt){
        evt.preventDefault();
    });
});

overlaysArr.forEach(overlayItem =>{
    overlayItem.addEventListener('click', (evt) =>{
        closePopUp(evt.target.closest('.popUp_is-open'));
    });
})

function checkTime(){
    let nowDate = new Date();
    if(nowDate.getHours() >= 22 || nowDate.getHours() <= 10){
        nowClosePopUp.classList.remove(classPopUpClose);
        nowClosePopUp.classList.add(classPopUpOpen);
    }
}

checkTime();

function addEventListenersForCross(){
    crossArr = Array.from(crossButtons);
    crossArr.forEach(crossButton =>{
        crossButton.addEventListener('click' , () =>{
            closePopUp(document.querySelector('.popUp_is-open'));
        })
    });
}

addEventListenersForCross();

function openPopUp(PopUp){
    
    PopUp.classList.remove(classPopUpClose);
    PopUp.classList.add(classPopUpOpen);
    if(PopUp.classList.contains('basket-container')){
        sliderBasket.update();
        sliderPresent.update();
    }
    openPopUps = Array.from(document.querySelectorAll('.popUp_is-open'));
    openPopUps.forEach(popUpItem =>{
        if(popUpItem != PopUp){
            popUpItem.classList.remove(classPopUpOpen);
            popUpItem.classList.add(classPopUpClose);
        }
    });  
}



function closePopUp(ActivePopUp){
    ActivePopUp.classList.remove(classPopUpOpen);
    ActivePopUp.classList.add(classPopUpClose);
}


//Шаблон добавления элемента в меню
const elementInfo = {
    menuSelector: '.menu',
    templateElement: templateElement,
    picSrc: "images/сливочный1.png",
    textTitle: 'Пицца',
    promoToggle: true,
    newToggle: true,
    textDescription: 'Что-что, что-то',
    textMass: '590',
    price: '300',
}

class addElement{
    constructor({menuSelector, templateElement, picSrc, textTitle, promoToggle, newToggle, textDescription, textMass, price}){
        this.menuSelector = menuSelector;
        this.templateElement = templateElement;
        this.picSrc = picSrc;
        this.textTitle = textTitle;
        this.promoToggle = promoToggle;
        this.newToggle = newToggle;
        this.textDescription = textDescription;
        this.textMass = textMass;
        this.price = price;
    }
    _initElement(){
        const cloneTemplate = this.templateElement.cloneNode(true);
        cloneTemplate.querySelector('.element__title').textContent = this.textTitle;
        cloneTemplate.querySelector('.element__description').textContent = this.textDescription;
        cloneTemplate.querySelector('.element__image').src = this.picSrc;
        cloneTemplate.querySelector('.element__price').textContent = this.price + " ₽";
        cloneTemplate.querySelector('.element__mass').textContent = this.textMass + ' гр';
        return cloneTemplate;
    }
    addElement(){
        document.querySelector(this.menuSelector).querySelector('.elements').append(this._initElement());
    }
}

//Добавления 15 элементов в меню с классом "menu"
for(let i = 0; i<15; i++){
    const classP = new addElement(elementInfo);
    classP.addElement();
}

//Шаблон добавления элемента в слайдер popular
const popularElementInfo = {
    templatePopularElement: document.querySelector('.popular-template-element').content,
    popularImgSrc: "images/сливочный1.png",
    popularTitleText: 'Title',
    popularMassText: '110',
    popularPriceText: '350'
}

class addPopularElement{
    constructor({templatePopularElement, popularImgSrc, popularTitleText, popularMassText, popularPriceText}){
        this.template = templatePopularElement;
        this.imgsrc = popularImgSrc;
        this.titleText = popularTitleText;
        this.massText = popularMassText;
        this.priceText = popularPriceText;
    }
    _initPopularElement(){
        const cloneTemplate = this.template.cloneNode(true);
        cloneTemplate.querySelector('.popular__img').src = this.imgsrc;
        cloneTemplate.querySelector('.popular__item-title').textContent = this.titleText;
        cloneTemplate.querySelector('.popular__mass').textContent = this.massText + ' гр';
        cloneTemplate.querySelector('.popular__price').textContent = this.priceText + " ₽";
        return cloneTemplate;
    }
    addPopularElement(){
        document.querySelector('.slider-popular').append(this._initPopularElement());
    }
}

//Добавление 10 элементов в слайдер popular
for(let i=0; i<10; i++){
    const testPopularClassAdd = new addPopularElement(popularElementInfo);
    testPopularClassAdd.addPopularElement();
}

//SWIPER hero
//==================================================
const slider = document.querySelector('.swiper-hero');

const mySlider = new Swiper(slider, {
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
        1600:{
            slidesPerView: 1.5,
        }
    }
})


//Шаблон добавления баннеров в hero
const heroImgSrc = 'images/Rectangle3.png';

function addBanner(heroImgSrc){
    const cloneTemplateHeroBanner = heroBannerTemplate.cloneNode(true);
    cloneTemplateHeroBanner.querySelector('.slide').setAttribute('style', `background-image: url(${heroImgSrc})`);
    mySlider.appendSlide(cloneTemplateHeroBanner);
}

for(let i=0; i<10; i++){
    addBanner(heroImgSrc);
}

//===================================================


//Swiper popular

const sliderPopularSelector = document.querySelector('.swiper-popular');

const sliderPopular = new Swiper(sliderPopularSelector,{
    freeMode: true,
    slidesPerView: 4.5,
    spaceBetween: 50,
    breakpoints:{
        882:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
        1400:{
            slidesPerView: 3,
        },
        1600:{
            slidesPerView: 3,
        }
    }
});


//Mobile
const sliderMobile = new Swiper('.sliderHeaderMobile',{
    freeMode: true,
    slidesPerView: 3.5,
    spaceBetween: 10,
})



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

//Шаблон для добавления элементов в слайдеры

const slideForBasket ={
    template: basketTemplateElement,
    imageSrc: './images/55173bcc5a91065c988ab3de8023bcff 1.png',
    title: 'Coca-cola',
    price: '119'
}

class addBasket{
    constructor({template, imageSrc, title, price}){
        this.template = template;
        this.imageSrc = imageSrc;
        this.title = title;
        this.price = price;
    }
    initItem(){
        const cloneTemplate = this.template.cloneNode(true);
        cloneTemplate.querySelector('.basket__product-title').textContent = this.title;
        cloneTemplate.querySelector('.basket__product-image').src = this.imageSrc;
        cloneTemplate.querySelector('.basket__product-button').textContent = this.price + " ₽";
        return cloneTemplate;
    }
    addItem(container){
        container.prepend(this.initItem())
    }
}

const test = new addBasket(slideForBasket);
for(let i=0; i<10; i++){
    test.addItem(basketSliderPresent);
    test.addItem(basketSliderOther);
}

const arrBasketButtons = Array.from(basketButton);
arrBasketButtons.forEach(button =>{
    button.addEventListener('click', () => openPopUp(basketContainer));
});




buttonAut.addEventListener('click', () => openPopUp(phonePopUp));
phoneForm.addEventListener('submit', () => openPopUp(codePopUp));
codeForm.addEventListener('submit', () => openPopUp(cabinetContainer));

timeButton.addEventListener('click',() => openPopUp(mapPopUp));
deliveryButton.addEventListener('click', () => openPopUp(deliveryPopUp));
backToBasketButton.addEventListener('click', () => openPopUp(basketContainer));
timeDeliveryButton.addEventListener('click' , () => {
    timePopUp.classList.remove(classPopUpClose);
    timePopUp.classList.add('miniform_is-open');
});
deliveryForm.addEventListener('submit', () => openPopUp(placePopUp));
placeForm.addEventListener('submit', () =>openPopUp(thanksOrderPopUp));