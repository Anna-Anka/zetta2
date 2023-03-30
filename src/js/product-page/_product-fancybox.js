export const productFancybox = () => {
    if (document.querySelector('.product-info__link')) {
        $('.product-info__link').fancybox({
            buttons: ["thumbs", "close"],
            mobile: {
                buttons: ["thumbs", "close", "fullScreen"]
            },
            loop: true,
            transitionEffect: 'slide',
            animationEffect: 'fade',
            fullScreen: {
                autoStart: true
            },
            infobar: true,
        });
    }
}