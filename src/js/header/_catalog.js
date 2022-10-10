export const catalogHeaderFunction = () => {
    if (document.querySelector('.header .catalog')) {
        const buttonCatalog = document.querySelector('.menu__link--catalog');
        const burgerCatalog = document.querySelector('.burger-menu__link--catalog');
        const menuCatalog = document.querySelector('.header .catalog');
        const wrapper = document.querySelector('.wrapper');
        const blackout = document.querySelector('.blackout');

        const menuCatalogFunction = function () {
            menuCatalog.classList.toggle('catalog--active');
            buttonCatalog.classList.toggle('menu__link--catalog-active');
            burgerCatalog.classList.toggle('burger-menu__link--catalog-active');
            blackout.classList.toggle('blackout--active')
            wrapper.classList.toggle('wrapper--active')
        }

        buttonCatalog.addEventListener('click', function (e) {
            e.stopPropagation();
            menuCatalogFunction();
        });

        burgerCatalog.addEventListener('click', function (e) {
            e.stopPropagation();
            menuCatalogFunction();
            document.querySelector('.catalog-mobile').classList.toggle('catalog-mobile--active')
        });

        document.addEventListener('click', function (e) {
            const target = e.target;
            const its_menu = target == menuCatalog || menuCatalog.contains(target);
            const its_btnMenu = target == buttonCatalog;
            const menu_is_active = menuCatalog.classList.contains('catalog--active');

            if (!its_menu && !its_btnMenu && menu_is_active) {
                menuCatalogFunction();
            }
        });

        $('.catalog-main__link').on('click', function (e) {
            e.preventDefault();
            $('.catalog-main__link').removeClass('catalog-main__link--active');
            $(this).addClass('catalog-main__link--active');

            $('.catalog-detail').removeClass('catalog-detail--active');
            $($(this).attr('href')).addClass('catalog-detail--active');
        });

        if (document.querySelector('.catalog-mobile')) {
            $('.catalog-mobile__button').click(function () {
                $(this).next().toggleClass('catalog-mobile__list--active')
                $(this).toggleClass('catalog-mobile__button--active')
            })
        }
    }
}
