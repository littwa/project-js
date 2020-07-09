
import ApiService from '../apiService/apiService.js'; // fetch class
import {createCartFilm, superItems} from '../main/index-list.js'; // подключаю Ul и массив superItems синхрон
const apiService = new ApiService()

// находим тест инпут 
const form = document.querySelector('#input')
// console.log(input);

// вешаю слушетеля
// form.addEventListener('input', searchFilms)


// метод отвечает за поиск  по названию apiService.getMovie
// ф-я ищет запрошенные фильмы  
// to do _.debounce, 500

function searchFilms(e){
    e.preventDefault()
    const inputValue = e.target.value   
    console.log(inputValue);
    if(inputValue.length !== 0){
        apiService.getMovie(inputValue).then(e => console.log(e));
    }else{
        return console.log('empty');
    }
}