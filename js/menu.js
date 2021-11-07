const cardsMenu = document.querySelector('.cards-menu')

const changeGood = (restaurant) => {
    const {name, kitchen, price, stars} = restaurant
    const restaurantTitle = document.querySelector('.restaurant-title')
    const category = document.querySelector('.category')
    const cost = document.querySelector('.price')
    const rating = document.querySelector('.rating')
    restaurantTitle.textContent = name
    category.textContent = kitchen
    cost.textContent = `От ${price} ₽`
    rating.textContent = stars
}

const renderItems = (data) => {
    data.forEach(({description, id, image, name, price}) => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <img src="${image}" alt="${name}" class="card-image" />
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title card-title-reg">${name}</h3>
                </div>
                <div class="card-info">
                    <div class="ingredients">
                        ${description}
                    </div>
                </div>
                <div class="card-buttons">
                    <button class="button button-primary button-add-cart">
                        <span class="button-card-text">В корзину</span>
                        <span class="button-cart-svg"></span>
                    </button>
                    <strong class="card-price-bold">${price} ₽</strong>
                </div>
            </div>
        `
        cardsMenu.append(card)
    })
}


if(localStorage.getItem('restaurant')) {
    const restaurant = JSON.parse(localStorage.getItem('restaurant'))
    changeGood(restaurant) 
    fetch(`https://test-148bf-default-rtdb.firebaseio.com/db/${restaurant.products}`)
    .then((response) => response.json())
    .then((data) => {
        renderItems(data)
    })
    .catch((error) => {
        console.log(error);
    })
} else {
    window.location.href = '/'
}