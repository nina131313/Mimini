$(function() {
  $(".header__scroll-wrapper").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
  });

  $(".design__scroll-wrapper").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
  });
  
  $('.header__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `
      <button class="slick__arrow slick__arrow--prev">
        <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d="M6 16V1" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 6L6 1L11 6" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
      </button>
    `,
    nextArrow: `
      <button class="slick__arrow slick__arrow--next">
        <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d="M6 1V16" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 11L6 16L11 11" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
      </button>
    `,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 576,
        settings: "unslick"
      }
    ]
  });
  
  $('.header__btn').on('click', function() {
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('active');
  });

  $('.header__search').on('click', function() {
    $('.header__input').toggleClass('active');
  });

  $('.header__view').on('click', function() {
    $('.header__info').toggleClass('active');
  });

  $('.quotes__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
  });

  $('.compatibility__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: `
      <button class="slick__arrow slick__arrow--prev">
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d="M16 6L1 6" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 1L1 6L6 11" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
      </button>
    `,
    nextArrow: `
      <button class="slick__arrow slick__arrow--next">
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d="M1 6L16 6" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 1L16 6L11 11" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
      </button>
    `,
    variableWidth: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false
        }
      },
    ]
  });

  wow = new WOW(
    {
    mobile: false,
    }
  )
  wow.init();
});