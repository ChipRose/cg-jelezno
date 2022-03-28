import 'swiper/scss';
import 'swiper/scss/pagination';
import { setSlider } from './image-slider';

const cardTemplate = document.querySelector('#flat-card').content.querySelector('.flats__item');
const flatsList = document.querySelector('.flats__list');



const renderCard = (flats) => {
  const cardFragment = document.createDocumentFragment();

  flats.forEach((flat, index) => {
    const flatItem = cardTemplate.cloneNode(true);
    const sliderList = flatItem.querySelector('.slider__list');
    const sliderItem = sliderList.querySelector('.slider__item');

    flatItem.querySelector('.flats__title').textContent = flat.name;
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

  flatsList.appendChild(cardFragment);

  const flatsItems = flatsList.querySelectorAll('.flats__item');
  flatsItems.forEach((flat, index) => {
    const sliderItems = flat.querySelectorAll('.slider__item');
    if (sliderItems.length > 1) {
      setSlider(`slider-${index}`, `pagination-${index}`);
    }
  })
};

export { renderCard };
