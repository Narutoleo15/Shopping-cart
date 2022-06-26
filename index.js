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

let basket = [{
    id: "htffhtvh",
    item: 1,
}]; // end of basket

let generateCartItems = () => {
    // returns whats inside the template tags and replaces the placeholder with the data for each object
    return (shop.innerHTML = shopItemData.map((item) => {
        let { id, name, price, desc, img } = item;
        // return the template
        return `
        <div id = product-${id} class="item">
        <img width="220" src="${img}" alt="Camo fit">
        <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="priceAndquantity">
        <div class="price">$${price}</div>
        <div class="buttons">
        <i onclick="decreaseQuantity(${id})" class="bi bi-dash-lg"></i>
        <div id = ${id} class="quantity">0</div>
        <i onclick="increaseQuantity(${id})" class="bi bi-plus-lg"></i>
        </div>
        </div>
        </div>
        </div>`
    }).join(''));

}   // end of generateShop
// calling the function
generateCartItems();

let increment = (id) => {
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

    generateCartItems();
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
        localStorage.setItem("data", JSON.stringify(basket));
    }
    update(selectedItem.id);
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    TotalAmount();
};

let calculation = () => {
    let total = 0;
    basket.forEach((item) => {
        total += item.item * shopItemData.find((x) => x.id === item.id).price;
    });
    document.getElementById("total").innerHTML = total;
}   // end of calculation


