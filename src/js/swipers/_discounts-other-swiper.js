export const discountsOtherSwiper = () => {
    if (document.querySelector('.discounts-other')) {
        const swiperDiscountsOther = new Swiper('.discounts-other__wrapper', {

            navigation: {
                nextEl: '.discounts-other__button--next',
                prevEl: '.discounts-other__button--prev',
            },

            scrollbar: {
                el: ".discounts-other__scrollbar",
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