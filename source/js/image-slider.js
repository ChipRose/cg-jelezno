import 'swiper/scss';
import 'swiper/scss/pagination';

import Swiper, { Pagination } from 'swiper';

const sliderOptions = {
  modules: [Pagination],

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
};

const slider = new Swiper('.slider', sliderOptions);

export {slider};