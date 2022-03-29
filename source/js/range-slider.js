import 'nouislider/dist/nouislider.css';

import noUiSlider from 'nouislider';

const LimitValue = {
  PRICE: {
    MIN: 2354000,
    MAX: 3700000,
    STEP: 5000,
  },
  SQUARE: {
    MIN: 26.8,
    MAX: 50,
    STEP: 0.1,
  },
};

const FieldProperties = {
  PRICE: {
    MAIN_FIELD: '.flats-filters__price',
    MIN_FIELD: '#price-min',
    MAX_FIELD: '#price-max',
    MIN_ID: 'price-min',
    ACCURACY: 0,
  },
  SQUARE: {
    MAIN_FIELD: '.flats-filters__square',
    MIN_FIELD: '#square-min',
    MAX_FIELD: '#square-max',
    MIN_ID: 'square-min',
    ACCURACY: 1,
  },
};

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

const priceRangeSlider = setSlider(priceRange, LimitValue.PRICE.MIN, LimitValue.PRICE.MAX, LimitValue.PRICE.STEP);
const squareRangeSlider = setSlider(squareRange, LimitValue.SQUARE.MIN, LimitValue.SQUARE.MAX, LimitValue.SQUARE.STEP);

const setRangeSliderDependencies = (field, sliderElement) => {
  const { MAIN_FIELD, MIN_FIELD, MAX_FIELD, MIN_ID, ACCURACY } = field;

  const filter = document.querySelector(MAIN_FIELD);
  const minField = filter.querySelector(MIN_FIELD);
  const maxField = filter.querySelector(MAX_FIELD);
  const coefficient = Math.pow(10, ACCURACY);

  minField.value='';
  //sliderElement.noUiSlider.set([minField.value, null]);
  //sliderElement.noUiSlider.set([null, maxField.value]);

  sliderElement.noUiSlider.on('update', (values, handle) => {
    handle === 0 ? minField.value = parseFloat(values[handle]) : maxField.value = parseFloat(values[handle]);
  });

  filter.addEventListener('input', (evt) => {
    //evt.target.id === MIN_ID ? sliderElement.noUiSlider.set([minField.value, null]) :sliderElement.noUiSlider.set([null, maxField.value]);
    // checkValidity(minField.value, maxField.value, evt.target);
    // filter.reportValidity();
  });
};

setRangeSliderDependencies(FieldProperties.PRICE, priceRange);

setRangeSliderDependencies(FieldProperties.SQUARE, squareRange);

export { priceRangeSlider, squareRangeSlider };
