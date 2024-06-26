var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    autoplay:{
        delay:2500,
        disableOnInteraction:true
    },
    grabCursor: true,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });