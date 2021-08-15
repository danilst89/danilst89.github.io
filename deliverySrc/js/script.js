<<<<<<< HEAD
window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.header__hamburger');
    const hamburgerMenu = document.querySelector('.header__hamburgerUl');
    const ham1 = document.querySelector('.header__ham1');
    const ham2 = document.querySelector('.header__ham2');
    const ham3 = document.querySelector('.header__ham3');

    hamburger.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('header__hamburgerUl_active');
        ham1.classList.toggle('header__rotate1');
        ham2.classList.toggle('header__rotate3');
        ham3.classList.toggle('header__rotate2');
    });


    const slides = document.querySelectorAll('.review__block');
    const prev = document.querySelector('.review__leftLine');
    const next = document.querySelector('.review__rightLine');

    function hideAll() {
        slides.forEach(item => item.style.display = 'none');
    }

    hideAll();

    function showSlide(i = 0) {
        slides[i].style.display = 'block';
        next.addEventListener('click', () => {
            slides[i].style.display = 'none';
            ++i;
            if (i == 3) {
                i = 0;
            }
            slides[i].style.display = 'block';
        });

        prev.addEventListener('click', () => {
            slides[i].style.display = 'none';
            --i;
            if (i < 0) {
                i = 2;
            }
            slides[i].style.display = 'block';
        });
    }

    showSlide();
=======
window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.header__hamburger');
    const hamburgerMenu = document.querySelector('.header__hamburgerUl');
    const ham1 = document.querySelector('.header__ham1');
    const ham2 = document.querySelector('.header__ham2');
    const ham3 = document.querySelector('.header__ham3');

    hamburger.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('header__hamburgerUl_active');
        ham1.classList.toggle('header__rotate1');
        ham2.classList.toggle('header__rotate3');
        ham3.classList.toggle('header__rotate2');
    });


    const slides = document.querySelectorAll('.review__block');
    const prev = document.querySelector('.review__leftLine');
    const next = document.querySelector('.review__rightLine');

    function hideAll() {
        slides.forEach(item => item.style.display = 'none');
    }

    hideAll();

    function showSlide(i = 0) {
        slides[i].style.display = 'block';
        next.addEventListener('click', () => {
            slides[i].style.display = 'none';
            ++i;
            if (i == 3) {
                i = 0;
            }
            slides[i].style.display = 'block';
        });

        prev.addEventListener('click', () => {
            slides[i].style.display = 'none';
            --i;
            if (i < 0) {
                i = 2;
            }
            slides[i].style.display = 'block';
        });
    }

    showSlide();
>>>>>>> 0832ea9b5529a42b2045a6278e9c214a76d7cccf
});