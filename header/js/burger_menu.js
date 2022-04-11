const burger = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');

burger.addEventListener('click', burgerHandlerClick);
burgerMenu.addEventListener('click', burgerNavHandlerClick);

function burgerHandlerClick() {
  burger.classList.toggle('burger-btn_open');

  burger.classList.contains('burger-btn_open')
    ? burgerMenu.classList.add('burger-menu_open')
    : burgerMenu.classList.remove('burger-menu_open');
}

function burgerNavHandlerClick(e) {
  e.target.classList.contains('nav-list__link_burger') && burgerHandlerClick();
}
