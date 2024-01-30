

document.addEventListener('DOMContentLoaded', function () {
  const mySwiper = new Swiper('.swiper', {
    effect: 'cards',
    grabCursor: true,
    perSlideOffset: 20,
    perSlideRotate: 2,
    initialSlide: 2,
    speed: 500,
    // loop: true,
    rotate: true,
    slideShadows: true,
    mousewheel: {
      invert: false,
    },
  });
});
