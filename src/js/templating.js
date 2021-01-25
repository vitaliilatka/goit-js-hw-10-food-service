import foodTemplate from '../templates/food.hbs';
import meals from '../menu.json';

const refs = {
  menu: document.querySelector('.js-menu'),
};

const markup = foodTemplate(meals);

refs.menu.insertAdjacentHTML('beforeend', markup);