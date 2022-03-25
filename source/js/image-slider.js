import Swiper, {Pagination} from 'swiper';


const setSlider = (element, pagination) => {
  const sliderOptions = {
    modules: [Pagination],

    pagination: {
      el: `.${pagination}`,
      clickable: true,
    },
    loop: true,
  };
  return new Swiper(`.${element}`, sliderOptions);
}

export { setSlider };
