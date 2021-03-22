import {
    getResource
} from '../services/services';

function cards() {
    // Blocks
    class Block {
        constructor(src, alt, header, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.header = header;
            this.descr = descr;
            this.classes = classes;
            this.price = price;
            this.transfer = 27;
            this.parent = document.querySelector(parentSelector);
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const div = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = 'menu__item';
                div.classList.add(this.classes);
            } else {
                this.classes.forEach(className => {
                    div.classList.add(className);
                });
            }
            div.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.header}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>`;
            this.parent.append(div);
        }
    }

    getResource(`http://localhost:3000/menu`)
        .then(data => {
            data.forEach(({
                img,
                altimg,
                title,
                descr,
                price
            }) => {
                new Block(img, altimg, title,
                    descr, price, '.menu .container').render();
            });
        });


    // axios.get(`http://localhost:3000/menu`)
    //     .then(data => {
    //         data.data.forEach(({
    //             img,
    //             altimg,
    //             title,
    //             descr,
    //             price
    //         }) => {
    //             new Block(img, altimg, title,
    //                 descr, price, '.menu .container').render();
    //         });
    //     });
}

export default cards;