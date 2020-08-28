$(document).ready(function () {
  $('.about__cards').slick({
    slidesToShow: 2,
    slideToScroll: 2,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  })

  $('.header__menu-btn').on('click', function () {
    $('.header__list').slideToggle()
  })
})
