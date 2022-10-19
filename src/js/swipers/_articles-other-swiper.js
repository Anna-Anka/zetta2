export const articlesOtherSwiper = () => {
    if (document.querySelector('.articles-other')) {
        const swiperArticlesOther = new Swiper('.articles-other__wrapper', {

            navigation: {
                nextEl: '.articles-other__button--next',
                prevEl: '.articles-other__button--prev',
            },

            scrollbar: {
                el: ".articles-other__scrollbar",
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