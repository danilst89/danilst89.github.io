<<<<<<< HEAD
import {
    closeModal,
    openModal
} from './modal';

import {
    postData
} from '../services/services';

function forms(formSelector, modalTimerId) {
    //Forms

    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    // Form JSON

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.textContent = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            // r.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            const obj = {
                a: 23,
                b: 50
            };

            console.log(Object.entries(obj));


            postData('http://localhost:3000/requests', json)
                .then((data) => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });

            function showThanksModal(message) {
                const prevModalDialog = document.querySelector('.modal__dialog');

                prevModalDialog.classList.add('hide');
                openModal('.modal', );

                const thanksModal = document.createElement('div');
                thanksModal.classList.add('modal__dialog');
                thanksModal.innerHTML = `
            <div class='modal__content'>
                <div data-close class='modal__close'>&times;</div>
                <div class='modal__title'>${message}</div>
            </div>
        `;

                document.querySelector('.modal').append(thanksModal);
                setTimeout(() => {
                    thanksModal.remove();
                    prevModalDialog.classList.add('show');
                    prevModalDialog.classList.remove('hide');
                    closeModal('.modal', modalTimerId);
                }, 4000);
            }

            // r.addEventListener('load', () => {
            //     if (r.status == 200) {
            //         console.log(r.response);
            //         showThanksModal(message.success);
            //         statusMessage.remove();
            //         form.reset();
            //     } else {
            //         showThanksModal(message.failure);
            //     }
            // });
        });
    }
}

=======
import {
    closeModal,
    openModal
} from './modal';

import {
    postData
} from '../services/services';

function forms(formSelector, modalTimerId) {
    //Forms

    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    // Form JSON

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.textContent = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            // r.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            const obj = {
                a: 23,
                b: 50
            };

            console.log(Object.entries(obj));


            postData('http://localhost:3000/requests', json)
                .then((data) => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });

            function showThanksModal(message) {
                const prevModalDialog = document.querySelector('.modal__dialog');

                prevModalDialog.classList.add('hide');
                openModal('.modal', );

                const thanksModal = document.createElement('div');
                thanksModal.classList.add('modal__dialog');
                thanksModal.innerHTML = `
            <div class='modal__content'>
                <div data-close class='modal__close'>&times;</div>
                <div class='modal__title'>${message}</div>
            </div>
        `;

                document.querySelector('.modal').append(thanksModal);
                setTimeout(() => {
                    thanksModal.remove();
                    prevModalDialog.classList.add('show');
                    prevModalDialog.classList.remove('hide');
                    closeModal('.modal', modalTimerId);
                }, 4000);
            }

            // r.addEventListener('load', () => {
            //     if (r.status == 200) {
            //         console.log(r.response);
            //         showThanksModal(message.success);
            //         statusMessage.remove();
            //         form.reset();
            //     } else {
            //         showThanksModal(message.failure);
            //     }
            // });
        });
    }
}

>>>>>>> 0832ea9b5529a42b2045a6278e9c214a76d7cccf
export default forms;