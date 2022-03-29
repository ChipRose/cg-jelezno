import 'swiper/scss';
import 'swiper/scss/pagination';

import { setSlider } from './image-slider';
import { filterData, setFilter } from './filter';

const cardTemplate = document.querySelector('#flat-card').content.querySelector('.flats__item');
const title = document.querySelector('.flats__title');
const flatsList = document.querySelector('.flats__list');

const createCardTitle = (flat) => {
  const {name, roomsQuantity, square} = flat;
  name[0].toUpperCase();
  const cardTitle = (name==='студия') ?  `${name}, ${square} м` :`${roomsQuantity}-к ${name}, ${square} м`;
  return cardTitle;
}

const renderCard = (flats) => {
  let flatQuantity = 0;
  const cardFragment = document.createDocumentFragment();

  flats
    .slice()
    .filter(flat => filterData(flat))
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

  flatsItems.forEach((flat, index) => {
    const sliderItems = flat.querySelectorAll('.slider__item');
    if (sliderItems.length > 1) {
      setSlider(`slider-${index}`, `pagination-${index}`);
    }
  })

  for (let item of flatsItems) {
    if (item) {
      flatQuantity++;
    }
  };

  title.textContent = `Найдено ${flatQuantity} планировок`;
};


export { renderCard };
