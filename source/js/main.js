import './../sass/style.scss';
import './image-slider.js';

import { getData } from './api.js';
import { renderCard } from './render-card.js';


getData(
  (flats) => {
    renderCard(flats);
  },
  () => {throw new Error('Ошибка')},
);