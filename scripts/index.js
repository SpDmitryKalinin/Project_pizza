import {addElement} from './addElements.js';
import {addPopularElement} from './addPopularElement.js';
import {addBasket} from './addBasket.js';
import {AddOrder} from './addOrder.js';
import {AddOrderInHistory} from './addOrderInHistory.js';
import {Menu} from './burger.js';
import {saveData} from './saveData.js';

const phonePopUp = document.querySelector('.phone-Container');
const nowClosePopUp = document.querySelector('.window__now-close-Container');
const codePopUp = document.querySelector('.code-Container');
const codeForm = document.querySelector('.code');
const crossButtons = document.querySelectorAll('.cross');
const cabinetContainer = document.querySelector('.cabinet-container');
const phoneForm = document.querySelector('.phone');
const classPopUpOpen = 'popUp_is-open';
const classPopUpClose = 'popUp_is-close';
const buttonAut = document.querySelectorAll('.header__button-autoriz');
const templateElement = document.querySelector('.template-element').content;
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
const thanksOrderPopUp = document.querySelector('.order__accepted-container');
const overlays = document.querySelectorAll('.overlay');
const placePopUp = document.querySelector('.place-container');
const placeForm = document.querySelector('.place');
const forms = Array.from(document.forms);
const overlaysArr = Array.from(overlays);
const heroBannerTemplate = document.querySelector('.hero-template-element').content;
const basketSliderOther = document.querySelector('.slider-basket-other');
const basketSliderPresent = document.querySelector('.slider-basket-present');
const basketTemplateElement = document.querySelector('.basket-template-element').content;
const orderContainer = document.querySelector('.basket__orders');
const orderTemplate = document.querySelector('.basket-order-template').content;
const ordersHistory = document.querySelector('.cabinet__orders');
const orderHistoryTemplate = document.querySelector('.lc-template').content;
const orderHistoryItem = document.querySelector('.lc-item').content;

const buttonNavigationAction = document.querySelector('.navigation__action');
const buttonNavigationAbout = document.querySelector('.navigation__about');
const buttonSleep = document.querySelector('.window__button');
const adminContainer = document.querySelector('.admin');
const adminButton = document.querySelector('.admin-button');
const addElementForm = document.querySelector('.addElementForm');
const addSliderPopularForm = document.querySelector('.slidpopular');
const addHeroForm = document.querySelector('.addbannner');
const addSliderInBasket = document.querySelector('.dopbasketelement');

const saveDataForAddElementMenu = new saveData;

//Инициализация Бургер
Menu.init();

//Переменные для функций сотрудники/акции
const goodPeopleCadrs = document.querySelector('.boutUas__cadrs');
const goodPeopleAction = document.querySelector('.aboutUs__action');

//Функции переключения на сотрудников
function cadrsFunction(){
    const classDisabledWindow = 'aboutUs-disabled-window';
    goodPeopleCadrs.classList.add('aboutUs__button_active');
    goodPeopleAction.classList.remove('aboutUs__button_active')
    document.querySelector('.actions').classList.add(classDisabledWindow);
    document.querySelector('.cadrs').classList.remove(classDisabledWindow);
}

//Функции переключения на акции
function actionFunction(){
    const classDisabledWindow = 'aboutUs-disabled-window';
    goodPeopleAction.classList.add('aboutUs__button_active');
    goodPeopleCadrs.classList.remove('aboutUs__button_active')
    document.querySelector('.actions').classList.remove(classDisabledWindow);
    document.querySelector('.cadrs').classList.add(classDisabledWindow);
}
//Навешивание слушателей на кнопки О нас, Акции
goodPeopleCadrs.addEventListener('click', cadrsFunction);
goodPeopleAction.addEventListener('click', actionFunction);

//Навешивание слушателей на оверлеи
overlaysArr.forEach(overlayItem =>{
    overlayItem.addEventListener('click', (evt) =>{
        closePopUp(evt.target.closest('.popUp_is-open'));
    });
})

//Функция проверки времени
function checkTime(){
    let nowDate = new Date();
    if(nowDate.getHours() >= 22 || nowDate.getHours() <= 10){
        nowClosePopUp.classList.remove(classPopUpClose);
        nowClosePopUp.classList.add(classPopUpOpen);
    }
}

checkTime(); //Проверяет время работы чтобы выводить плашку до 10 утра и после 22 вечера

//Функция навешивания слушателей на крестики
function addEventListenersForCross(){
    const crossArr = Array.from(crossButtons);
    crossArr.forEach(crossButton =>{
        crossButton.addEventListener('click' , () =>{
            closePopUp(document.querySelector('.popUp_is-open'));
        })
    });
}
addEventListenersForCross();

//Открытие попапов
function openPopUp(PopUp){
    PopUp.classList.remove(classPopUpClose);
    PopUp.classList.add(classPopUpOpen);
    if(PopUp.classList.contains('basket-container')){
        sliderBasket.update();
        sliderPresent.update();
    }
    const openPopUps = Array.from(document.querySelectorAll('.popUp_is-open'));
    openPopUps.forEach(popUpItem =>{
        if(popUpItem != PopUp){
            popUpItem.classList.remove(classPopUpOpen);
            popUpItem.classList.add(classPopUpClose);
        }
    });  
}

//Закрытие попапов
function closePopUp(ActivePopUp){
    if(ActivePopUp === null){
        return 0;
    }
    ActivePopUp.classList.remove(classPopUpOpen);
    ActivePopUp.classList.add(classPopUpClose);
}

//Шаблон добавления элемента в слайдер popular
const popularElementInfo = {
    templatePopularElement: document.querySelector('.popular-template-element').content,
    popularImgSrc: "images/сливочный1.png",
    popularTitleText: 'Title',
    popularMassText: '110',
    popularPriceText: '350'
}
//Добавление 10 элементов в слайдер popular
for(let i=0; i<1; i++){
    const testPopularClassAdd = new addPopularElement(popularElementInfo);
    testPopularClassAdd.addPopularElement();
}

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
const testHistory = new AddOrderInHistory(orderHistoryInfo);
for(let i=0;i<5; i++){
    testHistory.addOrderInContainer(ordersHistory);
}

//Функция открытия админки
function openAdmin(){
    adminContainer.classList.toggle('admin-is-open');
}

const arrBasketButtons = Array.from(basketButton);
arrBasketButtons.forEach(button =>{
    button.addEventListener('click', () => openPopUp(basketContainer), );
});


//Cлушатели
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
const arrButtonAut = Array.from(buttonAut);
arrButtonAut.forEach(button =>{
    button.addEventListener('click', () => openPopUp(phonePopUp));
});
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
adminButton.addEventListener('click', openAdmin);
forms.forEach(itemForm =>{
    itemForm.addEventListener('submit', function (evt){
        evt.preventDefault();
    });
});

//*Тестовая инициализация меню*//

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
