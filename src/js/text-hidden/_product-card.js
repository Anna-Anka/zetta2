export const textHiddenProductCard = () => {
	if (document.querySelector('.product-card')) {
		const btnHidden = document.querySelectorAll('.product-card__info');

		btnHidden.forEach((item) => {
			item.addEventListener('click', () => {
				item.closest('.product-card').classList.toggle('product-card--active');
			});
		});

		document.addEventListener('mousedown', (e) => {
			if (document.querySelector('.product-card--active')) {
				const hidden = document.querySelector('.product-card--active .product-card__hidden');
				const btn = document.querySelector('.product-card--active .product-card__info');
				if (!hidden.contains(e.target) && !btn.contains(e.target)) {
					hidden.closest('.product-card').classList.remove('product-card--active');
				}
			}
		});
	};
};
