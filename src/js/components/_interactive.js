export const interactiveFunction = () => {
    if (document.querySelector('.offer') || document.querySelector('.installation-top')) {
        $('.interactive__item').click(function (event) {
            if ($('.interactive').hasClass('interactive')) {
                $('.interactive__btn').not($(this).children('.interactive__btn')).removeClass('interactive__btn--active');
                $('.interactive__content').not($(this).children('.interactive__content')).slideUp(300);
                $('.interactive__content--active').not($(this).children('.interactive__content--active')).slideUp(200);
                $('.interactive__item').not($(this)).removeClass('interactive__item--active')
            };

            $(this).children('.interactive__btn').toggleClass('interactive__btn--active');
            $(this).children('.interactive__content--desktop').slideToggle(300);

            $(this).children('.interactive__content--mobile').slideToggle(200);
            $(this).toggleClass('interactive__item--active');
        });
    };
};

export const interactiveBoxFunction = () => {
    if (document.querySelector('.interactive-box')) {
        $('.interactive__btn').on('click', function (e) {
            e.preventDefault();
            $('.interactive__btn').removeClass('interactive__btn--active');
            $(this).addClass('interactive__btn--active');

            $('.interactive-box__item').removeClass('interactive-box__item--active');
            $($(this).attr('href')).addClass('interactive-box__item--active');
        });
    };
};
