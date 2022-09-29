export const productionTabs = () => {
    if (document.querySelector('.production-technology')) {
        $('.production-technology__link').on('click', function (e) {
            e.preventDefault();

            $('.production-technology__link').parent().removeClass('production-technology__tab--active');
            $(this).parent().addClass('production-technology__tab--active')

            $('.production-technology__item').removeClass('production-technology__item--active');
            $($(this).attr('href')).addClass('production-technology__item--active');
        });
    };
};
