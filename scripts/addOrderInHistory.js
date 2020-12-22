export class AddOrderInHistory{
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