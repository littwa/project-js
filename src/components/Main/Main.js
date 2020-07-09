import './Main.css';
import './style-list.css';
import fn from '../test/test.js';
import divTempalte from './template-film_list.hbs';
let n = document.querySelector('header');
let d = document.createElement('div');
d.classList.add('d');
n.insertAdjacentElement('beforeend', d);
d.insertAdjacentText('afterbegin', 'Компонент "Main"|');

d.insertAdjacentText('beforeend', fn());

// localStorage localStorage localStorage localStorage localStorage localStorage

let arrFilmsWatched = [
  { q: 1, w: 2, e: 3 },
  { q: 4, w: 5, e: 6 },
  { q: 7, w: 8, e: 9 },
];

localStorage.setItem('watched', JSON.stringify(arrFilmsWatched));

arrFilmsWatched = JSON.parse(localStorage.getItem('watched'));

let selectedFilm = { q: 10, w: 11, e: 12 };

arrFilmsWatched.push(selectedFilm);

// console.log(arrFilmsWatched);

localStorage.setItem('watched', JSON.stringify(arrFilmsWatched));

export { arrFilmsWatched };

// localStorage localStorage localStorage localStorage localStorage localStorage

//--------------------------------------------------------------------------------------------------------------------------

//fetch api fetch api fetch api fetch api fetch api fetch api fetch api fetch api fetch api
const containerFilms = document.querySelector('.container_cart-films');

let renderAPI = {
  baseUrlForImg: 'http://image.tmdb.org/t/p/',
  baseUrl: 'https://api.themoviedb.org/3/',
  allFilms: 'discover/',
  backdrop_sizes: ['w300', 'w780', 'w1280', 'original'],
  apiKey: '?api_key=62d44aec954e70e62cd2b71881d93db4',

  infoAllFilm(pageNumber = 1) {
    // console.log(
    //   `${this.baseUrl}${this.allFilms}movie${this.apiKey}&page=${pageNumber}`,
    // );
    fetch(
      `${this.baseUrl}${this.allFilms}movie${this.apiKey}&page=${pageNumber}`,
    )
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        this.createCartFilm(data.results);
      })
      .catch(error => console.error(error));
  },

  createCartFilm(items) {
    const layoutFilms = items.map(item => divTempalte(item)).join('');
    containerFilms.insertAdjacentHTML('beforeend', layoutFilms);
  },
};

renderAPI.infoAllFilm(2);

// let GetAPIConfigurationImages = {
//   base_url: 'http://image.tmdb.org/t/p/',
//   secure_base_url: 'https://image.tmdb.org/t/p/',
//   backdrop_sizes: ['w300', 'w780', 'w1280', 'original'],
// };

// fetch(
//   'https://api.themoviedb.org/3/discover/movie?api_key=62d44aec954e70e62cd2b71881d93db4',
// )
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     return n.insertAdjacentHTML(
//       'beforeend',
//       `<img src='${GetAPIConfigurationImages.secure_base_url}${GetAPIConfigurationImages.backdrop_sizes[1]}${data.results[0].backdrop_path}' alt='img'/>`,
//     );
//   });

//Для расшифровки жанров:
// fetch(
//   'https://api.themoviedb.org/3/genre/movie/list?api_key=62d44aec954e70e62cd2b71881d93db4',
// )
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   });

//fetch api fetch api fetch api fetch api fetch api fetch api fetch api fetch api fetch api
//============================================================================================
// NAVIGATION PAGINATION NAVIGATION PAGINATION NAVIGATION PAGINATION NAVIGATION PAGINATION

// let activePage = 7;
// let amontPage = 45;
// let containerPag = document.querySelector('.pag');
// containerPag.addEventListener('click', cbel);
// function cbel(e) {
//   if (e.target.tagName === 'BUTTON') {
//     console.dir(e.target);
//     console.log(e.target.textContent);
//     // Вызов функции рендера страницы(заимпортированой)
//   }
// }

// function pagination(activePage, amontPage) {
//   let activePagePrevious1 = activePage - 1;
//   let activePagePrevious2 = activePage - 2;

//   let activePageNext1 = activePage + 1;
//   let activePageNext2 = activePage + 2;

//   let layoutCont = document.createElement('div');
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

// pagination(activePage, amontPage);
// NAVIGATION PAGINATION NAVIGATION PAGINATION NAVIGATION PAGINATION NAVIGATION PAGINATION
