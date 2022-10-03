export const styleSwiper = () => {
    if (document.querySelector('.style')) {
        const swiperstyle = new Swiper('.style__swiper', {
            
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 30,

            navigation: {
                nextEl: '.style__button--next',
                prevEl: '.style__button--prev',
            },

            breakpoints: {
                1000: {
                    loop: true,
                    scrollbar: {
                        hide: false,
                    },
                },

                320: {
                    loop: false,
                    scrollbar: {
                        el: ".style__scrollbar",
                        draggable: true
                    },
                },
            },
        });
    };
};