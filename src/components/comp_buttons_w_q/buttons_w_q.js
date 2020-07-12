import './buttons_style_w_q.css'
import './buttons_add.css'

const addToWatch = document.querySelector('.add_to_watched');
const addToQueue = document.querySelector('.add_to_queue');

//заглушка 1
let apiObj = {
  adult: false,
  backdrop_path: "/m11Mej9vbQqcXWgYrgPboCJ9NUh.jpg",
  belongs_to_collection: null,
  budget: 150000000,
  genres: (3) [{id: 12, name: "Adventure"}],
  homepage: "http://www.masterandcommanderthefarsideoftheworld.com/",
  id: 8619,
  imdb_id: "tt0311113",
  original_language: "en",
  original_title: "Master and Commander: The Far Side of the World",
  overview: "After an abrupt and violent encounter with a French warship inflicts severe damage upon his ship, a captain of the British Royal Navy begins a chase over two oceans to capture or destroy the enemy, though he must weigh his commitment to duty and ferocious pursuit of glory against the safety of his devoted crew, including the ship's thoughtful surgeon, his best friend.",
  popularity: 168.249,
  poster_path: "/s1cVTQEZYn4nSjZLnFbzLP0j8y2.jpg",
  production_companies: (4) [{id: 33, logo_path: "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png", name: "Universal Pictures", origin_country: "US"}],
  production_countries: [{iso_3166_1: "US"}],
  release_date: "2003-11-14",
  revenue: 212011111,
  runtime: 138,
  spoken_languages: (3) [{iso_639_1: "fr"}],
  status: "Released",
  tagline: "The courage to do the impossible lies in the hearts of men.",
  title: "Master and Commander: The Far Side of the World",
  video: false,
  vote_average: 7,
  vote_count: 1855,
}

//заглушка 2
let apiObj2 = {
  adult: false,
  backdrop_path: "/m11Mej9vbQqcXWgYrgPboCJ9NUh.jpg",
  belongs_to_collection: null,
  budget: 15000000012,
  genres: (3) [{id: 12, name: "Adventure"}],
  homepage: "http://www.masterandcommanderthefarsideoftheworld.com/",
  id: 861912,
  imdb_id: "tt0311113",
  original_language: "en",
  original_title: "Master and Commander: The Far Side of the World",
  overview: "After an abrupt and violent encounter with a French warship inflicts severe damage upon his ship, a captain of the British Royal Navy begins a chase over two oceans to capture or destroy the enemy, though he must weigh his commitment to duty and ferocious pursuit of glory against the safety of his devoted crew, including the ship's thoughtful surgeon, his best friend.",
  popularity: 168.24912,
  poster_path: "/s1cVTQEZYn4nSjZLnFbzLP0j8y2.jpg",
  production_companies: (4) [{id: 33, logo_path: "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png", name: "Universal Pictures", origin_country: "US"}],
  production_countries: [{iso_3166_1: "US"}],
  release_date: "2003-11-14",
  revenue: 212011111,
  runtime: 138,
  spoken_languages: (3) [{iso_639_1: "fr"}],
  status: "Released",
  tagline: "The courage to do the impossible lies in the hearts of men.",
  title: "Master and Commander: The Far Side of the World",
  video: false,
  vote_average: 7,
  vote_count: 1855999,
}




//добавить в локал сторэдж элемент watched(работает)
const addToLocalStorageWatched = function (obj, nameString) {
  if(!localStorage.getItem('watched')) {
    localStorage.setItem('watched', '[]')
  }
  const resultStr = localStorage.getItem(nameString);
  const resultArr = JSON.parse(resultStr);
  resultArr.push(obj);
  const str = JSON.stringify(resultArr);
  localStorage.setItem(nameString, str);
};

//добавить в локал сторэдж элемент queue(работает)
const addToLocalStorageQueue = function (obj, nameString) {
  if(!localStorage.getItem('queue')) {
    localStorage.setItem('queue', '[]')
  }
  const resultStr = localStorage.getItem(nameString);
  const resultArr = JSON.parse(resultStr);
  resultArr.push(obj);
  const str = JSON.stringify(resultArr);
  localStorage.setItem(nameString, str);
};

//убрать из локал сторэдж элемент(работает)
const removeFromLocalStorage = function (obj, nameString) {
  const resultStr = localStorage.getItem(nameString);
  const resultArr = JSON.parse(resultStr);
  const ID = obj.id;
  const removeID = resultArr.findIndex(index => index.id == ID);
  resultArr.splice(removeID, 1);
  const str = JSON.stringify(resultArr);
  localStorage.removeItem(nameString);
  localStorage.setItem(nameString, str);
};

//проверить есть ли такой элемент в нужном объекте локал сторэдж(работает, возвращает true или false)
const checkupLocalStorage = function (obj, nameString) {
  const resultStr = localStorage.getItem(nameString);
  const resultArr = JSON.parse(resultStr);
  const ID = obj.id;
  try {
    const findItem = resultArr.findIndex(index => index.id == ID);
    if(findItem !== -1) {
    return true
  } else return false
  } catch (e) {
    console.log('Local storage is empty')
  }
};


//добавление события на кнопку add to watched
addToWatch.addEventListener('click', e => {
  if(!addToWatch.classList.contains('is_active')) {
    addToWatch.classList.add('is_active');
    if(checkupLocalStorage(apiObj2, 'watched') === true) {
      return
    } else {
      addToLocalStorageWatched(apiObj2, 'watched');
    }
  } else if(addToWatch.classList.contains('is_active')) {
    removeFromLocalStorage(apiObj, 'watched');
    addToWatch.classList.remove('is_active');
  }
})



//добавление события на кнопку add to queue
addToQueue.addEventListener('click', e => {
  if(!addToQueue.classList.contains('is_active')) {
    addToQueue.classList.add('is_active');
    if(checkupLocalStorage(apiObj, 'queue') === true) {
      return
    } else {
      addToLocalStorageQueue(apiObj, 'queue');
    }
  } else if(addToQueue.classList.contains('is_active')) {
    removeFromLocalStorage(apiObj, 'queue');
    addToQueue.classList.remove('is_active');
  }
})



//проверка кнопок на наличие объекта в local storage
if(checkupLocalStorage(apiObj2, 'watched') === true) {
  addToWatch.classList.add('is_active');
};
if(checkupLocalStorage(apiObj, 'queue') === true) {
  addToQueue.classList.add('is_active');
};

//логика кнопок watched и queue
const refs = {
  buttons: document.querySelector('.js-buttons-block'),
  watched: document.querySelector('.js-watched'),
  queue: document.querySelector('.js-queue'),
}


refs.buttons.addEventListener('click', ev => {
  if(ev.target === refs.watched) {
    refs.watched.classList.add('is_active');
    refs.queue.classList.remove('is_active');
  } else {
    refs.watched.classList.remove('is_active');
    refs.queue.classList.add('is_active');
  }
});


//запросы по кнопкам Оли//


refs.watched.addEventListener('click', e => {
  const str = localStorage.getItem('watched');
  const data = JSON.parse(str);
  return console.log(data);
})

refs.queue.addEventListener('click', e => {
  const str = localStorage.getItem('queue')
  const data = JSON.parse(str);
  return console.log(data);
})
