import './../sass/style.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';

import './filter-view.js';

import _ from 'lodash';
import { getData } from './api.js';
import { renderCard } from './render-card.js';
import { setFilter, clearForm, clearCheckbox } from './filter.js';
import { setRangeListeners, setDefautFieldsState } from './range-slider.js';
import { setFilterView } from './filter-view.js';

const RERENDER_DELAY = 500;

getData.then((data) => {
  renderCard(data);
  setFilter(_.debounce(() => renderCard(data), RERENDER_DELAY));
  setRangeListeners(_.debounce(() => renderCard(data), RERENDER_DELAY));
  clearForm(() => renderCard(data));
});

setFilter(setFilterView);
clearForm(clearCheckbox, setDefautFieldsState);
