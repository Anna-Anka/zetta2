export const productNavigationScroll = () => {
    if (document.querySelector('.product-navigation')) {
        $('.product-navigation__link').on('click', function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body, html').animate(
                {
                    scrollTop: top,
                },
                1500
            );
        });
    };
};