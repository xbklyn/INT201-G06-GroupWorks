import cart from "./cart.js";

// toggle search bar
document.querySelector(".icon").addEventListener("click", function () {
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
		cart.add(id);
		if (cart.totalQuantity <= 99) {
			document.getElementById(
				"total"
			).innerHTML = `<b>${cart.totalQuantity}</b>`;
		} else {
			document.getElementById("total").innerHTML = `<b>99+</b>`;
		}
	});
}

// show net price function
const shoppingCart = document.querySelector("#shopping-cart");

shoppingCart.addEventListener("click", () => {
	let netPrice = 0;
	cart.netPrice = cart.items.reduce(
		(total, item) => total + item.totalPrice,
		netPrice
	);
	console.log(JSON.stringify(cart, 0, 2));
	alert(
		`Total Quantity: ${
			cart.totalQuantity
		}\nNet price: ${new Intl.NumberFormat("th-TH", {
			style: "currency",
			currency: "THB",
		}).format(cart.netPrice)}`
	);
});
