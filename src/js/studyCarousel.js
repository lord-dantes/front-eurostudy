const firstCarousel = $('.study-carousel');
const secondCarousel = $('.study-carousel--second');
const threeCarousel = $('.study-carousel--three');

firstCarousel.owlCarousel({
	items: 3,
	mouseDrag: false,
	touchDrag: false,
	loop: false,
	dots: false,
	nav: false,
	responsive: {
		0:{
			items: 1,
			mouseDrag: true,
			touchDrag: true,
			loop: false,
			dots: true,
			nav: true,
			navText: ['<img src="img/icons/arrowSliderLeft.svg" alt="">', '<img src="img/icons/arrowSliderRight.svg" alt="">'],
		},
		540:{
			items: 2,
			mouseDrag: true,
			touchDrag: true,
			loop: false,
			dots: true,
			nav: true,
			navText: ['<img src="img/icons/arrowSliderLeft.svg" alt="">', '<img src="img/icons/arrowSliderRight.svg" alt="">'],
		},
		767:{
			items:3,
		}
	}
});
secondCarousel.owlCarousel({
	items: 3,
	mouseDrag: false,
	touchDrag: false,
	loop: false,
	dots: false,
	nav: false,
	responsive: {
		0:{
			items: 1,
			mouseDrag: true,
			touchDrag: true,
			loop: false,
			dots: true,
			nav: true,
			navText: ['<img src="img/icons/arrowSliderLeft.svg" alt="">', '<img src="img/icons/arrowSliderRight.svg" alt="">'],
		},
		540:{
			items: 2,
			mouseDrag: true,
			touchDrag: true,
			loop: false,
			dots: true,
			nav: true,
			navText: ['<img src="img/icons/arrowSliderLeft.svg" alt="">', '<img src="img/icons/arrowSliderRight.svg" alt="">'],
		},
		767:{
			items:3,
		}
	}
});
threeCarousel.owlCarousel({
	items: 3,
	mouseDrag: false,
	touchDrag: false,
	loop: false,
	dots: false,
	nav: false,
	responsive: {
		0:{
			items: 1,
			mouseDrag: true,
			touchDrag: true,
			loop: false,
			dots: true,
			nav: true,
			navText: ['<img src="img/icons/arrowSliderLeft.svg" alt="">', '<img src="img/icons/arrowSliderRight.svg" alt="">'],
		},
		540:{
			items: 2,
			mouseDrag: true,
			touchDrag: true,
			loop: false,
			dots: true,
			nav: true,
			navText: ['<img src="img/icons/arrowSliderLeft.svg" alt="">', '<img src="img/icons/arrowSliderRight.svg" alt="">'],
		},
		767:{
			items:3,
		}
	}
});