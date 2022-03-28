import 'nouislider/dist/nouislider.css';
import noUiSlider from 'nouislider';

const PriceValue = {
  MIN: 2354000,
  MAX: 3700000,
};

const SquareValue = {
  MIN: 26.8,
  MAX: 50,
};

const flatsFilters = document.querySelector('.flats-filters');
const priceRange = flatsFilters.querySelector('#price-range');
const squareRange = flatsFilters.querySelector('#square-range');


const setSlider = (sliderElement, min, max) => {
  sliderElement.innerHTML = '';
  const sliderOptions = {
    start: [min, max],
    connect: true,
    range: {
      'min': min,
      'max': max,
    },
  };

  const rangeSlider = noUiSlider.create(sliderElement, sliderOptions);
  return rangeSlider;
};

setSlider(priceRange, PriceValue.MIN, PriceValue.MAX);

setSlider(squareRange, SquareValue.MIN, SquareValue.MAX);
