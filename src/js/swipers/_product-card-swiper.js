export const productCardSwiper = () => {
	if (document.querySelector('.product-card')) {
		const swiperModelCard = new Swiper('.product-card__items', {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 10,

			pagination: {
				el: '.product-card__pagination',
				clickable: true,
			},
		});
	};
};
