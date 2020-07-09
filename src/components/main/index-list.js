import './style-list.css';
import ApiService from '../apiService/apiService.js'; // fetch запрос на все фильмы 
import liTempalte from '../templates/template-film_list.hbs';

const Handlebars = require("handlebars");

// const homeBtn = document.querySelector('.btn-head');
const containerFilms = document.querySelector('.container_cart-films');



// console.log(homeBtn);
// homeBtn.addEventListener('click', onBtn)

export let superItems = []
// function onBtn(e){ 
    const apiService = new ApiService();
    apiService.infoAllFilm().then(filmItems => {
    superItems = filmItems
    return createCartFilm(filmItems)
})

// }


//--fetch



//--create LI -+ temple  export // 
export function createCartFilm(filmItems){
    const html = filmItems.map(film => liTempalte(film)).join('')
    containerFilms.insertAdjacentHTML('beforeend', html)
}
