window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.header__hamburger');
    const ul = document.querySelector('.header__ul');
    const ham1 = document.querySelector('.header__ham1');
    const ham2 = document.querySelector('.header__ham2');
    const ham3 = document.querySelector('.header__ham3');

    hamburger.addEventListener('click', () => {
        ul.classList.toggle('header__ul_active');
        ham1.classList.toggle('header__rotate1');
        ham2.classList.toggle('header__rotate3');
        ham3.classList.toggle('header__rotate2');
    });

    $(document).ready(function () {
        $(".header__menu").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 1500);
        });
    });

    $(document).ready(function () {
        $(".header__ul").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 1500);
        });
    });

    // MOREPHOTO

    const showMore = document.querySelectorAll('.showMore');
    const trigger = document.querySelector('.works__link');
    const beforeLink = document.querySelector('.works__button');

    showMore.forEach(item => {
        item.style.display = 'none';
    });

    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        // setAttribute('href', 'https://www.instagram.com/selfie_nail_club/');
        trigger.remove();
        const link = document.createElement('a');
        link.setAttribute('href', 'https://www.instagram.com/selfie_nail_club/');
        link.classList.add('works__link');
        link.textContent = 'Посмотреть больше в Instagram!';
        link.style.marginTop = '75px';
        beforeLink.insertAdjacentElement('beforebegin', link);
        for(let i = 0; i < 8; i++) {
            showMore[i].style.display = 'block';
        }
        trigger.style.marginTop = '15px';
    })
});