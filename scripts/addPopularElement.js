export class addPopularElement{
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
