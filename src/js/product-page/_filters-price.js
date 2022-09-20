export const filtersPriceFunction = () => {
    if (document.querySelector('.filters__form--link')) {
        $('.filters__item').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('filters__item--active')
        });
    }
}