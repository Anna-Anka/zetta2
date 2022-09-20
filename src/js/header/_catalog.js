export const catalogHeaderFunction = () => {
    if (document.querySelector('.header .catalog')) {
        const buttonCatalog = document.querySelector('.menu__link--catalog');
        const menuCatalog = document.querySelector('.header .catalog');
        const wrapper = document.querySelector('.wrapper');
        const blackout = document.querySelector('.blackout');

        const menuCatalogFunction = function () {
            menuCatalog.classList.toggle('catalog--active');
            buttonCatalog.classList.toggle('menu__link--catalog-active');
            blackout.classList.toggle('blackout--active')
            wrapper.classList.toggle('wrapper--active')
        }

        buttonCatalog.addEventListener('click', function (e) {
            e.stopPropagation();
            menuCatalogFunction();
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
    }
}
