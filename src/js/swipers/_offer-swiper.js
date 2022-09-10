export const offerSwiper = () => {
	if (document.querySelector('.offer')) {
		const swiperOffer = new Swiper('.offer__swiper', {
			loop: true,
			slidesPerView: 1,
			slidesPerGroup: 1,
			navigation: {
				nextEl: '.offer__button--next',
				prevEl: '.offer__button--prev',
			},
		});
	}
};
