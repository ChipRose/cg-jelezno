import 'swiper/scss';
import 'swiper/scss/pagination';

import Swiper, { Pagination } from 'swiper';
Swiper.use([ Pagination ]);

const sliderOptions = {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
};

new Swiper('.flats__item', sliderOptions);