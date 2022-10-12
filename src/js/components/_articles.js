export const articlesFunction = () => {
	if (document.querySelector('.articles')) {
		let mixer = mixitup('.articles__items', {
			load: {
				filter: '.category-kitchen-31',
			},
		});
	}
};
