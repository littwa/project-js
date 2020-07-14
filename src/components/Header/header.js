
import './header.css';


import { renderAPI, containerFilms } from '../Main/Main.js';

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

refs.inputValue.addEventListener('input', _.debounce(cbSearch, 600));
function cbSearch(e) {
  // console.log(e.target.value);
  containerPag.innerHTML = '';
  renderAPI.activePage = 1;

  e.target.value === ''
    ? renderAPI.infoAllFilm(1)
    : renderAPI.infoAllFilm(e.target.value);
}

document.addEventListener('DOMContentLoaded', homeHoverActive);
refs.library.addEventListener('click', showLibrary);
refs.home.addEventListener('click', showHomePage);

function homeHoverActive() {
  refs.home.classList.add('hover');
}

let headerButtonsBlock = document.querySelector('.header__buttons_block');

export function showLibrary() {
  refs.home.classList.remove('hover');
  refs.library.classList.add('hover');

  refs.input.style.display = 'none';
  refs.warning.style.display = 'none';

  refs.headerWrapper.classList.add('header-library-img');

  headerButtonsBlock.style.display = 'flex';
  containerFilms.innerHTML = '';
  containerPag.innerHTML = '';
}

export function showHomePage() {
  refs.library.classList.remove('hover');
  refs.home.classList.add('hover');

  refs.input.style.display = 'block';
  refs.warning.style.display = 'none';
  headerButtonsBlock.style.display = 'none';
  refs.inputValue.value = '';

  refs.headerWrapper.classList.remove('header-library-img');

  renderAPI.activePage = 1;
  containerPag.innerHTML = '';
  renderAPI.infoAllFilm(1);
}

export { refs };

const refsLocal = {
  buttons: document.querySelector('.js-buttons-block'),
  watched: document.querySelector('.js-watched'),
  queue: document.querySelector('.js-queue'),
};

refsLocal.buttons.addEventListener('click', ev => {
  if (ev.target === refsLocal.watched) {
    refsLocal.watched.classList.add('is_active');
    refsLocal.queue.classList.remove('is_active');
  } else {
    refsLocal.watched.classList.remove('is_active');
    refsLocal.queue.classList.add('is_active');
  }
});

refsLocal.watched.addEventListener('click', e => {
  const str = localStorage.getItem('watched');
  const data = JSON.parse(str);
  renderAPI.activePage = 1;
  containerPag.innerHTML = '';
  renderAPI.infoAllFilm(data);
  renderAPI.dataFilmsFlag = data;
});

refsLocal.queue.addEventListener('click', e => {
  const str = localStorage.getItem('queue');
  const data = JSON.parse(str);
  renderAPI.activePage = 1;
  containerPag.innerHTML = '';
  renderAPI.infoAllFilm(data);
  renderAPI.dataFilmsFlag = data;
});
