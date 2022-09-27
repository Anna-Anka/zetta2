export const ContactsPageTabs = () => {
	if (document.querySelector('.contacts-page')) {
		$('.contacts-page__link').on('click', function (e) {
			e.preventDefault();
			$('.contacts-page__link').parent().removeClass('contacts-page__tab--active');
            $(this).parent().addClass('contacts-page__tab--active')

			$('.contacts-page__inner').removeClass('contacts-page__inner--active');
			$($(this).attr('href')).addClass('contacts-page__inner--active');
		});
	}
};