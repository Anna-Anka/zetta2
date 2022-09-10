export const searchFunction = () => {
	const buttonSearch = document.querySelector('.header__search');
	const formSearch = document.querySelector('.search--header');
	buttonSearch.onclick = function () {
		formSearch.classList.toggle('search--active');
	};

	document.addEventListener('mousedown', (e) => {
		if (!formSearch.contains(e.target) && !buttonSearch.contains(e.target)) {
			formSearch.classList.remove('search--active');
		}
	});
};
