export class saveData{
    saveDataAddElement(form){
        const inputList = Array.from(form.querySelectorAll('.admenu__input'));
        const inputListMenu = Array.from(document.getElementsByName('radiomenu'));
        let promoToggleLet = false;
        let newToggleLet = false;
        let menuSelector = '0';
        inputListMenu.forEach(radio =>{
            if(radio.checked){
                menuSelector = radio.value;
            }
        });
        if(form.querySelector('#actionsss').checked){
            promoToggleLet = true;
        }
        if(form.querySelector('#neeew').checked){
            newToggleLet = true;
        }

        const object = {
            menuSelector: menuSelector,
            templateElement: templateElement,
            picSrc: inputList[0].value,
            textTitle: inputList[1].value,
            promoToggle: promoToggleLet,
            newToggle: newToggleLet,
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