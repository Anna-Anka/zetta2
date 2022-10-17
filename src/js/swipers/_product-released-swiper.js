export const releasedSwiper = () => {
    if (document.querySelector('.released')) {
        const swiperStock = new Swiper('.released__swiper', {

            navigation: {
                nextEl: '.released__button--next',
                prevEl: '.released__button--prev',
            },

            scrollbar: {
                el: ".released__scrollbar",
                draggable: true
            },

            breakpoints: {
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 30,
                },

                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                }
            },
        });
    };
};