export const projectFormStyler = () => {
    if (document.querySelector('.project-form__fied--file')) {
        $('.project-form__fied--file').styler({
            filePlaceholder: "Загрузите файл или перетащите"
        })
    }
}