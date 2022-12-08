
import Swiper, {Navigation} from 'swiper';

// init Swiper:
const swiper2Init = () => {
  // eslint-disable-next-line no-new
  new Swiper('.swiper2', {
    // configure Swiper to use modules
    modules: [Navigation],
    loop: false,
    autoHeight: false,
    touchRatio: 2,
    slidesPerView: 1,

    autoplay: {
      delay: 2000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },

    speed: 1000,

    keyboard: {
      enabled: true,
    },

    navigation: {
      nextEl: '.swiper2-button-next',
      prevEl: '.swiper2-button-prev',
    },
  });
};

export {swiper2Init};
