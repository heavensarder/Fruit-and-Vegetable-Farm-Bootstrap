// HEADER SLIDE CODE HERE
var swiper = new Swiper(".heroSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });

//  TESTIMONIAL SLIDE CODE 
var swiper = new Swiper(".testimonialSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next-button",
    prevEl: ".previous-button",
  },
});
// SWIPER FOR LOGO SLIDE CODE STARTS HERE
var swiper = new Swiper(".mySwiperLogo", {
  slidesPerView: 5,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 20,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }


});