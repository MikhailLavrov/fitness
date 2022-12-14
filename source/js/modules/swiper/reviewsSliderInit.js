
import Swiper, {Navigation} from 'swiper';

// init Swiper:
const reviewsSliderInit = () => {
  // eslint-disable-next-line no-new
  new Swiper('.reviews-swiper', {
    // configure Swiper to use modules
    modules: [Navigation],
    loop: false,
    autoHeight: false,
    touchRatio: 2,
    slidesPerView: 1,

    speed: 1000,

    navigation: {
      nextEl: '.reviews-swiper-button-next',
      prevEl: '.reviews-swiper-button-prev',
    },
  });
};

export {reviewsSliderInit};
