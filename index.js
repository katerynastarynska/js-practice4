import { productItems } from './products-items.js';

const products = document.querySelector('.row');

const productsMarkUp = productItems.map((product) => {
    products.insertAdjacentHTML('beforeEnd',
        `<div class="card" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p class="card-price">$${product.price}</p>
                    <btn class="btn btn-primary">${product.quantity} in stock</btn>
                </div>
        </div>`
    )
}).join(" ");

const buttons = document.querySelectorAll("btn")

buttons.forEach(button => button.addEventListener('click',
    function onButtonClick(event) {
        const itemQuantity = event.currentTarget.innerText;
        const result = parseInt(itemQuantity.split(' ')[0]) - 1;
        event.currentTarget.innerText = `${result} in stock`;

        if (result <= 0) {
            button.classList.add('disabled');
        }
    }
))
