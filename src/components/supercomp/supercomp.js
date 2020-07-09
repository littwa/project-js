import './supercomp.css';
import { arrFilmsWatched } from '../Main/Main.js';
let n = document.querySelector('header');
let d = document.createElement('div');
d.classList.add('dd');
n.insertAdjacentElement('afterbegin', d);
d.insertAdjacentText('afterbegin', 'Компонент "supercomp"|');

export let obj = {
  prop: '[Свойство obj.prop from Компонент "supercomp"]',
  method() {
    return '[obj.method from Компонент "supercomp"]';
  },
};

d.insertAdjacentHTML(
  'beforeend',
  arrFilmsWatched.reduce(
    (ac, el) =>
      (ac += `<span >${el.q}</span><span>${el.w}</span><span>${el.e}</span>`),
    '<br> localStorage: ',
  ),
);
