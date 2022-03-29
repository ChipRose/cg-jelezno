import { priceRangeSlider, squareRangeSlider } from './range-slider.js';

const projectValues = {
  znak: 'ZNAK',
  lomonosov: 'На Ломоносова',
  vasilki: 'Васильки',
  kalinina: 'На Калинина',
};

const filter = document.querySelector('.flats-filters');
const projectFilter = filter.querySelector('.flats-filters__project');

const filterData = (flat) => {
  const { housingComplexName, minPrice, roomsQuantity } = flat;
  let flag = true;

  const checkedProjects = projectFilter.querySelectorAll('input:checked');
  const checkedRoom = document.querySelectorAll('input[name=rooms]');

  for (let room of checkedRoom) {
    if (room.checked) {
      const isIntValue = (room.value.length === parseInt(room.value).toString().length) ? true : false;
      if (isIntValue) {
        return flag = (roomsQuantity === parseInt(room.value)) ? true : false;
      } else {
        return flag = (roomsQuantity >= parseInt(room.value)) ? true : false;
      };
    }
  };

  for (let project of checkedProjects) {
    if (housingComplexName === projectValues[project.value]) {
      return flag = true;
    } else {
      flag = false;
    }
  };

  return flag;
};


const setFilter = (cb) => {
  filter.addEventListener('change', () => {
    cb();
  })
};

export { setFilter, filterData };

