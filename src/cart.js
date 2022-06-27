let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
    if (basket.length !== 0) {

    } else {
        ShoppingCart.innerHTML = `<div class="cart-empty">
        <div class="cart-empty-text">
        <h2>Your cart is empty</h2>
        <p>You haven't added any items to your cart yet.</p>
        
        </div>
        </div>`;
    }
}