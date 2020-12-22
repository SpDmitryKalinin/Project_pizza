export class addBasket{
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