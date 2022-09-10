export const textHiddenCharacteristics = () => {
	if (document.querySelector('.characteristics__item--content')) {
		const buttonsInfo = document.querySelectorAll('.characteristics__item--content .characteristics__info');

		buttonsInfo.forEach((item) => {
			item.addEventListener('click', () => {
				item.closest('.characteristics__content').classList.toggle('characteristics__content--active');
			});
		});

		document.addEventListener('mousedown', (e) => {
			if (document.querySelector('.characteristics__content--active')) {
				const hidden = document.querySelector('.characteristics__content--active .characteristics__hidden');
				const btn = document.querySelector('.characteristics__content--active .characteristics__info');
				if (!hidden.contains(e.target) && !btn.contains(e.target)) {
					hidden.closest('.characteristics__content').classList.remove('characteristics__content--active');
				}
			}
		});
	}
};