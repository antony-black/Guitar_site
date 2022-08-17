$(function(){

  $('.btn-mobile').on('click', function(){
    $('.btn-mobile__line').toggleClass('active');
  });

  $('.btn-mobile').on('click', function(){
    $('.menu__list').toggleClass('active');
  });

  $('.store__items').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});

  $('.slider-customer').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

});




