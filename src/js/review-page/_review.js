export const reviewFunction = () => {
    const reviewPopupBtn = document.querySelector('.review-send');
    const reviewPopup = document.querySelector('.modal--reviewsend');

    if (!!reviewPopupBtn) {
        reviewPopupBtn.addEventListener('click', () => {
            reviewPopup.classList.add('modal--active')
        })
    }

    const modal = document.querySelector('.modal--review');
    const reviews = document.querySelectorAll('.review__item');

    if (reviews.length > 0) {
        reviews.forEach((review) => {
            review.addEventListener('click', () => {
                let newContent = review.innerHTML;
                modal.querySelector('.modal__paste').innerHTML = newContent;

                let imgCount = review.querySelectorAll('.review__item--images img');

                if (modal.querySelector('.review__image--more')) {
                    modal.querySelector('.review__image--more').remove();
                }
                if (modal.querySelector('.review__item--link')) {
                    modal.querySelector('.review__item--link').remove();
                }

                let images = modal.querySelectorAll('.review__item--images img')

                images.forEach((img) => {
                    let newDiv = document.createElement('div');
                    newDiv.className = 'swiper-slide modal__review--slide';
                    img.replaceWith(newDiv);
                    newDiv.appendChild(img);
                })

                let imageContainer = modal.querySelector('.review__item--images');
                if (!!imageContainer && imgCount.length > 2) {
                    let imageContent = imageContainer.innerHTML;
                    imageContainer.innerHTML = '';

                    let newSwiper = document.createElement('div');
                    newSwiper.className = 'swiper modal__swiper';

                    let newWrapper = document.createElement('div');
                    newWrapper.className = 'swiper-wrapper modal__wrapper';

                    let newArrowPrev = document.createElement('div');
                    newArrowPrev.className = 'swiper-arrow swiper-button-prev';
                    let newArrowNext = document.createElement('div');
                    newArrowNext.className = 'swiper-arrow swiper-button-next';

                    imageContainer.appendChild(newSwiper);
                    newSwiper.appendChild(newWrapper);
                    newSwiper.appendChild(newArrowPrev);
                    newSwiper.appendChild(newArrowNext);

                    newWrapper.innerHTML = imageContent;


                    let modalSwiper = new Swiper(newSwiper, {
                        slidesPerView: 'auto',
                        loop: true,
                        spaceBetween: 6,
                        navigation: {
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        },
                        breakpoints: {
                            999: {
                                spaceBetween: 17
                            }
                        }
                    })
                }

                modal.classList.add('modal--active');
            })
        })
    }

    // END REVIEW POPUP //

    // PORTFOLIO FILTER //

    const portfolioSelects = document.querySelectorAll('.filter__select');

    if (portfolioSelects.length > 0) {

        portfolioSelects.forEach((select) => {
            select.addEventListener('click', () => {
                if (!select.classList.contains('active')) {
                    let activeSelect = document.querySelector('.filter__select.active');
                    if (!!activeSelect) {
                        activeSelect.classList.remove('active')
                    }
                }
                select.classList.toggle('active');
            })
        })
    }

    // END PORTFOLIO FILTER //

    // LIKE //
}