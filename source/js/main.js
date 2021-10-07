$(document).ready(function () {
  // menu
  $('.menu-burger').click(function () {
    $(this).toggleClass('active')
  });
  $('.menu-burger').click(function () {
    $('.header__mobile-menu').toggleClass('open-menu');
  });
  $('.menu-burger').click(function () {
    $('.menu-burger__mobile').toggleClass('d-block');
  });
})

$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
      $('#scroll-top').show();
    } else {
      $('#scroll-top').hide();
    }
  });
  $('#scroll-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 900);
    return false;
  });
});
svg4everybody();