import './footer.css';
import listOfDevs from './team-section.html';
import { refs, showHomePage, showLibrary } from '../Header/header';

const contactLink = document.querySelector('.footer-contact-link');
const containerMain = document.querySelector('.main-section');

contactLink.addEventListener('click', openContacts);

function openContacts() {
  containerMain.innerHTML = '';

  containerMain.insertAdjacentHTML('beforeend', listOfDevs);
  refs.library.addEventListener('click', showLibrary);
  refs.home.addEventListener('click', showHomePage);
}
