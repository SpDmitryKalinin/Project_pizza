export class AddOrder{
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