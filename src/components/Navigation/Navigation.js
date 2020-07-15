import './Navigation.css';
import { renderAPI } from '../Main/Main.js';
import amountFilimDevice from '../Main/AmountFilimDevice.js';

export let containerPag = document.querySelector('.main-pagination-navigatin');
containerPag.addEventListener('click', cbel);
function cbel(e) {
  event.preventDefault();
  if (e.target.tagName === 'BUTTON') {
    // let numberPageActive = Number(e.target.textContent);
    let numberPageActive = Number(e.target.dataset.numpage);
    (renderAPI.activePage = numberPageActive), (containerPag.innerHTML = '');

    renderAPI.infoAllFilm(renderAPI.dataFilmsFlagQ, numberPageActive);
  }
}

export function pagination(activePage, amontPage) {
  let activePagePrevious1 = activePage - 1;
  let activePagePrevious2 = activePage - 2;

  let activePageNext1 = activePage + 1;
  let activePageNext2 = activePage + 2;
  let firstPage = 1;
  let lastPage = amontPage;

  let layoutCont = document.createElement('div');
  layoutCont.style.margin = '0 auto';
  layoutCont.style.width = 'max-content';

  layoutCont.insertAdjacentHTML(
    'afterbegin',
    `<button data-numpage="${activePage}" class="nav_pagin-act" >${activePage}</button>`,
  );

  if (activePagePrevious1 > 0) {
    layoutCont.insertAdjacentHTML(
      'afterbegin',
      `<button data-numpage="${activePagePrevious1}" class="nav_pagin">${activePagePrevious1}</button>`,
    );
  }
  if (activePagePrevious2 > 0) {
    layoutCont.insertAdjacentHTML(
      'afterbegin',
      `<button data-numpage="${activePagePrevious2}" class="nav_pagin">${activePagePrevious2}</button>`,
    );
  }

  if (
    firstPage !== activePage &&
    firstPage !== activePagePrevious1 &&
    firstPage !== activePagePrevious2 &&
    amountFilimDevice() > 4
  ) {
    layoutCont.insertAdjacentHTML(
      'afterbegin',
      `<button data-numpage="${firstPage}" class="nav_pagin">${firstPage} </button><span class="nav_span">...</span>`,
    );
  }

  if (activePageNext1 <= amontPage) {
    layoutCont.insertAdjacentHTML(
      'beforeend',
      `<button data-numpage="${activePageNext1}" class="nav_pagin">${activePageNext1}</button>`,
    );
  }
  if (activePageNext2 <= amontPage) {
    layoutCont.insertAdjacentHTML(
      'beforeend',
      `<button data-numpage="${activePageNext2}" class="nav_pagin">${activePageNext2}</button>`,
    );
  }

  if (activePagePrevious1 > 0) {
    layoutCont.insertAdjacentHTML(
      'afterbegin',
      `<button data-numpage="${activePagePrevious1}" class="nav_pagin_arrow-left">.</button>`,
    );
  }

  if (
    lastPage !== activePage &&
    lastPage !== activePagePrevious1 &&
    lastPage !== activePagePrevious2 &&
    amountFilimDevice() > 4
  ) {
    layoutCont.insertAdjacentHTML(
      'beforeend',
      `<span class="nav_span">...</span><button data-numpage="${lastPage}" class="nav_pagin">${lastPage} </button>`,
    );
  }

  if (activePageNext1 <= amontPage) {
    layoutCont.insertAdjacentHTML(
      'beforeend',
      `<button data-numpage="${activePageNext1}" class="nav_pagin_arrow-right">.</button>`,
    );
  }

  containerPag.insertAdjacentElement('afterbegin', layoutCont);
}
