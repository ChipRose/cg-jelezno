import './../sass/style.scss';

import { getData } from './api.js';
import { renderCard } from './render-card.js';

getData(
  (flats) => {
    renderCard(flats);
  },
  () => {throw new Error('Ошибка')},
);
