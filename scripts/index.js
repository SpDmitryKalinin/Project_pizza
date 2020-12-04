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
const classPopUpClose = '.popUp_is-close';
const buttonAut = document.querySelector('.header__button-autoriz');
const templateElement = document.querySelector('.template-element').content;
const elementsContainer = document.querySelector('.elements');
const basketButton = document.querySelector('.header__basket');
const basketContainer = document.querySelector('.basket-container');
const forms = Array.from(document.forms);
forms.forEach(itemForm =>{
    itemForm.classList.add(classPopUpClose);
    console.log(itemForm);
    itemForm.addEventListener('submit', function (evt){
        evt.preventDefault();
    });
})

function addEventListenersForCross(){
    crossArr = Array.from(crossButtons);
    crossArr.forEach(crossButton =>{
        crossButton.addEventListener('click' , () =>{
            closePopUp(document.querySelector('.popUp_is-open'));
        })
    });
}

addEventListenersForCross();

function openPopUp(prevSelector, selectorPopUp){
    if(prevSelector != 0){
        console.log('!!!');
        prevSelector.classList.remove(classPopUpOpen);
        prevSelector.classList.add(classPopUpClose);
        console.log(prevSelector);
    }
    selectorPopUp.classList.remove(classPopUpClose);
    selectorPopUp.classList.add(classPopUpOpen);
}

function closePopUp(ActivePopUp){
    console.log(ActivePopUp);
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


buttonAut.addEventListener('click', () => openPopUp(0, phonePopUp));
phoneForm.addEventListener('submit', () => openPopUp(phonePopUp, codePopUp));
codeForm.addEventListener('submit', () => openPopUp(codePopUp, cabinetContainer));
basketButton.addEventListener('click', () => openPopUp(0, basketContainer));



