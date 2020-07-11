import './Main.css';
import './style-list.css';
import { OpenDetailModal } from '../Detail/Detail.js';
import divTempalte from './template-film_list.hbs';
import amountFilimDevice from './AmountFilimDevice';
import Handlebars from 'handlebars/runtime';
import arrGenres from './arrGenres.js';
import {
  pagination,
  containerPag,
} from '../NavigationPagination/NavigationPagination.js';
const containerFilms = document.querySelector('.main-container_cart-films');

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

  infoAllFilm(dataFilms = 1, subPageNav = 1) {
    this.dataFilmsFlag = dataFilms;
    console.log(this.dataFilmsFlag);
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

    containerFilms.addEventListener(
      'click',
      this.callbackOpenDetail.bind(this),
    );
  },

  callbackOpenDetail(e) {
    let idClickFilmToNum = Number(e.target.dataset.id);
    this.clickedPageObject = this.renderedFilmsOnPage.find(
      f => f.id === idClickFilmToNum,
    );
    OpenDetailModal(this.clickedPageObject); // ФУНКЦИЯ ВЫЗОВА DETAIL
  },
};

renderAPI.infoAllFilm('sport');

export { renderAPI };

//fetch api fetch api fetch api fetch api fetch api fetch api fetch api fetch api fetch api
//============================================================================================
// NAVIGATION PAGINATION NAVIGATION PAGINATION NAVIGATION PAGINATION NAVIGATION PAGINATION

// let containerPag = document.querySelector('.main-pagination-navigatin');
// containerPag.addEventListener('click', cbel);
// function cbel(e) {
//   event.preventDefault();
//   if (e.target.tagName === 'BUTTON') {
//     let numberPageActive = Number(e.target.textContent);
//     (renderAPI.activePage = numberPageActive),
//       // Вызов функции рендера страницы(заимпортированой)
//       (containerPag.innerHTML = '');
//     renderAPI.infoAllFilm(renderAPI.dataFilmsFlag, numberPageActive);
//   }
// }

// function pagination(activePage, amontPage) {
//   let activePagePrevious1 = activePage - 1;
//   let activePagePrevious2 = activePage - 2;

//   let activePageNext1 = activePage + 1;
//   let activePageNext2 = activePage + 2;

//   let layoutCont = document.createElement('div');
//   layoutCont.style.margin = '0 auto';
//   layoutCont.style.width = 'max-content';
//   console.dir(layoutCont);

//   layoutCont.insertAdjacentHTML(
//     'afterbegin',
//     `<button style='background: #ff0; border: 1px solid; margin: 1px'>${activePage}</button>`,
//   );

//   if (activePagePrevious1 > 0) {
//     console.log(activePagePrevious1);
//     layoutCont.insertAdjacentHTML(
//       'afterbegin',
//       `<button style='border: 1px solid; margin: 1px'>${activePagePrevious1}</button>`,
//     );
//   }
//   if (activePagePrevious2 > 0) {
//     layoutCont.insertAdjacentHTML(
//       'afterbegin',
//       `<button style='border: 1px solid; margin: 1px'>${activePagePrevious2}</button>`,
//     );
//   }

//   if (activePageNext1 <= amontPage) {
//     layoutCont.insertAdjacentHTML(
//       'beforeend',
//       `<button style='border: 1px solid; margin: 1px'>${activePageNext1}</button>`,
//     );
//   }
//   if (activePageNext2 <= amontPage) {
//     layoutCont.insertAdjacentHTML(
//       'beforeend',
//       `<button style='border: 1px solid; margin: 1px'>${activePageNext2}</button>`,
//     );
//   }
//   containerPag.insertAdjacentElement('afterbegin', layoutCont);
// }

// NAVIGATION PAGINATION NAVIGATION PAGINATION NAVIGATION PAGINATION NAVIGATION PAGINATION

//--????????????????????????????????????????????????????????????????????????
// import {
//   arrFromLocalStor,
//   arrayForLibaryLocalStorage,
// } from '../supercomp/supercomp';
// console.log('?!!supercomp!!?:', arrayForLibaryLocalStorage);
//--????????????????????????????????????????????????????????????????????????
