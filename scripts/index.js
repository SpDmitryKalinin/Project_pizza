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
const orderContainer = document.querySelector('.basket__orders');
const orderTemplate = document.querySelector('.basket-order-template').content;
const ordersHistory = document.querySelector('.cabinet__orders');
const orderHistoryTemplate = document.querySelector('.lc-template').content;
const orderHistoryItem = document.querySelector('.lc-item').content;
const goodPeopleCadrs = document.querySelector('.boutUas__cadrs');
const goodPeopleAction = document.querySelector('.aboutUs__action');
const buttonNavigationAction = document.querySelector('.navigation__action');
const buttonNavigationAbout = document.querySelector('.navigation__about');
const buttonSleep = document.querySelector('.window__button');

const adminContainer = document.querySelector('.admin');
const adminButton = document.querySelector('.admin-button');



const submitAddElement = document.querySelector('.addElementSubmit');
const submitAddPopular = document.querySelector('.addPopularSubmit');
const submitAddHero = document.querySelector('.addHeroSubmit');
const submitAddElementBasket = document.querySelector('.addBasketElementSubmit');


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

checkTime(); //Проверяет время работы

function cadrsFunction(){
    const classDisabledWindow = 'aboutUs-disabled-window';
    goodPeopleCadrs.classList.add('aboutUs__button_active');
    goodPeopleAction.classList.remove('aboutUs__button_active')
    document.querySelector('.actions').classList.add(classDisabledWindow);
    document.querySelector('.cadrs').classList.remove(classDisabledWindow);
}

function actionFunction(){
    const classDisabledWindow = 'aboutUs-disabled-window';
    goodPeopleAction.classList.add('aboutUs__button_active');
    goodPeopleCadrs.classList.remove('aboutUs__button_active')
    document.querySelector('.actions').classList.remove(classDisabledWindow);
    document.querySelector('.cadrs').classList.add(classDisabledWindow);
}

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
    if(ActivePopUp === null){
        return 0;
    }
    ActivePopUp.classList.remove(classPopUpOpen);
    ActivePopUp.classList.add(classPopUpClose);
}


//Шаблон добавления элемента в меню


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
for(let i=0; i<1; i++){
    const testPopularClassAdd = new addPopularElement(popularElementInfo);
    testPopularClassAdd.addPopularElement();
}

//slider Hero
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


//Шаблон добавления баннеров в hero
const heroImgSrc = 'images/Rectangle3.png';

function addBanner(heroImgSrc){
    const cloneTemplateHeroBanner = heroBannerTemplate.cloneNode(true);
    cloneTemplateHeroBanner.querySelector('.slide').setAttribute('style', `background-image: url(${heroImgSrc})`);
    mySlider.appendSlide(cloneTemplateHeroBanner);
}

for(let i=0; i<0; i++){
    addBanner(heroImgSrc);
}

//Шаблон для добавления элементов в слайдеры в Корзине

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

const addBasketclass = new addBasket(slideForBasket);
for(let i=0; i<1; i++){
    addBasketclass.addItem(basketSliderPresent);
    addBasketclass.addItem(basketSliderOther);
}

//Шаблон для добавления элементов в заказ

const orderInfo = {
    template: orderTemplate,
    imageSrc: "./images/сливочный1.png",
    title: "Сливочный лосось",
    discription: "Соус цезарь, лосось терияки, маслины, сыр творожный,  сыр моцарелла, соус терияки, кунжут",
    price: 1540,
    amount: 1
}

class AddOrder{
    constructor({template, imageSrc, title, discription, price, amount}){
        this.template = template;
        this.imageSrc = imageSrc;
        this.title = title;
        this.discription = discription;
        this.price = price;
        this.amount = amount;
    }

    _orderInit(){
        const templateCopy = this.template.cloneNode(true);
        templateCopy.querySelector('.basket__order-image').src = this.imageSrc;
        templateCopy.querySelector('.basket__order-title').textContent = this.title;
        templateCopy.querySelector('.basket__order-text').textContent = this.discription;
        templateCopy.querySelector('.basket__order-sum').textContent = (this.price * this.amount) + " ₽";
        templateCopy.querySelector('.basket__order-quant').textContent = this.amount;
        return templateCopy;
    }

    addOrderInContainer(container){
        container.prepend(this._orderInit());
    }
}

const testOrder = new AddOrder(orderInfo);

for(let i=0; i<10; i++){
    testOrder.addOrderInContainer(orderContainer);
}

//Шаблон добавления в историю заказов

const orderHistoryInfo = {
    template: orderHistoryTemplate,
    templateItem: orderHistoryItem,
    date: `12.10.2020`,
    orders: ['Пицца Цезарь', 'Салат Цезарь', 'Другая пицца'],
    price: '1540'
}
class AddOrderInHistory{
    constructor({template, templateItem, date, orders, price}){
        this.template = template;
        this.templateItem = templateItem;
        this.date = date;
        this.orders = orders;
        this.price = price;
    }
    _initOrderHistory(){
        const templateCopy = this.template.cloneNode(true);
        templateCopy.querySelector('.cabinet__order-subtitle').textContent = this.date;
        for(let i=0; i<this.orders.length; i++){
            const templateItemCopy = this.templateItem.cloneNode(true);
            templateItemCopy.querySelector('.cabinet__order-name').textContent = this.orders[i]
            templateCopy.querySelector('.cabinet__order-names').prepend(templateItemCopy);
        }
        templateCopy.querySelector('.cabinet__order-price').textContent = this.price;
        return templateCopy;
    }
    addOrderInContainer(container){
        container.prepend(this._initOrderHistory());
    }
}



const testHistory = new AddOrderInHistory(orderHistoryInfo);


for(let i=0;i<5; i++){
    testHistory.addOrderInContainer(ordersHistory);
}
//Slider popular

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


function openAdmin(){
    adminContainer.classList.toggle('admin-is-open');
}

const addElementForm = document.querySelector('.addElementForm');
const addSliderPopularForm = document.querySelector('.slidpopular');
const addHeroForm = document.querySelector('.addbannner');
const addSliderInBasket = document.querySelector('.dopbasketelement');

class saveData{
    saveDataAddElement(form){
        const inputList = Array.from(form.querySelectorAll('.admenu__input'));
        const inputListMenu = Array.from(document.getElementsByName('radiomenu'));
        let menuSelector = '0';
        inputListMenu.forEach(radio =>{
            if(radio.checked){
                menuSelector = radio.value;
            }
        });
        const object = {
            menuSelector: menuSelector,
            templateElement: templateElement,
            picSrc: inputList[0].value,
            textTitle: inputList[1].value,
            promoToggle: true,
            newToggle: true,
            textDescription: inputList[2].value,
            textMass: inputList[3].value,
            price: inputList[4].value,
        }
        return object;
    }
    saveDataHeroBanner(form){
        return form.querySelector('.admenu__input').value;
    }
    saveDataAddPopular(form){
        const inputList = Array.from(form.querySelectorAll('.admenu__input'));
        const object = {
            templatePopularElement: document.querySelector('.popular-template-element').content,
            popularImgSrc: inputList[0].value,
            popularTitleText: inputList[1].value,
            popularMassText: inputList[2].value,
            popularPriceText: inputList[3].value
        }
        return object;
    }
    saveBasketSlider(form){
        const inputList = Array.from(form.querySelectorAll('.admenu__input'));
        const object ={
            template: basketTemplateElement,
            imageSrc: inputList[0].value,
            title: inputList[1].value,
            price: inputList[2].value
        }
        return object;
    }
}



const saveDataForAddElementMenu = new saveData;

const arrBasketButtons = Array.from(basketButton);
arrBasketButtons.forEach(button =>{
    button.addEventListener('click', () => openPopUp(basketContainer), );
});


addElementForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const addElementClass = new addElement(saveDataForAddElementMenu.saveDataAddElement(addElementForm));
    addElementClass.addElement();
    sliderPopular.update();
});

addHeroForm.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    addBanner(saveDataForAddElementMenu.saveDataHeroBanner(addHeroForm))
});

addSliderPopularForm.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    const addPopularElementClass = new addPopularElement(saveDataForAddElementMenu.saveDataAddPopular(addSliderPopularForm));
    addPopularElementClass.addPopularElement();
});

addSliderInBasket.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    const addBasketclassListen = new addBasket(saveDataForAddElementMenu.saveBasketSlider(addSliderInBasket));
    addBasketclassListen.addItem(basketSliderPresent);
    addBasketclassListen.addItem(basketSliderOther);
});
buttonSleep.addEventListener('click', () => openPopUp(basketContainer));
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
buttonNavigationAbout.addEventListener('click', cadrsFunction);
buttonNavigationAction.addEventListener('click', actionFunction);
goodPeopleCadrs.addEventListener('click', cadrsFunction);
goodPeopleAction.addEventListener('click', actionFunction);
adminButton.addEventListener('click', openAdmin);




//*Инициализация меню*//

const pizzaInfo = {
    menuSelector: '.pizza',
    templateElement: templateElement,
    picSrc: "images/сливочный1.png",
    textTitle: 'Пицца',
    promoToggle: true,
    newToggle: true,
    textDescription: 'Что-что, что-то',
    textMass: '590',
    price: '300',
}



for(let i = 0; i<1; i++){
    const classPizza = new addElement(pizzaInfo);
    classPizza.addElement();
}

const rolsInfo = {
    menuSelector: '.rols',
    templateElement: templateElement,
    picSrc: "images/сливочный1.png",
    textTitle: 'Пицца',
    promoToggle: true,
    newToggle: true,
    textDescription: 'Что-что, что-то',
    textMass: '590',
    price: '300',
}

for(let i = 0; i<1; i++){
    const classRols = new addElement(rolsInfo);
    classRols.addElement();
}

const warnRolsInfo = {
    menuSelector: '.warn-rols',
    templateElement: templateElement,
    picSrc: "images/сливочный1.png",
    textTitle: 'Пицца',
    promoToggle: true,
    newToggle: true,
    textDescription: 'Что-что, что-то',
    textMass: '590',
    price: '300',
}

for(let i = 0; i<1; i++){
    const classWarnRols = new addElement(warnRolsInfo);
    classWarnRols.addElement();
}

const comboInfo = {
    menuSelector: '.combo',
    templateElement: templateElement,
    picSrc: "images/сливочный1.png",
    textTitle: 'Пицца',
    promoToggle: true,
    newToggle: true,
    textDescription: 'Что-что, что-то',
    textMass: '590',
    price: '300',
}

for(let i = 0; i<1; i++){
    const classCombo = new addElement(comboInfo);
    classCombo.addElement();
}

const snackInfo = {
    menuSelector: '.snack',
    templateElement: templateElement,
    picSrc: "images/сливочный1.png",
    textTitle: 'Пицца',
    promoToggle: true,
    newToggle: true,
    textDescription: 'Что-что, что-то',
    textMass: '590',
    price: '300',
}

for(let i = 0; i<1; i++){
    const classSnack = new addElement(snackInfo);
    classSnack.addElement();
}

const salatInfo = {
    menuSelector: '.salat',
    templateElement: templateElement,
    picSrc: "images/сливочный1.png",
    textTitle: 'Пицца',
    promoToggle: true,
    newToggle: true,
    textDescription: 'Что-что, что-то',
    textMass: '590',
    price: '300',
}

for(let i = 0; i<1; i++){
    const classSalat = new addElement(salatInfo);
    classSalat.addElement();
}
