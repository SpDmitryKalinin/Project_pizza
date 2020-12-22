//Burger
export const Menu = {
    burger: {
      ham: document.querySelector('.burger'),
      menuTop: document.querySelector('.menu-top'),
      menuMiddle: document.querySelector('.menu-middle'),
      menuBottom: document.querySelector('.menu-bottom')
    },
    
    init: function() {
      Menu.bindUIactions();
    },
    
    bindUIactions: function() {
      Menu.burger.ham.addEventListener(
            'click',
          function(event) {
          Menu.activateMenu(event);
          document.querySelector('.burger-menu').classList.toggle('burger-menu-active');
          event.preventDefault();
        }
      );
    },
    
    activateMenu: function() {
      Menu.burger.menuTop.classList.toggle('menu-top-click');
      Menu.burger.menuMiddle.classList.toggle('menu-middle-click');
      Menu.burger.menuBottom.classList.toggle('menu-bottom-click'); 
    }
};