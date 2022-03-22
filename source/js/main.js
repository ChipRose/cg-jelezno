import './../css/style.css';

import { getData } from './api.js';

getData(
  (flats) => {
    console.log(flats);
  },
  () => {
    throw new Error('Ошибка');
  },
);
