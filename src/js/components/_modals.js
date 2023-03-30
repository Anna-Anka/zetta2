export const modalsFunction = () => {
	if (document.querySelector('.modal')) {
		const buttonsCall = document.querySelectorAll('.call');
		const buttonsModalClose = document.querySelectorAll('.modal__close');

		const modalCall = document.querySelector('.modal--call');
		const modalCallContent = document.querySelector('.modal--call .modal__content');

		const modalFrozeContent = document.querySelector('.modal--froze .modal__content');
		const modalFroze = document.querySelector('.modal--froze');

        const modalThank2 = document.querySelector('.modal--thankr')
        const modalThank2Content = document.querySelector('.modal--thankr .modal__content')
        const modalThank2Close = document.querySelector('.modal--thankr .modal__button')

		const modalThank = document.querySelector('.modal--thank')
        const modalThankContent = document.querySelector('.modal--thank .modal__content')
        const modalThankClose = document.querySelector('.modal--thank .modal__button')

		const frozeBtns = document.querySelectorAll('.froze-btn');
		const modals = document.querySelectorAll('.modal');

		buttonsCall.forEach((item) => {
			item.addEventListener('click', () => {
				modalCall.classList.add('modal--active');
			});
		});

		frozeBtns.forEach(frozeBtn => {
			frozeBtn.onclick = function () {
				modalFroze.classList.add('modal--active');
			};
		});

		buttonsModalClose.forEach((item) => {
			item.addEventListener('click', () => {
				modals.forEach((item) => {
					item.classList.remove('modal--active');
				});
			});
		});

		document.addEventListener('mousedown', (e) => {
			if (!modalFrozeContent.contains(e.target) && !modalCallContent.contains(e.target)) {
				modalFrozeContent.closest('.modal').classList.remove('modal--active');
			}
		});

		document.addEventListener('mousedown', (e) => {
			if (!modalFrozeContent.contains(e.target) && !modalCallContent.contains(e.target)) {
				modalCallContent.closest('.modal').classList.remove('modal--active');
			}
		});

		document.addEventListener('mousedown', (e) => {
			if (!modalFrozeContent.contains(e.target) && !modalCallContent.contains(e.target) && !modalThankContent.contains(e.target)) {
				modalThank.closest('.modal').classList.remove('modal--active');
			}
		});

		document.addEventListener('mousedown', (e) => {
			if (!modalFrozeContent.contains(e.target) && !modalCallContent.contains(e.target) && !modalThank2Content?.contains(e.target)) {
				modalThank2?.closest('.modal').classList.remove('modal--active');
			}
		});

        if (document.querySelector('[data-thank]')) {
            const forms = document.querySelectorAll('[data-thank]');
            forms.forEach(form => {
                form.addEventListener('submit', e => {
                    e.preventDefault();
                    if (form.closest('.modal')) {
                        if (form.closest('.modal').classList.contains('modal--reviewsend')) {
                            modalThank2 === null || modalThank2 === void 0 ? void 0 : modalThank2.classList.add('modal--active');
                            modalThank2Close === null || modalThank2Close === void 0 ? void 0 : modalThank2Close.addEventListener('click', () => {
                                modalThank2 === null || modalThank2 === void 0 ? void 0 : modalThank2.classList.remove('modal--active');
                            });
                        }
                    } else {
                        modalThank.classList.add('modal--active');
                        modalThankClose.addEventListener('click', () => {
                            modalThank.classList.remove('modal--active');
                        });
                    }
                });
            });
        }
	};
};
