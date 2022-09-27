export const questionFunction = () => {
    if (document.querySelector('.questions')) {
        $('.question-card__top').click(function (event) {
            if ($('.questions').hasClass('questions')) {
                $('.question-card__top').not($(this)).removeClass('question-card__top--active');
                $('.question-card__content').not($(this).next()).slideUp(100);
            };

            $(this).toggleClass('question-card__top--active').next().slideToggle(100);
        });
    };
};