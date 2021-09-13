$(function () {

  $(document).on("scroll", function () {
    if
      ($(document).scrollTop() > 50) {
      $(".header__top").addClass("header__top--thin");
    }
    else {
      $(".header__top").removeClass("header__top--thin");
    }
  });

  $(".menu__list a, .header__logo-link, .footer__logo-link").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });


  $('.header__burger, .menu__list a').on('click', function (e) {
    e.preventDefault();
    $('.header__navigation').toggleClass('header__navigation--open');
    $('.blackout').toggleClass('blackout--visible');
  });
  $('.blackout').on('click', function () {
    $('.header__navigation').toggleClass('header__navigation--open');
    $('.blackout').toggleClass('blackout--visible');
  });

  $('.faq__item-btn').on('click', function () {
    if ($(this).prev().children('.faq__item-text').hasClass('faq__item-text--active')) {
      $(this).prev().children('.faq__item-text').removeClass('faq__item-text--active');
      $(this).removeClass('faq__item-btn--active');
      $(this).prev().children('.faq__item-text').slideUp();
    } else {
      $('.faq__item-btn').prev().children('.faq__item-text').removeClass('faq__item-text--active');
      $('.faq__item-btn').removeClass('faq__item-btn--active');
      $('.faq__item-btn').prev().children('.faq__item-text').slideUp();
      $(this).prev().children('.faq__item-text').toggleClass('faq__item-text--active');
      $(this).toggleClass('faq__item-btn--active');
      $(this).prev().children('.faq__item-text').slideToggle();
    }
  });

  $('.testimonials__slider').slick({
    arrows: false,
    slidesToShow: 2,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });

});