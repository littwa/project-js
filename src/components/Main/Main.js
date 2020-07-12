import './Main.css';
import './style-list.css';
// import { OpenDetailModal } from '../Detail/Detail.js';
import divTempalte from './template-film_list.hbs';
import amountFilimDevice from './AmountFilimDevice';
import Handlebars from 'handlebars/runtime';
import arrGenres from './arrGenres.js';
import { pagination, containerPag } from '../Navigation/Navigation.js';
import { detailsPlusHbs, OpenDetailModal } from '../details/details.js';
import { refs } from '../Header/header.js';
export const containerFilms = document.querySelector(
  '.main-container_cart-films',
);
let _ = require('lodash');

Handlebars.registerHelper('loud', function (date) {
  if (date) {
    return date.slice(0, 4);
  } else {
    return 'XXXX';
  }
});

Handlebars.registerHelper('genres', function (genresId) {
  return arrGenres.reduce((ac, el) => {
    el.id === genresId ? (ac = el.name + ',') : genresId;
    return ac;
  }, '');
});

//fetch api fetch api fetch api fetch api fetch api fetch api fetch api fetch api fetch api fetch api fetch api

let renderAPI = {
  baseUrlForImg: 'http://image.tmdb.org/t/p/',
  baseUrl: 'https://api.themoviedb.org/3/',
  allFilms: 'discover/',
  searchMovie: 'search/movie',
  backdropSizes: ['w300', 'w780', 'w1280', 'original'],
  apiKey: '?api_key=62d44aec954e70e62cd2b71881d93db4',
  amountFilmDeviceNumber: amountFilimDevice(),
  renderedFilmsOnPage: [],
  clickedPageObject: {},
  dataFilmsFlag: 1,
  activePage: 1,
  totalPage: 1,
  idList: 1,

  infoAllFilm(dataFilms = 1, subPageNav = 1) {
    this.dataFilmsFlag = dataFilms;
    console.log(this.dataFilmsFlag);
    refs.warning.style.display = 'none';
    // console.log(Number.isInteger(dataFilms));

    //Для рендера стартовой(1) страницы и клику по номеру пагинации(компоненту навигации):
    if (Number.isInteger(dataFilms)) {
      fetch(
        `${this.baseUrl}${this.allFilms}movie${this.apiKey}&page=${
          subPageNav !== 1 ? subPageNav : dataFilms
        }`,
      )
        .then(response => response.json())
        .then(data => {
          this.totalPage = data.total_pages;
          data.results.length = this.amountFilmDeviceNumber;
          this.renderedFilmsOnPage = data.results;
          this.createCardsFilm(data.results);
          pagination(this.activePage, this.totalPage);
        })
        .catch(error => console.error(error));
    }
    //Для рендера страницы по inputValue(ФОРМА ПОИСКА):
    if (typeof dataFilms === 'string') {
      console.log('string');

      fetch(
        `${this.baseUrl}${this.searchMovie}${this.apiKey}&query=${dataFilms}&page=${subPageNav}`,
      )
        .then(response => response.json())
        .then(data => {
          if (data.total_pages === 0) {
            refs.warning.style.display = 'block';
            document.querySelector('.header-warning-text').style.textAlign =
              'center';
            return;
          }
          this.totalPage = data.total_pages;
          data.results.length = this.amountFilmDeviceNumber;
          this.renderedFilmsOnPage = data.results;
          this.createCardsFilm(data.results);
          pagination(this.activePage, this.totalPage);
        })
        .catch(error => console.error(error));
    }
    //////////////Для рендера  страницы с localStorage:( ДОПИСАТЬ НА КОЛИЧЕСТВО РЕНДЕРА)
    if (Array.isArray(dataFilms)) {
      this.dataFilmsFlag = dataFilms;
      this.totalPage = Math.ceil(
        dataFilms.length / this.amountFilmDeviceNumber,
      );
      if (subPageNav === 1) {
        dataFilms.length = this.amountFilmDeviceNumber;
        console.log(dataFilms);
      }
      // if (subPageNav !== 1 && dataFilms.length > this.amountFilmDeviceNumber) {
      //   dataFilms = this.dataFilmsFlag.slice(this.amountFilmDeviceNumber - 1);
      //   console.log(dataFilms);

      //   if (dataFilms.length <= this.amountFilmDeviceNumber) {
      //     dataFilms = this.dataFilmsFlag.slice(0, dataFilms.length - 1);
      //   }
      // }

      this.renderedFilmsOnPage = dataFilms;
      this.createCardsFilm(dataFilms);
      containerPag.innerHTML = '';

      pagination(subPageNav > 1 ? subPageNav : this.activePage, this.totalPage);
      document
        .querySelectorAll('.main_hidevoteaverage')
        .forEach(el => el.classList.remove('main_hidevoteaverage'));
    }
  },

  createCardsFilm(items) {
    containerFilms.innerHTML = '';
    const layoutFilms = items.map(item => divTempalte(item)).join('');

    containerFilms.insertAdjacentHTML('beforeend', layoutFilms);

    containerFilms.querySelectorAll('img').forEach(el => {
      el.src.length < 33
        ? (el.src =
            'https://broadcastingandmedia.com/img/logos/1560408459FilmingSmall.jpg')
        : el.src;
    });
  },

  callbackOpenDetail(e) {
    console.dir('cl', e.target);
    let idClickFilmToNum = Number(e.target.dataset.id);
    this.clickedPageObject = this.renderedFilmsOnPage.find(
      f => f.id === idClickFilmToNum,
    );

    if (e.target.tagName === 'IMG') {
      // ФУНКЦИЯ ВЫЗОВА DETAIL
      OpenDetailModal(this.clickedPageObject);
      // console.log('1');
    }
  },
};
containerFilms.addEventListener(
  'click',
  renderAPI.callbackOpenDetail.bind(renderAPI),
);
renderAPI.infoAllFilm();

export { renderAPI };
