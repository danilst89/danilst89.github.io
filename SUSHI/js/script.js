<<<<<<< HEAD
window.addEventListener('DOMContentLoaded', () => {
    let hamburger = document.querySelector('.header__hamburger');
    let headerUl = document.querySelector('#headerUl');
    let logo = document.querySelector('.header__logo');

    hamburger.addEventListener('click', () => {
        headerUl.classList.toggle('header__list_active');
        logo.classList.toggle('none');
    });
=======
window.addEventListener('DOMContentLoaded', () => {
    let hamburger = document.querySelector('.header__hamburger');
    let headerUl = document.querySelector('#headerUl');
    let logo = document.querySelector('.header__logo');

    hamburger.addEventListener('click', () => {
        headerUl.classList.toggle('header__list_active');
        logo.classList.toggle('none');
    });
>>>>>>> 0832ea9b5529a42b2045a6278e9c214a76d7cccf
});