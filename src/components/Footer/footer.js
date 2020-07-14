import './footer.css';
import listOfDevs from './team-section.html';

import { containerFilms } from '../Main/Main.js';

const contactLink = document.querySelector('.footer-contact-link');
const containerMain = document.querySelector('.main-section');

contactLink.addEventListener('click', openContacts);

function openContacts() {
  containerFilms.innerHTML = '';

  containerFilms.insertAdjacentHTML('beforeend', listOfDevs);
}
