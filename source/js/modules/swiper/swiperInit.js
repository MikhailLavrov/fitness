
import Swiper, {Navigation} from 'swiper';

// init Swiper:
const swiperInit = () => {
  // eslint-disable-next-line no-new
  new Swiper('.swiper1', {
    // configure Swiper to use modules
    modules: [Navigation],
    loop: true,
    autoHeight: false,
    touchRatio: 2,
    speed: 1000,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: 2,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 2,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },

    autoplay: 1000,

    keyboard: {
      enabled: true,
    },

    navigation: {
      nextEl: '.swiper1-button-next',
      prevEl: '.swiper1-button-prev',
    },
  });
};

export {swiperInit};
