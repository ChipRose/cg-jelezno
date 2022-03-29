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

  for (let project of checkedProjects) {
    if (housingComplexName === projectValues[project.value]){
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

