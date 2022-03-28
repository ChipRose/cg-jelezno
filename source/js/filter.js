import { priceRangeSlider, squareRangeSlider } from './range-slider.js';

const FieldProperties = {
  PRICE: {
    MAIN_FIELD: '.flats-filters__price',
    MIN_FIELD: '#price-min',
    MAX_FIELD: '#price-max',
    MIN_ID: 'price-min',
  },
  SQUARE: {
    MAIN_FIELD: '.flats-filters__square',
    MIN_FIELD: '#square-min',
    MAX_FIELD: '#square-max',
    MIN_ID: 'square-min',
  },
};

const setRangeSliderDependencies = (field, slider) => {
  const { MAIN_FIELD, MIN_FIELD, MAX_FIELD, MIN_ID } = field;

  const filter = document.querySelector(MAIN_FIELD);
  const minField = filter.querySelector(MIN_FIELD);
  const maxField = filter.querySelector(MAX_FIELD);

  minField.value = slider.get(true)[0];
  maxField.value = slider.get(true)[1];

  slider.on('slide', (values) => {
    minField.value = Number(values[0]).toFixed(0);
    maxField.value = Number(values[1]).toFixed(0);
  });

  filter.addEventListener('input', (evt) => {
    evt.target.id === MIN_ID ? slider.set([minField.value, null]) : slider.set([null, maxField.value]);
  });
};

setRangeSliderDependencies(FieldProperties.PRICE, priceRangeSlider);

setRangeSliderDependencies(FieldProperties.SQUARE, squareRangeSlider);

