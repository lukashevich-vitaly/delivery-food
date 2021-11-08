const cart = () => {
    const buttonCart = document.getElementById('cart-button')
    const modalCart = document.querySelector('.modal-cart')
    const close = modalCart.querySelector('.close')
    const body = modalCart.querySelector('.modal-body')

    const incrementCount = (id) => {

    }
    const decrementCount = (id) => {

    }
    
    const renderItems = (data) => {
        body.innerHTML = ''
        data.forEach(({name, price, id, count}) => {
            const cartElem = document.createElement('div')
            cartElem.classList.add('food-row')
            cartElem.innerHTML = `
                <span class="food-name">${name}</span>
                <strong class="food-price">${price} ₽</strong>
                <div class="food-counter">
                    <button class="counter-button btn-dec">-</button>
                    <span class="counter">${count}</span>
                    <button class="counter-button btn-inc">+</button>
                </div>
            `
            cartElem.querySelector('.btn-dec').addEventListener('click', () => {
                decrementCount(id)
            })
            cartElem.querySelector('.btn-inc').addEventListener('click', () => {
                incrementCount(id)
            }) 
            body.append(cartElem)
        });
    }

    buttonCart.addEventListener('click', () => {
        console.log(JSON.parse(localStorage.getItem('cart')));
        if(localStorage.getItem('cart')) {
            renderItems(JSON.parse(localStorage.getItem('cart')))
        }
        modalCart.classList.add('is-open')
    })

    close.addEventListener('click', () => {
        modalCart.classList.remove('is-open')
    })
}

cart()