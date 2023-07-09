const swiper = new Swiper('.mySwiper', {

  spaceBetween: 80,
  loop: true,
  slidesPerView: 5,
  speed: 200,

    navigation: {
      nextEl: '.button-right',
      prevEl: '.button-left',
    },
  
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    750: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 5,
      spaceBetween: 90,
    },
    1380: {
      slidesPerView: 6,
      spaceBetween: 120,
    },
    1480: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1588: {
      slidesPerView: 5,
      spaceBetween: 80,
    }
  },
    
});

const swiperTest = new Swiper('.swiper', {

  slidePerWiew: 'auto',
  spaceBetween: 1,

  
    navigation: {
      nextEl: '.button-right',
      prevEl: '.button-left',
    },
    
});






