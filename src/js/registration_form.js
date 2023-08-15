// window.addEventListener('click', (event) => {
//     if (event.target === regForm) {
//         regForm.style.display = 'none';
//     }
// });

window.addEventListener('load', () => {
    const openRegForm = document.querySelector('.header__sign_in');
    const regForm = document.querySelector('.registration-form__modal');
    const closeRegForm = document.querySelector('.registration-form__close-btn');

    openRegForm.addEventListener('click', () => {
        regForm.style.display = 'block';
    });

    closeRegForm.addEventListener('click', () => {
        regForm.style.display = 'none';
    });
});
