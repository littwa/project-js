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
import { showHomePage, showLibrary } from '../Header/header.js';
import { addFunctionLocalStor } from '../comp_buttons_w_q/buttons_w_q.js';

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
  document.addEventListener('keypress', cbe);
  function cbe(e) {
    e.code === 'KeyQ' ? htmlInstance.close() : e.code;
  }
  addFunctionLocalStor();
  //----------------------------------------
  let headerSearchLightBox = document.querySelector('#searchhh');
  headerSearchLightBox.addEventListener('input', _.debounce(cbSearch, 600));
  function cbSearch(e) {
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
  //-------------------------- Open HOME Detail-------------------------------

  let homeLinkOnModal = document.querySelector('#header-home');
  console.log(homeLinkOnModal, showHomePage);
  homeLinkOnModal.addEventListener('click', cbShowHomePage);
  function cbShowHomePage(e) {
    console.log(homeLinkOnModal, showHomePage);
    console.log(1212);
    showHomePage();
    htmlInstance.close();
    homeLinkOnModal.removeEventListener('click', cbShowHomePage);
  }

  //-------------------------- Open HOME Detail-------------------------------
  let libaryLinkOnModal = document.querySelector('#header-library');
  //  console.log(libaryLinkOnModal, showHomePage);
  libaryLinkOnModal.addEventListener('click', cbShowLibPage);
  function cbShowLibPage(e) {
    showLibrary();
    htmlInstance.close();
    homeLinkOnModal.removeEventListener('click', cbShowHomePage);
  }
}
