$(function () {

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
  });

});