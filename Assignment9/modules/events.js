import * as lib from "./shoppingCart/cart.js";
import products from "./products/products.js";

// toggle search bar
document.querySelector(".icon").addEventListener("click", () => {
	document.querySelector("#search").classList.toggle("active");
});

// search function
const productStore = document.querySelectorAll(".product");
const search = document.getElementById("search");

search.addEventListener("keyup", (e) => {
	const text = e.target.value.toLowerCase().trim();
	for (let i = 0; i < productStore.length; i++) {
		let productName = productStore[i].getAttribute("name");
		if (productName.toLowerCase().trim().includes(text)) {
			productStore[i].style.display = "";
		} else {
			productStore[i].style.display = "none";
		}
	}
});

// add to cart function
const addButton = document.querySelectorAll(".add-to-cart");

for (const [id, btn] of addButton.entries()) {
	btn.addEventListener("click", () => {
		lib.shoppingCart.add(products[id].code);
		lib.updateTotalQty();
	});
}
