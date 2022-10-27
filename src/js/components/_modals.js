
import { disableScroll } from './../functions/disable-scroll';
import { enableScroll } from './../functions/enable-scroll';

export const modalsFunction = () => {
	if (document.querySelector('.modal')) {
		const buttonsCall = document.querySelectorAll('.call');
		const buttonsModalClose = document.querySelectorAll('.modal__close');

		const modalCall = document.querySelector('.modal--call');
		const modalCallContent = document.querySelector('.modal--call .modal__content');

		const modalFrozeContent = document.querySelector('.modal--froze .modal__content');
		const modalFroze = document.querySelector('.modal--froze');

        const modalThank = document.querySelector('.modal--thank')
        const modalThankContent = document.querySelector('.modal--thank .modal__content')
        const modalThankClose = document.querySelector('.modal--thank .modal__button')

		const wrapper = document.querySelector('.wrapper');
        const frozeBtns = document.querySelectorAll('.froze-btn');
		const modals = document.querySelectorAll('.modal');

		buttonsCall.forEach((item) => {
			item.addEventListener('click', () => {
				modalCall.classList.add('modal--active');
				wrapper.classList.add('wrapper--lock');
			});
		});

        frozeBtns.forEach(frozeBtn => {
            frozeBtn.onclick = function () {
                modalFroze.classList.add('modal--active');
                wrapper.classList.add('wrapper--lock');
            }; 
        });

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

        if (document.querySelector('[data-thank]')) {
            const forms = document.querySelectorAll('[data-thank]')

            forms.forEach(form => {

                form.addEventListener('submit', (e) => {
                    e.preventDefault()
                    //e.target.reset()

                    modalThankClose.addEventListener('click', () => {
                        modalThank.classList.remove('modal--active');
                        enableScroll()
                    })
                })
            })
        }
	};
};
