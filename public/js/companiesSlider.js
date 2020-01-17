
import Swipper from 'swiper';
(() => {
  const options = {
    autoplay: {
        delay: 1700
    },
    slidesPerView: 'auto',
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    spaceBetween: 40,
    loop: true,
    pagination: {
        dynamicBullets: true,
        clickable: true
    },
    breakpoints: {
        200: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        }
    }
}

  const companiesSlider = new Swipper('.swiper-container', options);
})();
