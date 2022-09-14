export const questionFunction = () => {
    if (document.querySelector('.questions')) {
        $('.question-card__top').click(function (event) {
            if ($('.questions').hasClass('questions')) {
                $('.question-card__top').not($(this)).removeClass('question-card__top--active');
                $('.question-card__text').not($(this).next()).slideUp(300);
                $('.block__text').not($(this).next()).slideUp(300);
            };

            $(this).toggleClass('question-card__top--active').next().slideToggle(300);
        });
    };
};