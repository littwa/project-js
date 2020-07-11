// импорт кнопок для библиотеки
// импорт функции отрисовки списка "очередь" (а может и не нужно здесь это)

const refs = {
  logo: document.querySelector('.js-logo'),
  home: document.querySelector('.js-home'),
  library: document.querySelector('.js-library'),
  input: document.querySelector('.header-input'),
  inputValue: document.querySelector('#search'),
  headerWrapper: document.querySelector('.header-wrapper'),
  warning: document.querySelector('.header-warning'),
};

console.log('111', refs.inputValue.value);

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
}

// Функция для Ярослава
function showDetailPage() {
  refs.home.classList.remove('hover');
  refs.library.classList.remove('hover');

  refs.input.style.display = 'none';
  refs.headerWrapper.classList.add('header-detail-img');
}
