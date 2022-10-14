export const offerSwiper = () => {
	if (document.querySelector('.offer')) {
		const swiperOffer = new Swiper('.offer__swiper', {
			slidesPerView: 1,
			slidesPerGroup: 1,
            //autoHeight: true,
            
			navigation: {
				nextEl: '.offer__button--next',
				prevEl: '.offer__button--prev',
			},

            breakpoints: {

                1000: {
                    allowTouchMove: true,
                },

                320: {
                    allowTouchMove: false,
                },
            },
		});
	};
};
