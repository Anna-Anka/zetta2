export const stockSwiper = () => {
    if (document.querySelector('.stock')) {
        const swiperStock = new Swiper('.stock__swiper', {
            breakpoints: {
                1750: {
                    slidesPerView: 2.2,
                    slidesPerGroup: 2,
                    spaceBetween: 50,
                },

                1000: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 50,
                },

                320: {
                    slidesPerView: 0,
                    slidesPerGroup: 0,
                }
            },
        });
    };
};