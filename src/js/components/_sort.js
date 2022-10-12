export const sortFunction = () => {
    if (document.querySelector('.sort')) {
        $('.sort__choice').styler();
        $('.sort__choice_k').styler();
        const form = document.querySelector('.sort');
        if (document.querySelector('.sort__choice_k')) {
            const select_k = document.querySelector('.sort__choice_k');
            select_k.onchange = function (e) {
                $('#sort3').val(e.target.value);
                $('#sort3').change();
            }
        }
        if (document.querySelector('.sort__choice')) {
            const select = document.querySelector('.sort__choice');
            select.onchange = function (e) {
                var param = e.target.value;
                insertParam('sort', param);
            }
        }
    };
};