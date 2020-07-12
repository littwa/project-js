// импорт кнопок для библиотеки
// импорт функции отрисовки списка "очередь" (а может и не нужно здесь это)
import { renderAPI } from '../Main/Main.js';
import { pagination, containerPag } from '../Navigation/Navigation.js';
let _ = require('lodash');

const refs = {
  logo: document.querySelector('.js-logo'),
  home: document.querySelector('.js-home'),
  library: document.querySelector('.js-library'),
  input: document.querySelector('.header-input'),
  inputValue: document.querySelector('#search'),
  headerWrapper: document.querySelector('.header-wrapper'),
  warning: document.querySelector('.header-warning'),
};
//=====================================

refs.inputValue.addEventListener('input', _.debounce(cbSearch, 600));
function cbSearch(e) {
  console.log(e.target.value);
  containerPag.innerHTML = '';
  renderAPI.activePage = 1;
  renderAPI.infoAllFilm(e.target.value);
}

//=================================================

document.addEventListener('DOMContentLoaded', homeHoverActive);
refs.library.addEventListener('click', showLibrary);
refs.home.addEventListener('click', showHomePage);

function homeHoverActive() {
  refs.home.classList.add('hover');
}

function showLibrary() {
  refs.home.classList.remove('hover');
  refs.library.classList.add('hover');

  refs.input.style.display = 'none';
  refs.warning.style.display = 'none';

  refs.headerWrapper.classList.add('header-library-img');
  // дописать код, который вставляет кнопки

  // дописать код, который вызывает функцию отрисовывки массива обьектов из списка "очередь"
}

function showHomePage() {
  refs.library.classList.remove('hover');
  refs.home.classList.add('hover');

  refs.input.style.display = 'block';
  refs.warning.style.display = 'none';
  refs.inputValue.value = '';

  refs.headerWrapper.classList.remove('header-library-img');
  renderAPI.infoAllFilm();
}

// Функция для Ярослава
function showDetailPage() {
  refs.home.classList.remove('hover');
  refs.library.classList.remove('hover');

  refs.input.style.display = 'none';
  refs.headerWrapper.classList.add('header-detail-img');
}
