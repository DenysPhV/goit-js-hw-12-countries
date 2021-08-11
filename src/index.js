// ====== create cards =============
import menuFoodsTpl from './template/card-food.hbs';
import menuFoods from './menu.json';

const menuContainer = document.querySelector('.js-menu');
const cardsMarkup = createFoodCardsMarkup(menuFoods);

menuContainer.innerHTML = cardsMarkup;

function createFoodCardsMarkup(menuFoods) {
  return menuFoods.map(menuFoodsTpl).join('');
}

// ================ switch theme ==============================
const switchControl = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function onChangeTheme() {
  if (switchControl.checked) {
    changeClassToBody('dark-theme', 'light-theme');
    localStorage.setItem('theme', theme.DARK);
  } else {
    changeClassToBody('light-theme', 'dark-theme');
    localStorage.setItem('theme', theme.LIGHT);
  }
}

function fixedDarkThemeToBody() {
  if (localStorage.getItem('theme') === theme.DARK) {
    switchControl.checked = 'true';
  } else {
    localStorage.getItem('theme') !== theme.DARK;
  }
  onChangeTheme();
}

function changeClassToBody(add, remove) {
  bodyRef.classList.add(add);
  bodyRef.classList.remove(remove);
}

switchControl.addEventListener('click', onChangeTheme);
fixedDarkThemeToBody();
