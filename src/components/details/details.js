import './details.css';
import * as basicLightbox from 'basiclightbox';
import '../../../node_modules/basiclightbox/src/styles/main.scss';
import showDetailsIngo from './details.hbs';
import Handlebars from 'handlebars/runtime';
import arrGenres from './objForDetailModal';
import picture from '../../images/icons/symbol-defs.svg';
import { containerFilms } from '../Main/Main.js';
import { renderAPI } from '../Main/Main.js';
import { pagination, containerPag } from '../Navigation/Navigation.js';
import { showHomePage } from '../Header/header.js';
let _ = require('lodash');

Handlebars.registerHelper('popularityMath', function (property) {
  const shoterNumber = Math.round(property);

  return shoterNumber;
});

Handlebars.registerHelper('genres', function (genresId) {
  return arrGenres.reduce((ac, el) => {
    el.id === genresId ? (ac = el.name + ',') : genresId;
    return ac;
  }, '');
});

export function OpenDetailModal(clickedPageObject) {
  const layout = showDetailsIngo(clickedPageObject);
  let lightBoxAnch = document.querySelector('#detail_lightbox');
  lightBoxAnch.insertAdjacentHTML('beforeend', layout);
  const htmlInstance = basicLightbox.create(lightBoxAnch);
  htmlInstance.show();
  //----------------------------------------
  let headerSearchLightBox = document.querySelector('#searchhh');
  headerSearchLightBox.addEventListener('input', _.debounce(cbSearch, 600));
  function cbSearch(e) {
    console.log(e.target.value);
    containerPag.innerHTML = '';
    renderAPI.activePage = 1;
    htmlInstance.close();
    headerSearchLightBox.removeEventListener(
      'input',
      _.debounce(cbSearch, 600),
    );
    e.target.value === ''
      ? renderAPI.infoAllFilm(1)
      : renderAPI.infoAllFilm(e.target.value);
  }
  //--------------------------ДОПИСАТЬ ОТТКРІТИЕ с ХОМ-------------------------------

  // let homeLinkOnModal = document.querySelector('.nav-link js-home');
  // homeLinkOnModal.addEventListener('click', cbShowHomePage);
  // function cbShowHomePage(e) {
  //   console.log(homeLinkOnModal, showHomePage);
  //   console.log(1212);
  //   showHomePage();
  // }
}

// let objForDetailModal = {
//   adult: false,
//   backdrop_path: '/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg',
//   genre_ids: [28, 12, 878],
//   id: 429617,
//   original_language: 'en',
//   original_title: 'Spider-Man: Far from Home',
//   overview:
//     'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
//   popularity: 66.782,
//   poster_path: '/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
//   release_date: '2019-06-28',
//   title: 'Spider-Man: Far from Home',
//   video: false,
//   vote_average: 7.6,
//   vote_count: 7760,
// };

// function detailsPlusHbs() {
//   const mixedData = showDetailsIngo(objForDetailModal);

//   document
//     .querySelector('#try-li-click')
//     .insertAdjacentHTML('beforeend', mixedData);
// }

// detailsPlusHbs();
// const htmlInstance = basicLightbox.create(
//   document.querySelector('#try-li-click'),
// );

// document.querySelector('li.try-li-click').onclick = htmlInstance.show;
