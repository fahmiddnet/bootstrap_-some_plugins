//  Initialize Swiper 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    freeMode:true,
    watchSlidesProgress:true,
    loop:true,
    autoplay: {
        delay:2500,
        disableOnInteraction:false,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    // navigation: {
    //     nextE1: ".swiper-button-next",
    //     prevE1: ".swiper-button-prev",
    // },
});

var swiper2 = new Swiper(".mySwiper2", {
    loop:true,
    effect:"fade",
    zoom:true,
    keyboard:{
        enabled:true,
    },
    autoplay: {
        delay:2500,
        disableOnInteraction:false,
    },
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
    thumbs: {
        swiper:swiper,
    },    
});


lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })


  $('.youtube').colorbox({iframe: true, width: 640, height: 390, href:function(){
    var videoId = new RegExp('[\\?&]v=([^&#]*)').exec(this.href);
    if (videoId && videoId[1]) {
      return 'http://youtube.com/embed/'+videoId[1]+'?rel=0&wmode=transparent';
    }
  }});