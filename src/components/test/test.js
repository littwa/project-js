import './test.css';
import { obj } from '../supercomp/supercomp.js';
let n = document.querySelector('header');
let d = document.createElement('div');
d.classList.add('ddd');
n.insertAdjacentElement('afterbegin', d);
d.insertAdjacentText('afterbegin', 'Компонент "test"|');
d.insertAdjacentText('beforeend', obj.method());

export default function fn() {
  return '[Пример export default function fn() с Компонента "test"]';
}
