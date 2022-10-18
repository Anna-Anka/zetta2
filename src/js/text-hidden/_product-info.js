export const textHiddenProductInfo = () => {
	if (document.querySelector('.product-info')) {
		const btnProductInfo = document.querySelector('.product-info__info');
		const infoLeft = document.querySelector('.product-info__left');

		btnProductInfo.addEventListener('click', () => {
			infoLeft.classList.toggle('product-info__left--active');
		});

		document.addEventListener('mousedown', (e) => {
			if (document.querySelector('.product-info__left--active')) {
				const hidden = document.querySelector('.product-info__left--active .product-info__hidden');
				const btn = document.querySelector('.product-info__left--active .product-info__info');
				if (!hidden.contains(e.target) && !btn.contains(e.target)) {
					hidden.closest('.product-info__left').classList.remove('product-info__left--active');
				};
			};
		});

        if (document.querySelector('.product-info__detail')) {
            const btnDetail = document.querySelector('.product-info__detail');
            const infoRight = document.querySelector('.product-info__right');

            btnDetail.addEventListener('click', () => {
                infoRight.classList.toggle('product-info__right--active');
            });

            document.addEventListener('mousedown', (e) => {
                if (document.querySelector('.product-info__right--active')) {
                    const hidden = document.querySelector('.product-info__right--active .product-info__hidden');
                    const btn = document.querySelector('.product-info__right--active .product-info__detail');
                    if (!hidden.contains(e.target) && !btn.contains(e.target)) {
                        hidden.closest('.product-info__right').classList.remove('product-info__right--active');
                    }
                }
            });
        }
	};
};