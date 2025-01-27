// var TrendingSlider = new Swiper('.trending-slider', {
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     loop: true,
//     slidesPerView: 'auto',
//     coverflowEffect: {
//       rotate: 0,
//       stretch: 0,
//       depth: 100,
//       modifier: 2.5,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.button-next',
//       prevEl: '.button-prev',
//     }
//   });


var TrendingSlider = new Swiper('.trending-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 320,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2,
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
    },
    1200: {
      slidesPerView: 3
    }
  }
});