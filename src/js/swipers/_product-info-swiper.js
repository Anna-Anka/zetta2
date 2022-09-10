export const productInfoSwiper = () => {
	if (document.querySelector('.product-info')) {
		const swiperProductInfo = new Swiper('.product-info__swiper', {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 10,
			loop: true,

			pagination: {
				el: '.product-info__pagination',
				clickable: true,
			},

			navigation: {
				nextEl: '.product-info__button--next',
				prevEl: '.product-info__button--prev',
			},
		});
	};
};
