
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

    speed: 1000,

    navigation: {
      nextEl: '.swiper2-button-next',
      prevEl: '.swiper2-button-prev',
    },
  });
};

export {swiper2Init};
