export const burgerFunction = () => {
	if (document.querySelector('.burger')) {
		const burgerMenu = document.querySelector('.burger-menu');
		const burger = document.querySelector('.burger');
		const header = document.querySelector('.header');
		//const menuLink = document.querySelector('.burger-menu__link');

		burger.addEventListener('click', function () {
			burger.classList.toggle('burger--active');
			burgerMenu.classList.toggle('burger-menu--active');
			header.classList.toggle('header--active');
		});

		// menuLink.addEventListener('click', function () {
		// 	burger.classList.remove('burger--active');
		// 	burgerMenu.classList.remove('burger-menu--active');
		// 	header.classList.remove('header--active');
		// });
	}
};
