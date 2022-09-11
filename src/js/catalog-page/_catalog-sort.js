export const catalogSortFunction = () => {
    if (document.querySelector('.catalog-sort')) {
        $('.catalog-sort__choice').styler();

        const form = document.querySelector('.catalog-sort');
        const select = document.querySelector('.catalog-sort__choice')

        select.onchange = function () {
            form.submit();
        }
    };
};