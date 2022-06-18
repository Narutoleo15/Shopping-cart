let shop = document.getElementById('shop');
let shopItemData = [
    // in react when doing this method you get annoying key error is you dont specify a unique key
    {
        id: "htffhtvh",
        name: "Camo Comfort Fit",
        price: 100,
        desc: "Comfortable Button-up set.",
        img: "img/camo-fit.webp",
    },
    {
        id: "afafgawf",
        name: "Purple King-Pin Suit",
        price: 200,
        desc: "Purple Bussiness (Event) Suit.",
        img: "img/purple-action.jpg",
    },
    {
        id: "hdfswefa",
        name: "Breathable White Dress",
        price: 80,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/white-dress.webp",
    },
    {
        id: "htffhtvh",
        name: "White T-Shirt",
        price: 25,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/bini.jpg",
    },
    {
        id: "htwdhtvh",
        name: "Camo Comfort Fit",
        price: 100,
        desc: "Comfortable Button-up set.",
        img: "img/camo-fit.webp",
    },
    {
        id: "afafagga",
        name: "Purple King-Pin Suit",
        price: 200,
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
        id: "gesfgefea",
        name: "Breathable White Dress",
        price: 80,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/white-dress.webp",
    },
    {
        id: "gesadwa",
        name: "White T-Shirt Binnie Combo",
        price: 25,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/bini.jpg",
    },
]


let generateShop = () => {
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
        <i class="bi bi-dash-lg"></i>
        <div id = ${id} class="quantity">0</div>
        <i class="bi bi-plus-lg"></i>
        </div>
        </div>
        </div>
        </div>`
        // gets rid of commas between divs
    }).join(''));
}
// callling the function
generateShop();
