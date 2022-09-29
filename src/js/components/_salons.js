export const salonsFunction = () => {
	if (document.querySelector('.salons')) {
		$('.salons__link').on('click', function (e) {
			e.preventDefault();
			$('.salons__link').removeClass('salons__link--active');
			$(this).addClass('salons__link--active');

			$('.salons-tabs__item').removeClass('salons-tabs__item--active');
			$($(this).attr('href')).addClass('salons-tabs__item--active');
		});
	};
};
