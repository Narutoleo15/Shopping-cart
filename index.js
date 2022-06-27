let shop = document.getElementById('shop');
let shopItemData = [
    // in react when doing this method you get annoying key error is you dont specify a unique key
    {
        id: "hhfhtvh",
        name: "Camo Comfort Fit",
        price: 80,
        desc: "Comfortable Button-up set.",
        img: "img/camo-fit.webp",
    },
    {
        id: "afafdrwf",
        name: "Purple King-Pin Suit",
        price: 65,
        desc: "Purple Bussiness (Event) Suit.",
        img: "img/purple-action.jpg",
    },
    {
        id: "hsswefa",
        name: "Breathable White Dress",
        price: 80,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/white-dress.webp",
    },
    {
        id: "htffhtvh",
        name: "White T-Shirt",
        price: 10,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/bini.jpg",
    },
    {
        id: "htwfgtvh",
        name: "Camo Comfort Fit",
        price: 65,
        desc: "Comfortable Button-up set.",
        img: "img/camo-fit.webp",
    },
    {
        id: "afafdgga",
        name: "Purple King-Pin Suit",
        price: 80,
        desc: "Purple Bussiness (Event) Suit.",
        img: "img/purple-action.jpg",
    },
    {
        id: "hdfsafa",
        name: "Breathable White Dress",
        price: 80,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/white-dress.webp",
    },
    {
        id: "ggwgweafga",
        name: "White T-Shirt Binnie Combo",
        price: 25,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/bini.jpg",
    },
    {
        id: "gafasgaw",
        name: "Camo Comfort Fit",
        price: 100,
        desc: "Comfortable Button-up set.",
        img: "img/camo-fit.webp",
    },
    {
        id: "gseffawf",
        name: "Purple King-Pin Suit",
        price: 200,
        desc: "Purple Bussiness (Event) Suit.",
        img: "img/purple-action.jpg",
    },
    {
        id: "gesfgshgea",
        name: "Breathable White Dress",
        price: 80,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/white-dress.webp",
    },
    {
        id: "gesfsegadwa",
        name: "White T-Shirt Binnie Combo",
        price: 25,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/bini.jpg",
    },
] // end of shopItemData

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateCartItems = () => {
    // returns whats inside the template tags and replaces the placeholder with the data for each object
    return (shop.innerHTML = shopItemData.map((x) => {
        let { id, name, price, desc, img } = x;
        let search = basket.find((x) => x.id === id) || [];
        // return the template
        return `
        <div id = product-${id} class="item">
        <img width="220" src="${img}" alt="Camo fit">
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

    localStorage.setItem("data", JSON.stringify(basket));
    generateCartItems();
    update(selectedItem.id);
};
let decreaseQuantity = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);


    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item -= 1;
    }

    localStorage.setItem("data", JSON.stringify(basket));
    generateCartItems();
    update(selectedItem.id);
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
