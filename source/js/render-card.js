import 'swiper/scss';
import 'swiper/scss/pagination';
import { setSlider } from './image-slider';

const cardTemplate = document.querySelector('#flat-card').content.querySelector('.flats__item');
const flatsList = document.querySelector('.flats__list');



const renderCard = (flats) => {
  const cardFragment = document.createDocumentFragment();

  flats.forEach((flat, index) => {
    const flatItem = cardTemplate.cloneNode(true);

    flatItem.querySelector('.flats__title').textContent = flat.name;
    flatItem.querySelector('.flats__subtitle').textContent = flat.housingComplexName;
    flatItem.querySelector('.favorite').id = `favorite-${index}`;
    flatItem.querySelector('.favorite__label').htmlFor = `favorite-${index}`;
    flatItem.querySelector('.flats__quantity').textContent = `${flat.sameLayoutFlatCount} квартир`;
    flatItem.querySelector('.flats__min-price').textContent = `от ${flat.minPrice} млн ₽`;
    flatItem.querySelector('.swiper').classList.add(`slider-${index}`);
    flatItem.querySelector('.flats__img').src = flat.planLink;
    cardFragment.appendChild(flatItem);
  });
  flatsList.appendChild(cardFragment);

  const flatsItems = flatsList.querySelectorAll('.flats__item');
  flatsItems.forEach((__, index) => {
    setSlider(`slider-${index}`);
  })
};

export { renderCard };
