import './footer.css';
import listOfDevs from './team-section.html';

import { containerFilms } from '../Main/Main.js';
import { containerPag } from '../Navigation/Navigation.js';

const contactLink = document.querySelector('.footer-contact-link');
const containerMain = document.querySelector('.main-section');

contactLink.addEventListener('click', openContacts);

export function openContacts() {
  containerFilms.innerHTML = '';
  containerPag.innerHTML = '';

  containerFilms.insertAdjacentHTML('beforeend', listOfDevs);
}
