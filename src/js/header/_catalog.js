export const catalogHeaderFunction = () => {
    if (document.querySelector('.header .catalog')) {

        $('.menu__link--dop').on('click', function (e) {
            e.preventDefault();
            $('.menu__link--dop').removeClass('menu__link--dop-active');
            $(this).toggleClass('menu__link--dop-active');

            $('.catalog').removeClass('catalog--active');
            $($(this).attr('href')).toggleClass('catalog--active');
        });

        $('.burger-menu__link--dop').on('click', function (e) {
            e.preventDefault();
            $('.burger-menu__link--dop').removeClass('burger-menu__link--dop-active');
            $(this).addClass('burger-menu__link--dop-active');

            $('.catalog').removeClass('catalog--active');
            $($(this).attr('href')).addClass('catalog--active');
        });

        $('.catalog-main__link').on('click', function (e) {
            e.preventDefault();
            $('.catalog-main__link').removeClass('catalog-main__link--active');
            $(this).addClass('catalog-main__link--active');

            $('.catalog-detail').removeClass('catalog-detail--active');
            $($(this).attr('href')).addClass('catalog-detail--active');
        });

        if (document.querySelector('.catalog-mobile')) {
            $('.burger-menu__link--dop').click(function () {
                $(this).next().toggleClass('catalog-mobile__list--active')
                $(this).toggleClass('catalog-mobile__button--active')
            })
        }

        $(document).mouseup(function (e) {
            var div = $(".catalog--active");  //класс элемента вне которого клик
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                div.removeClass('catalog--active');
            }
        });
    };
}
