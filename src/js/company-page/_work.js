export const workFunction = () => {
    if (document.querySelector('.work')) {
        const items = document.querySelectorAll('.work__vacancy');
        items.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('work__vacancy--active');
            });

            item.addEventListener('mousedown', (e) => {
                if (!item.contains(e.target)) {
                    item.classList.remove('work__vacancy--active');
                }
            });
        });
    }
}