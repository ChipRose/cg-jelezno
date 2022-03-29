import { priceRangeSlider, squareRangeSlider } from './range-slider.js';

const projectValues = {
  znak: 'ZNAK',
  lomonosov: 'На Ломоносова',
  vasilki: 'Васильки',
  kalinina: 'На Калинина',
};

const filter = document.querySelector('.flats-filters');

const filterProject = (flat) => {
  let flag = true;

  const projectCheckedFields = document.querySelectorAll('input[name=project]:checked');

  for (let project of projectCheckedFields) {
    if (flat.housingComplexName === projectValues[project.value]) {
      return flag = true;
    } else {
      flag = false;
    }
  };

  return flag;
};

const filterRooms = (flat) => {
  let flag = true;

  const roomFields = document.querySelectorAll('input[name=rooms]');

  for (let room of roomFields) {
    if (room.checked) {
      const isIntValue = (room.value.length === parseInt(room.value).toString().length) ? true : false;
      if (isIntValue) {
        return flag = (flat.roomsQuantity === parseInt(room.value)) ? true : false;
      } else {
        return flag = (flat.roomsQuantity >= parseInt(room.value)) ? true : false;
      };
    }
  };

  return flag;
};

const filterPrice = (flat) => {
  let flag = true;

  const MILLION_COEFFICIENT = Math.pow(10, 6)
  const minPrice = document.querySelector('input[name=priceMin]');
  const maxPrice = document.querySelector('input[name=priceMax]');

  const flatPrice = flat.minPrice * MILLION_COEFFICIENT;

  console.log(flatPrice>minPrice.value);

  (flatPrice >= parseFloat(minPrice.value) && flatPrice <= parseFloat(maxPrice.value)) ? flag = true : flag = false;

  return flag;
};

const setFilter = (cb) => {
  filter.addEventListener('change', () => {
    cb();
  })
};

export { setFilter, filterProject, filterRooms, filterPrice };

