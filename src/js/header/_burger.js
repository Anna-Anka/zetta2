export const burgerFunction = () => {
	if (document.querySelector('.burger')) {
		const burgerMenu = document.querySelector('.burger-menu');
		const burger = document.querySelector('.burger');
		const header = document.querySelector('.header');

		burger.addEventListener('click', function () {
			burger.classList.toggle('burger--active');
			burgerMenu.classList.toggle('burger-menu--active');
			header.classList.toggle('header--active');
		});
	}
};
