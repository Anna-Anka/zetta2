export const modalsFunction = () => {
	if (document.querySelector('.modal')) {
		const buttonsCall = document.querySelectorAll('.call');
		const buttonsModalClose = document.querySelectorAll('.modal__close');
		const modalCall = document.querySelector('.modal--call');
		const modalCallContent = document.querySelector('.modal--call .modal__content');
		const modalFrozeContent = document.querySelector('.modal--froze .modal__content');
		const modalFroze = document.querySelector('.modal--froze');
		const wrapper = document.querySelector('.wrapper');
		const frozeBtn = document.querySelector('.header__btn');
		const modals = document.querySelectorAll('.modal');

		buttonsCall.forEach((item) => {
			item.addEventListener('click', () => {
				modalCall.classList.add('modal--active');
				wrapper.classList.add('wrapper--lock');
			});
		});

		frozeBtn.onclick = function () {
			modalFroze.classList.add('modal--active');
			wrapper.classList.add('wrapper--lock');
		};

		buttonsModalClose.forEach((item) => {
			item.addEventListener('click', () => {
				modals.forEach((item) => {
					item.classList.remove('modal--active');
				});
				wrapper.classList.remove('wrapper--lock');
			});
		});

		document.addEventListener('mousedown', (e) => {
			if (!modalFrozeContent.contains(e.target) && !modalCallContent.contains(e.target)) {
				modalFrozeContent.closest('.modal').classList.remove('modal--active');
				wrapper.classList.remove('wrapper--lock');
			}
		});

		document.addEventListener('mousedown', (e) => {
			if (!modalFrozeContent.contains(e.target) && !modalCallContent.contains(e.target)) {
				modalCallContent.closest('.modal').classList.remove('modal--active');
				wrapper.classList.remove('wrapper--lock');
			}
		});
	};
};
