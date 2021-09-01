





let mySwiper6 = new Swiper ('#swiper06', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    
    loop: true,
    speed:1000,
    slidesPerView: '1.4',
    spaceBetween: 10,
    // direction: 'horizontal',
    effect: 'cube',

    
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      paginationType: 'custom',
      
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //  // レスポンシブ化条件
    //  breakpoints: {
    //     // 980ピクセル幅以下になったら
    //     980: {
    //       slidesPerView: 3,
    //       spaceBetween: 30
    //     },
    //     // 640ピクセル幅以下になったら
    //     640: {
    //       slidesPerView: 2,
    //       spaceBetween: 20
    //     }
    //   },


  })