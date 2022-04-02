import 'swiper/scss';
import 'swiper/scss/pagination';

import { setSlider } from './image-slider';
import { filterProject, filterRooms, filterPrice, filterSquare, filterPlan } from './filter';
import { chooseCompare } from './sort';

const EXEPTION_FOR_TITLE = 'студия';
const CARD_QUANTITY_ROW = 3;

const cardTemplate = document.querySelector('#flat-card').content.querySelector('.flats__item');
const title = document.querySelector('.main-title');
const flatsList = document.querySelector('.flats__list');

const createCardTitle = (flat) => {
  const { name, roomsQuantity, square } = flat;
  name[0].toUpperCase();
  const cardTitle = (name === EXEPTION_FOR_TITLE) ? `${name.replace(name[0], name[0].toUpperCase())}, ${square} м` : `${roomsQuantity}-к ${name}, ${square} м`;
  return cardTitle;
};

const renderCard = (flats) => {
  let flatQuantity = 0;
  const cardFragment = document.createDocumentFragment();

  flats
    .slice()
    .filter(flat => filterRooms(flat))
    .filter(flat => filterPlan(flat))
    .filter(flat => filterProject(flat))
    .filter(flat => filterPrice(flat))
    .filter(flat => filterSquare(flat))
    .sort(chooseCompare())
    .forEach((flat, index) => {
      const flatItem = cardTemplate.cloneNode(true);
      const sliderList = flatItem.querySelector('.slider__list');
      const sliderItem = sliderList.querySelector('.slider__item');
      flatItem.querySelector('.flats__title span').textContent = createCardTitle(flat);
      flatItem.querySelector('.flats__subtitle').textContent = flat.housingComplexName;
      flatItem.querySelector('.favorite').id = `favorite-${flat.id}`;
      flatItem.querySelector('.favorite__label').htmlFor = `favorite-${flat.id}`;
      flatItem.querySelector('.flats__quantity').textContent = `${flat.sameLayoutFlatCount} квартир`;
      flatItem.querySelector('.flats__min-price').textContent = `от ${flat.minPrice} млн ₽`;
      flatItem.querySelector('.swiper').classList.add(`slider-${index}`);
      flatItem.querySelector('.swiper-pagination').classList.add(`pagination-${index}`);
      sliderList.innerHTML = '';
      flat.planLink.forEach((link) => {
        const newSlide = sliderItem.cloneNode(true);

        newSlide.querySelector('.slider__img').src = link;
        sliderList.appendChild(newSlide);
      })

      cardFragment.appendChild(flatItem);
    });

  flatsList.innerHTML = '';
  flatsList.appendChild(cardFragment);

  const flatsItems = flatsList.querySelectorAll('.flats__item');

  for (let item of flatsItems) {
    if (item) {
      flatQuantity++;
    }
  }

  const rowQuantity = parseInt(flatQuantity / CARD_QUANTITY_ROW);
  let exceptionIndex = 0;

  if (flatQuantity % CARD_QUANTITY_ROW !== 0) {
    exceptionIndex = rowQuantity * CARD_QUANTITY_ROW;
  } else {
    exceptionIndex = flatQuantity - CARD_QUANTITY_ROW;
  }

  flatsItems.forEach((flat, index) => {
    const sliderItems = flat.querySelectorAll('.slider__item');

    if (sliderItems.length > 1) {
      setSlider(`slider-${index}`, `pagination-${index}`);
    }

    if (index >= exceptionIndex) {
      flat.classList.add('flats-item--correct-height')
    }
  })



  title.textContent = `Найдено ${flatQuantity} планировок`;
};

export { renderCard };
