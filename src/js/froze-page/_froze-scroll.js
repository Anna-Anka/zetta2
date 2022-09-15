export const frozeScroll = () => {
    if (document.querySelector('.froze-top')) {
        $('.froze-top__scroll').on('click', function (event) {
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
