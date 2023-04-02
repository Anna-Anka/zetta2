export const applianceseScroll = () => {
    if (document.querySelector('.appliances-top__links')) {
        $('.appliances-top__link').on('click', function (event) {
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