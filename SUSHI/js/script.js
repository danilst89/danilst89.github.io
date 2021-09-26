window.addEventListener('DOMContentLoaded', () => {
    let hamburger = document.querySelector('.header__hamburger');
    let headerUl = document.querySelector('#headerUl');
    let logo = document.querySelector('.header__logo');

    hamburger.addEventListener('click', () => {
        headerUl.classList.toggle('header__list_active');
        logo.classList.toggle('none');
    });
});