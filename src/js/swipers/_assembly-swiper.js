export const assemblySwiper = () => {
    if (document.querySelector('.assembly')) {
        const swiperAssembly = new Swiper('.assembly__box', {
            loop: true,
            slidesPerView: 2.2,
            slidesPerGroup: 2,

            navigation: {
                nextEl: '.assembly__button--next',
                prevEl: '.assembly__button--prev',
            },

            breakpoints: {

                1200: {
                    slidesPerView: 2.2,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                },

                320: {
                    slidesPerView: 1.2,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                },
            },
        });
    };
};