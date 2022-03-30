import './../sass/style.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';

import { getData } from './api.js';
import { renderCard } from './render-card.js';
import { setFilter } from './filter.js';
import {setRangeListeners} from './range-slider.js'

getData.then((data) => {
  renderCard(data);
  setFilter(() => renderCard(data));
  setRangeListeners(()=>renderCard(data));
});
