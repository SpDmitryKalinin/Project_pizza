export class addElement{
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
        if(this.promoToggle !== true){
            cloneTemplate.querySelector('.element__promo').setAttribute('style', 'display:none');
        }
        if(this.newToggle !== true){
            cloneTemplate.querySelector('.element__new').setAttribute('style', 'display:none');
        }
        return cloneTemplate;
    }
    addElement(){
        document.querySelector(this.menuSelector).querySelector('.elements').append(this._initElement());
    }
}