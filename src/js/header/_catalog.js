export const catalogHeaderFunction = () => {
    if (document.querySelector('.header .catalog')) {

        const dopMenu = () => {
            $('.menu__link--dop-active').on('click', function (e) {
                console.log('bla')
                $(this).removeClass('menu__link--dop-active')
            })

            $('.menu__link--dop').on('click', function (e) {
                if ($('.menu__link--dop').hasClass('menu__link--dop-active')) {

                    e.preventDefault();
                    $('.wrapper').removeClass('wrapper--active')
                    $('.blackout').removeClass('blackout--active')
                    $('.catalog').removeClass('catalog--active');
                    $('.menu__link--dop').removeClass('menu__link--dop-active');
                }

                else {
                    e.preventDefault();

                    $('.menu__link--dop').removeClass('menu__link--dop-active');
                    $(this).addClass('menu__link--dop-active');
                    $('.wrapper').addClass('wrapper--active')
                    $('.blackout').addClass('blackout--active')
                    $('.catalog').removeClass('catalog--active');
                    $($(this).attr('href')).addClass('catalog--active');
                }

                $(document).mouseup(function (e) {
                    var div = $(".catalog--active");  //класс элемента вне которого клик
                    var menu = $('.menu__link--dop-active')
                    if (!div.is(e.target) && !menu.is(e.target) && div.has(e.target).length === 0) {
                        div.removeClass('catalog--active');
                        $('.menu__link--catalog').removeClass('menu__link--catalog-active');
                        $('.wrapper').removeClass('wrapper--active');
                        $('.blackout').removeClass('blackout--active')
                        $('.menu__link--dop').removeClass('menu__link--dop-active');
                    }
                });
            });   
        }

        dopMenu()

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
    };
}
