/***********************************************
* LANGUAGE SCRIPTS
***********************************************/
$(function () {

	'use strict';
  
  $('.for__lang').on('click', function() {
    var buttonDIRLang = $(this).data('dir');
    localStorage.setItem('direction', buttonDIRLang);
    websiteLang(buttonDIRLang);
    window.location.reload();
  });
  
  let enBootstrapCss = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"; 
  
  let arBootstrapCss = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.rtl.min.css";
  
  var _direction;
  
  var _localLang = localStorage.getItem('direction');
  
  websiteLang(_localLang);

  function websiteLang(dir) {
    $("html").attr("dir", dir);
    if (dir == 'rtl') {
      $("html").attr("lang", 'ar');
      $(".swiper").each(function () {
        $(this).attr("dir", 'rtl');
      });
      $("#changeBootstrapCss").attr("href", arBootstrapCss);
      $('.en').removeClass('hide_lang');
      _direction = 'rtl';
    } else {
      $("html").attr("lang", 'en');
      $(".swiper").each(function () {
        $(this).attr("dir", '');
      });
      $("#changeBootstrapCss").attr("href", enBootstrapCss);
      $('.ar').removeClass('hide_lang');
      _direction = 'ltr';
    }
  }
  
})

/***********************************************
* NAVBAR SCRIPTS
***********************************************/
$(function () {

	'use strict';

  $('.md-action').on('click', function () {
    $('.navbar-collapse').collapse('hide');
    $('.menu').toggleClass('opened');
  });
  
  $('.menu').on('click', function () {
    $(this).toggleClass('opened');
  });  

  $(window).scroll(function() {
    if ($(window).scrollTop() > 700) {
      $('#back2Top').slideDown();
    } else if ($(window).scrollTop() > 50) {
      $('nav').css("background-color", "black");
    } else {
      $('#back2Top').slideUp();
      $('nav').css("background-color", "transparent");
    }
  });
  
})

/***********************************************
* INIT THIRD PARTY SCRIPTS
***********************************************/
/*--------------------------------------------------------------------------------------------------------------------*/
//Swiper
$(function () {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    speed: 500,
    spaceBetween: 5,

    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 7,
      },
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Disable preloading of all images
    preloadImages: true,

    // Enable lazy loading
    lazy: true,

  });
})

/*--------------------------------------------------------------------------------------------------------------------*/
//Plyr

const player = new Plyr('#player', {
  clickToPlay: false,
  fullscreen: {enabled: false},
});

/***********************************************
* Global SCRIPTS
***********************************************/
$(function () {

	'use strict';

  /*--------------------------------------------------------------------------------------------------------------------*/
  //To Top

  $("#back2Top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  /*--------------------------------------------------------------------------------------------------------------------*/
  //Current Year
  
  let date =  new Date().getFullYear();
  $('.current_year').text(date);

  /*--------------------------------------------------------------------------------------------------------------------*/
  
  $('.video__mute').on('click', function() {
    var volumeStatus = $(this).data('vol');

    if (volumeStatus == 'up') {
      $('.volume').removeClass('d-none');
      $('.mute').addClass('d-none');
      player.muted = false; // Sets volume at 100%
    } else {
      $('.volume').addClass('d-none');
      $('.mute').removeClass('d-none');
      player.muted = true; // Mute volume
    }
  });

  $('#exampleModalCenter').modal('show');

})