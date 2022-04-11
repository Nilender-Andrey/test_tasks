/* Language switcher */

const switchers = document.querySelectorAll('.lang-switch__btn');
switchers.forEach((switcher) =>
  switcher.addEventListener('click', openLanguageMenu),
);

function openLanguageMenu(e) {
  const target = e.target;

  if (target.classList.contains('lang-switch__btn')) {
    switchers.forEach((switcher) => {
      switcher.classList.toggle('lang-switch__btn_open');
      switcher.nextElementSibling.classList.toggle(
        'lang-switch-selection_open',
      );
    });
  }
}

const languageMenus = document.querySelectorAll('.lang-switch-selection');
languageMenus.forEach((switcher) =>
  switcher.addEventListener('click', switchLanguage),
);

function switchLanguage(e) {
  const target = e.target;
  if (target.classList.contains('lang-switch-selection__btn')) {
    switchers.forEach((switcher) => {
      switcher.nextElementSibling.classList.remove(
        'lang-switch-selection_open',
      );
      switcher.classList.remove('lang-switch__btn_open');
      switcher.textContent = target.dataset.language;
    });
  }
}

/* Submenu */
const menuButtons = document.querySelectorAll('.nav-list__btn');
menuButtons.forEach((btn) => btn.addEventListener('click', openSubmenu));

function openSubmenu(e) {
  const dataName = e.target.dataset.name;
  const items = document.querySelectorAll(`[data-name="${dataName}"]`);

  items.forEach((item) => {
    item.classList.toggle('open');
  });
}
