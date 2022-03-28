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

const Step = {
  PRICE: 5000,
  SQUARE: 0.1,
}

const flatsFilters = document.querySelector('.flats-filters');
const priceRange = flatsFilters.querySelector('#price-range');
const squareRange = flatsFilters.querySelector('#square-range');

const setSlider = (sliderElement, min, max, step) => {
  sliderElement.innerHTML = '';
  const sliderOptions = {
    start: [min, max],
    connect: true,
    step,
    range: {
      'min': min,
      'max': max,
    },
  };

  return noUiSlider.create(sliderElement, sliderOptions);
};

const priceRangeSlider = setSlider(priceRange, PriceValue.MIN, PriceValue.MAX, Step.PRICE);

const squareRangeSlider = setSlider(squareRange, SquareValue.MIN, SquareValue.MAX, Step.SQUARE);

export { priceRangeSlider, squareRangeSlider };
