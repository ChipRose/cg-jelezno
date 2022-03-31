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
    ACCURACY: 0,
  },
  SQUARE: {
    MAIN_FIELD: '.flats-filters__square',
    MIN_FIELD: '#square-min',
    MAX_FIELD: '#square-max',
    ACCURACY: 1,
  },
};

const flatsFilters = document.querySelector('.flats-filters');
const priceRange = flatsFilters.querySelector('#price-range');
const squareRange = flatsFilters.querySelector('#square-range');

const minPrice = flatsFilters.querySelector('#price-min');
const maxPrice = flatsFilters.querySelector('#price-max');
const minSquare = flatsFilters.querySelector('#square-min');
const maxSquare = flatsFilters.querySelector('#square-max');

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

setSlider(priceRange, LimitValue.PRICE.MIN, LimitValue.PRICE.MAX, LimitValue.PRICE.STEP);
setSlider(squareRange, LimitValue.SQUARE.MIN, LimitValue.SQUARE.MAX, LimitValue.SQUARE.STEP);

const setSliderDependencies = (field, sliderElement, limit) => {
  const { MAIN_FIELD, MIN_FIELD, MAX_FIELD, ACCURACY } = field;
  const { MIN, MAX } = limit;

  const mainField = document.querySelector(MAIN_FIELD);
  const minField = document.querySelector(MIN_FIELD);
  const maxField = document.querySelector(MAX_FIELD);

  sliderElement.noUiSlider.set([MIN, MAX]);

  sliderElement.noUiSlider.on('update', (values, handle) => {
    if (handle === 0) {
      minField.focus();
      minField.value = parseFloat(values[handle]).toFixed(ACCURACY);
      minField.blur();
    } else {
      maxField.focus();
      maxField.value = parseFloat(values[handle]).toFixed(ACCURACY);
      maxField.blur();
    }
  });

  mainField.addEventListener('change', (evt) => {
    evt.target.id === minField.id ? sliderElement.noUiSlider.set([evt.target.value, null]) : sliderElement.noUiSlider.set([null, evt.target.value]);
  });
};

setSliderDependencies(FieldProperties.PRICE, priceRange, LimitValue.PRICE);
setSliderDependencies(FieldProperties.SQUARE, squareRange, LimitValue.SQUARE);

const setRangeListeners = (cb) => {
  minPrice.addEventListener('blur', () => {
    cb();
  });
  maxPrice.addEventListener('blur', () => {
    cb();
  });
  minSquare.addEventListener('blur', () => {
    cb();
  });
  maxSquare.addEventListener('blur', () => {
    cb();
  });
};

const setDefautFieldsState = () => {
  minPrice.value = LimitValue.PRICE.MIN;
  maxPrice.value = LimitValue.PRICE.MAX;
  minSquare.value = LimitValue.SQUARE.MIN;
  maxSquare.value = LimitValue.SQUARE.MAX;
};

setDefautFieldsState();

export { setRangeListeners, setDefautFieldsState };
