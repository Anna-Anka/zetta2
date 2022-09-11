export const sortFunction = () => {
    if (document.querySelector('.sort')) {
        $('.sort__choice').styler();

        const form = document.querySelector('.sort');
        const select = document.querySelector('.sort__choice')

        select.onchange = function () {
            form.submit();
        }
    };
};