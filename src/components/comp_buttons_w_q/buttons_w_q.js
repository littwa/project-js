import './buttons_style_w_q.css';
import './buttons_add.css';
import { renderAPI } from '../Main/Main.js';

export function addFunctionLocalStor() {
  let apiObj = renderAPI.clickedPageObject;
  console.log(apiObj);
  let addToWatch = document.querySelector('.add_to_watched');
  let addToQueue = document.querySelector('.add_to_queue');

  //добавить в локал сторэдж элемент watched(работает)
  const addToLocalStorageWatched = function (obj, nameString) {
    if (!localStorage.getItem('watched')) {
      localStorage.setItem('watched', '[]');
    }
    const resultStr = localStorage.getItem(nameString);
    const resultArr = JSON.parse(resultStr);
    resultArr.push(obj);
    const str = JSON.stringify(resultArr);
    localStorage.setItem(nameString, str);
  };

  //добавить в локал сторэдж элемент queue(работает)
  const addToLocalStorageQueue = function (obj, nameString) {
    if (!localStorage.getItem('queue')) {
      localStorage.setItem('queue', '[]');
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
      if (findItem !== -1) {
        return true;
      } else return false;
    } catch (e) {
      console.log('Local storage is empty');
    }
  };

  //добавление события на кнопку add to watched
  // console.log(addToWatch, addToQueue);
  addToWatch.addEventListener('click', e => {
    console.log('12121212');
    if (!addToWatch.classList.contains('is_active')) {
      addToWatch.classList.add('is_active');
      if (checkupLocalStorage(apiObj, 'watched') === true) {
        return;
      } else {
        addToLocalStorageWatched(apiObj, 'watched');
      }
    } else if (addToWatch.classList.contains('is_active')) {
      removeFromLocalStorage(apiObj, 'watched');
      addToWatch.classList.remove('is_active');
    }
  });

  //добавление события на кнопку add to queue
  addToQueue.addEventListener('click', e => {
    if (!addToQueue.classList.contains('is_active')) {
      addToQueue.classList.add('is_active');
      if (checkupLocalStorage(apiObj, 'queue') === true) {
        return;
      } else {
        addToLocalStorageQueue(apiObj, 'queue');
      }
    } else if (addToQueue.classList.contains('is_active')) {
      removeFromLocalStorage(apiObj, 'queue');
      addToQueue.classList.remove('is_active');
    }
  });

  //проверка кнопок на наличие объекта в local storage
  if (checkupLocalStorage(apiObj, 'watched') === true) {
    addToWatch.classList.add('is_active');
  }
  if (checkupLocalStorage(apiObj, 'queue') === true) {
    addToQueue.classList.add('is_active');
  }
}
