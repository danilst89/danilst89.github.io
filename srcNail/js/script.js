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

    const deadline = '2021-02-24';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t / (1000 * 60 * 60) % 24));
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.cupon', deadline);

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

    trigger.style.marginTop = '-75px';

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
        link.style.marginTop = '25px';
        beforeLink.insertAdjacentElement('beforebegin', link);
        for(let i = 0; i < 8; i++) {
            showMore[i].style.display = 'block';
        }
        trigger.style.marginTop = '15px';
    })
});