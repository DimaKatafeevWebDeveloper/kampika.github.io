// прелоадер

window.onload = function () {
   document.body.classList.add('loaded_hiding');
   window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
   }, 500);
}


// появление меню при скролле вверх

// взял отсюда: https://keengo.ru/blog/javascript/skrytie-menyu-pri-prokrutke-vniz-i-otobrazhenie-pri-prokrutke-naverkh/

let header = $('.header'),
   scrollPrev = 0;

$(window).scroll(function () {
   let scrolled = $(window).scrollTop();

   if (scrolled > 100 && scrolled > scrollPrev) {
      header.addClass('out');

   }
   else if (scrolled < 100) {

      header.addClass('out');
   }
   else {
      header.removeClass('out');


   }
   scrollPrev = scrolled;
});

// бургер

$("#brg1").on('click', function () {
   $(".burger").toggleClass('x');
   $(".header__menu").toggleClass('show slideDown') && header.toggleClass('out');
   $("body").toggleClass('modal-open');
});


$("#brg2").on('click', function () {
   $(".burger").toggleClass('x');
   $(".header__menu").toggleClass('show slideDown');
   $("body").toggleClass('modal-open');
});





// добавление класса при hover



$('.menu__link').hover(
   function () { $('.menu__link').removeClass('active') && $(this).addClass('active') },
   function () { $('.about-link').addClass('active') }
);

$('.s4__link').hover(
   function () { $('.s4__link').removeClass('active') && $(this).addClass('active') },
   function () {

   }
);

$('.about-link').hover(
   function () { $('.about-link').removeClass('active') && $(this).addClass('active') },
   function () { $('.about-link').addClass('active') }
);

$('.social-link').hover(
   function () { $('.social-link').removeClass('active') && $(this).addClass('active') },
   function () { $('.social-link').addClass('active') }
);

// открытие попапа

$(".button-popup").on('click', function () {
   $(".popup").css('display', 'flex');
});

$(".close-popup").on('click', function () {
   $(".popup").css('display', 'none');
});


// показ картинок при hover

$(".s4-l1").hover(function () {
   $('.s4-1').show() && $('.s4-2, .s4-3, .s4-4, .s4-5').hide();
});

$(".s4-l2").hover(function () {
   $('.s4-2').show() && $('.s4-1, .s4-3, .s4-4, .s4-5').hide();
});

$(".s4-l3").hover(function () {
   $('.s4-3').show() && $('.s4-1, .s4-2, .s4-4, .s4-5').hide();
});

$(".s4-l4").hover(function () {
   $('.s4-4').show() && $('.s4-1, .s4-2, .s4-3, .s4-5').hide();
});

$(".s4-l5").hover(function () {
   $('.s4-5').show() && $('.s4-1, .s4-2, .s4-3, .s4-4').hide();
});

// анимация

let block_show = null;

function scrollTracking() {
   let s1_wt = $(window).scrollTop();
   let s1_wh = $(window).height();
   let s1_et = $('.s1__title, .s1__logo, .s1__pre-title, .burger-menu, .button-popup, .s1__social').offset().top;
   let s1_eh = $('.s1__title, .s1__logo, .s1__pre-title, .s1__social').outerHeight();
   let s2_wt = $(window).scrollTop();
   let s2_wh = $(window).height();
   let s2_et = $('.play').offset().top;
   let s2_eh = $('.play').outerHeight();
   let s3_wt = $(window).scrollTop();
   let s3_wh = $(window).height();
   let s3_et = $('.s3__title, .s3__text, .s3__button').offset().top;
   let s3_eh = $('.s3__title, .s3__text, .s3__button').outerHeight();
   let s4_wt = $(window).scrollTop();
   let s4_wh = $(window).height();
   let s4_et = $('.s4__title, .s4__list').offset().top;
   let s4_eh = $('.s4__title, .s4__list').outerHeight();
   let s5_wt = $(window).scrollTop();
   let s5_wh = $(window).height();
   let s5_et = $('.s5__title, .s5__text, .s5__partenrs').offset().top;
   let s5_eh = $('.s5__title, .s5__text, .s5__partenrs').outerHeight();
   let s6_wt = $(window).scrollTop();
   let s6_wh = $(window).height();
   let s6_et = $('.s6__title').offset().top;
   let s6_eh = $('.s6__title').outerHeight();
   let s8_wt = $(window).scrollTop();
   let s8_wh = $(window).height();
   let s8_et = $('.s8__title').offset().top;
   let s8_eh = $('.s8__title').outerHeight();
   let s9_wt = $(window).scrollTop();
   let s9_wh = $(window).height();
   let s9_et = $('.s9__title').offset().top;
   let s9_eh = $('.s9__title').outerHeight();
   let s10_wt = $(window).scrollTop();
   let s10_wh = $(window).height();
   let s10_et = $('.s10__title, .s10__text, .s10__button').offset().top;
   let s10_eh = $('.s10__title, .s10__text, .s10__button').outerHeight();
   let s11_wh = $(window).height();
   let s11_et = $('.s11__b-left, .s11__b-right, .s11__cols, .s11__md3-dn').offset().top;
   let s11_eh = $('.s11__b-left, .s11__b-right, .s11__cols, .s11__md3-dn').outerHeight();
   let s11_wt = $(window).scrollTop();
   let f_wh = $(window).height();
   let f_et = $('.footer__links, .footer__copy').offset().top;
   let f_eh = $('.footer__links, .footer__copy').outerHeight();
   let f_wt = $(window).scrollTop();



   if (s1_wt + s1_wh >= s1_et && s1_wt + s1_wh - s1_eh * 2 <= s1_et + (s1_wh - s1_eh)) {
      if (block_show == null || block_show == false) {
         $('.s1__title, .s1__logo, .s1__pre-title, .burger-menu, .button-popup, .s1__social').addClass('fadeD');
      }
      block_show = true;
   } else {
      if (block_show == null || block_show == true) {
         $('.s1__title, .s1__logo, .s1__pre-title, .burger-menu, .button-popup, .s1__social').removeClass('fadeD');
      }
      block_show = false;
   }

   if (s2_wt + s2_wh >= s2_et && s2_wt + s2_wh - s2_eh * 2 <= s2_et + (s2_wh - s2_eh)) {
      if (block_show == null || block_show == false) {
         $('.s2__play, .play__text').addClass('fadeD');
      }
      block_show = true;
   } else {
      if (block_show == null || block_show == true) {
         $('.s2__play, .play__text').removeClass('fadeD');
      }
      block_show = false;
   }

   if (s3_wt + s3_wh >= s3_et && s3_wt + s3_wh - s3_eh * 2 <= s3_et + (s3_wh - s3_eh)) {
      if (block_show == null || block_show == false) {
         $('.s3__title, .s3__text, .s3__button').addClass('fadeD');
      }
      block_show = true;
   } else {
      if (block_show == null || block_show == true) {
         $('.s3__title, .s3__text, .s3__button').removeClass('fadeD');
      }
      block_show = false;
   }

   if (s4_wt + s4_wh >= s4_et && s4_wt + s4_wh - s4_eh * 2 <= s4_et + (s4_wh - s4_eh)) {
      if (block_show == null || block_show == false) {
         $('.s4__title, .s4__list').addClass('fadeD');
      }
      block_show = true;
   } else {
      if (block_show == null || block_show == true) {
         $('.s4__title, .s4__list').removeClass('fadeD');
      }
      block_show = false;
   }

   if (s5_wt + s5_wh >= s5_et && s5_wt + s5_wh - s5_eh * 2 <= s5_et + (s5_wh - s5_eh)) {
      if (block_show == null || block_show == false) {
         $('.s5__title, .s5__text, .s5__partenrs').addClass('fadeD');
      }
      block_show = true;
   } else {
      if (block_show == null || block_show == true) {
         $('.s5__title, .s5__text, .s5__partenrs').removeClass('fadeD');
      }
      block_show = false;
   }

   if (s6_wt + s6_wh >= s6_et && s6_wt + s6_wh - s6_eh * 2 <= s6_et + (s6_wh - s6_eh)) {
      if (block_show == null || block_show == false) {
         $('.s6__title').addClass('fadeD');
      }
      block_show = true;
   } else {
      if (block_show == null || block_show == true) {
         $('.s6__title').removeClass('fadeD');
      }
      block_show = false;
   }

   if (s8_wt + s8_wh >= s8_et && s8_wt + s8_wh - s8_eh * 2 <= s8_et + (s8_wh - s8_eh)) {
      if (block_show == null || block_show == false) {
         $('.s8__title').addClass('fadeD');
      }
      block_show = true;
   } else {
      if (block_show == null || block_show == true) {
         $('.s8__title').removeClass('fadeD');
      }
      block_show = false;
   }

   if (s9_wt + s9_wh >= s9_et && s9_wt + s9_wh - s9_eh * 2 <= s9_et + (s9_wh - s9_eh)) {
      if (block_show == null || block_show == false) {
         $('.s9__title').addClass('fadeD');
      }
      block_show = true;
   } else {
      if (block_show == null || block_show == true) {
         $('.s9__title, .button').removeClass('fadeD');
      }
      block_show = false;
   }

   if (s10_wt + s10_wh >= s10_et && s10_wt + s10_wh - s10_eh * 2 <= s10_et + (s10_wh - s10_eh)) {
      if (block_show == null || block_show == false) {
         $('.s10__title, .s10__text, .s10__button').addClass('fadeD');
      }
      block_show = true;
   } else {
      if (block_show == null || block_show == true) {
         $('.s10__title, .s10__text, .s10__button').removeClass('fadeD');
      }
      block_show = false;
   }

   if (s11_wt + s11_wh >= s11_et && s11_wt + s11_wh - s11_eh * 2 <= s11_et + (s11_wh - s11_eh)) {
      if (block_show == null || block_show == false) {
         $('.s11__b-left, .s11__b-right, .s11__cols, .s11__md3-dn').addClass('fadeD');
      }
      block_show = true;
   } else {
      if (block_show == null || block_show == true) {
         $('.s11__b-left, .s11__b-right, .s11__cols, .s11__md3-dn').removeClass('fadeD');
      }
      block_show = false;
   }

   if (f_wt + f_wh >= f_et && f_wt + f_wh - f_eh * 2 <= f_et + (f_wh - f_eh)) {
      if (block_show == null || block_show == false) {
         $('.footer__links, .footer__copy').addClass('fadeD');
      }
      block_show = true;
   } else {
      if (block_show == null || block_show == true) {
         $('.footer__links, .footer__copy').removeClass('fadeD');
      }
      block_show = false;
   }
}


$(window).scroll(function () {
   scrollTracking();
});

$(document).ready(function () {
   scrollTracking();
});


$('.s6__link, .s6proj').hover(
   function () { $('.s6link-proj').toggleClass('show') && $('.s6show-proj').toggleClass('show') },
);

$('.s7__link, .s7proj').hover(
   function () { $('.s7link-proj').toggleClass('show') && $('.s7show-proj').toggleClass('show') },
);

$('.s8__link, .s8proj').hover(
   function () { $('.s8link-proj').toggleClass('show') && $('.s8show-proj').toggleClass('show') },
);


//slider

$('.slider').slick({
   lazyLoad: 'ondemand',
   centerMode: true,
   centerPadding: '240px',
   slidesToShow: 2,
   responsive: [
      {
         breakpoint: 1367,
         settings: {
            centerMode: true,
            centerPadding: '400px',
            slidesToShow: 1
         }
      },
      {
         breakpoint: 1198,
         settings: {

            centerMode: true,
            centerPadding: '200px',
            slidesToShow: 1
         }
      },
      {
         breakpoint: 992,
         settings: {
            arrows: false,
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '150px',
         }
      },
      {
         breakpoint: 500,
         settings: {
            arrows: false,
            slidesToShow: 1,
            centerMode: false,

         }
      }

   ]
});


$(".first img").hover(function () {
   $('.button-first').toggleClass('show');
});

$(".second img").hover(function () {
   $('.button-second').toggleClass('show');
});

$(".third img").hover(function () {
   $('.button-third').toggleClass('show');
});

$(".fourth img").hover(function () {
   $('.button-fourth').toggleClass('show');
});


//параллакс

$(window).scroll(function (e) {
   parallax();
});
function parallax() {
   scrolled = $(window).scrollTop();
   $('.parallax').css('object-position', '0 ' + (-scrolled * 0.2) + 'px');
   $('.parallax2').css('object-position', '0 ' + (-scrolled * 0.05) + 'px');
   $('.parallax3').css('object-position', '0 ' + (-scrolled * 0.07) + 'px');
}
