let shop = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateCartItems = () => {
    // returns whats inside the template tags and replaces the placeholder with the data for each object
    return (shop.innerHTML = shopItemData.map((x) => {
        let { id, name, price, desc, img } = x;
        let search = basket.find((x) => x.id === id) || [];
        // return the template
        return `
        <div id = product-${id} class="item">
        <img width="220" height="370" src="${img}" alt="Camo fit">
        <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
        <div class="price">$${price}</div>
        <div class="buttons">
        <i onclick="decreaseQuantity(${id})" class="bi bi-dash-lg"></i>
        <div id = ${id} class="quantity">${search.item == undefined ? 0 : search.item}</div>
        <i onclick="increaseQuantity(${id})" class="bi bi-plus-lg"></i>
        </div>
        </div>
        </div>
        </div>`
    }).join(''));

};   // end of generateShop
// calling the function
generateCartItems();

let increaseQuantity = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;

    }

    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};
let decreaseQuantity = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);


    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }

    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    localStorage.setItem("data", JSON.stringify(basket));
}

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
