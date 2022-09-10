export const interactiveFunction = () => {
	if (document.querySelector('.offer')) {
		$('.interactive__item').click(function (event) {
			if ($('.interactive').hasClass('interactive')) {
				$('.interactive__btn')
					.not($(this).children('.interactive__btn'))
					.removeClass('interactive__btn--active');
				$('.interactive__content')
					.not($(this).children('.interactive__content'))
					.slideUp(300);
				$('.interactive__content--active')
					.not($(this).children('.interactive__content--active'))
					.slideUp(200);
			}

			$(this)
				.children('.interactive__btn')
				.toggleClass('interactive__btn--active')
				.next()
				.slideToggle(300);
			$(this).children('.interactive__content--mobile').slideToggle(200);
		});
	}
};;
