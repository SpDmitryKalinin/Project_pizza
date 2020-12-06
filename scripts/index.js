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
const basketButton = document.querySelector('.header__basket');
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
const forms = Array.from(document.forms);
const overlaysArr = Array.from(overlays);

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

const elementInfo = {
    menuSelector: '.menu',
    templateElement: templateElement,
    picSrc: 'https://avatars.mds.yandex.net/get-zen_doc/1534997/pub_5d4d3a7714f98000ad66a8a8_5d4d40491e8e3f00ae5d93a4/scale_1200',
    textTitle: 'Пицца',
    promoToggle: true,
    newToggle: true,
    textDescription: 'Что-что, что-то',
    textMass: '590 гр',
    price: '300'
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
        cloneTemplate.querySelector('.element__price').textContent = this.price;
        cloneTemplate.querySelector('.element__mass').textContent = this.textMass;
        return cloneTemplate;
    }
    addElement(){
        document.querySelector(this.menuSelector).querySelector('.elements').append(this._initElement());
    }
}



const classP = new addElement(elementInfo);
classP.addElement();


buttonAut.addEventListener('click', () => openPopUp(phonePopUp));
phoneForm.addEventListener('submit', () => openPopUp(codePopUp));
codeForm.addEventListener('submit', () => openPopUp(cabinetContainer));
basketButton.addEventListener('click', () => openPopUp(basketContainer));
timeButton.addEventListener('click',() => openPopUp(mapPopUp));
deliveryButton.addEventListener('click', () => openPopUp(deliveryPopUp));
backToBasketButton.addEventListener('click', () => openPopUp(basketContainer));
timeDeliveryButton.addEventListener('click' , () => {
    timePopUp.classList.remove(classPopUpClose);
    timePopUp.classList.add('miniform_is-open');
});
deliveryForm.addEventListener('submit', () => openPopUp(placePopUp));
placeForm.addEventListener('submit', () =>openPopUp(thanksOrderPopUp));










