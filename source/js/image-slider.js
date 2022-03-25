import Swiper from 'swiper';


const setSlider = (element) => {
  const sliderOptions = {
    // modules: [Pagination],

    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    loop: true,
  };
  return new Swiper(`.${element}`, sliderOptions);
}

export { setSlider };
