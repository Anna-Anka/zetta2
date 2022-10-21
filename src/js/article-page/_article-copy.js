export const articleCopy = () => {
    if (document.querySelector('.article-top')) {
        const copyAll = document.querySelectorAll('.article-top__button');
        copyAll.forEach(copy => {
            copy.addEventListener('click', (event) => {
                const copytext = document.createElement('input')
                copytext.value = window.location.href
                document.body.appendChild(copytext)
                copytext.select()
                document.execCommand('copy')
                document.body.removeChild(copytext)

                copy.parentNode.classList.add('article-top__share--active')
            });
        });
    }
}