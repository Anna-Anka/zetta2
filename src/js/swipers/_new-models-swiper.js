export const newModelsSwiper = () => {
	if (document.querySelector('.new-models')) {
		const swiperNewModels = new Swiper('.new-models__swiper', {
			allowTouchMove: false,
			loop: true,

			navigation: {
				nextEl: '.new-models__button--next',
				prevEl: '.new-models__button--prev',
			},

			breakpoints: {
				1200: {
					slidesPerView: 3,
					slidesPerGroup: 3,
					spaceBetween: 28,
				},

				1000: {
					slidesPerView: 2,
					slidesPerGroup: 2,
					spaceBetween: 23,

                    scrollbar: {
                        hide: false,
                    },
				},

				320: {
					slidesPerView: 1,
					slidesPerGroup: 1,
                    spaceBetween: 15,

                    scrollbar: {
                        el: ".new-models__scrollbar",
                        draggable: true
                    },
				},
			},
		});
	};
};
