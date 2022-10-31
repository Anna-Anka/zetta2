export const offerSwiper = () => {
	if (document.querySelector('.offer')) {
		const swiperOffer = new Swiper('.offer__swiper', {
			slidesPerView: 1,
			slidesPerGroup: 1,
            loop: true,
            speed: 800,
            allowTouchMove: false,
            
            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
                stopOnlastSlide: false,
            },
            
			navigation: {
				nextEl: '.offer__button--next',
				prevEl: '.offer__button--prev',
			},
		});
	};
};
