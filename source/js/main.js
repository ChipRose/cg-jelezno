import './../sass/style.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';

import './filter.js';

import { getData } from './api.js';
import { renderCard } from './render-card.js';

getData.then((data) => {
    renderCard(data);
  }
);
