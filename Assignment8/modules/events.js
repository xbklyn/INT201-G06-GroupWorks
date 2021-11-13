import products from "./products/products.js";
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
		if (cart.itemID.includes(id + 1)) {
			cart.items.forEach((item) => {
				if (item.productDetails.productCode == id + 1) {
					item.quantity += 1;
					item.totalPrice = item.price * item.quantity;
				}
			});
			cart.totalQuantity += 1;
		} else {
			cart.itemID.push(id + 1);
			cart.items.push({
				productDetails: {
					productCode: products[id].code,
					productName: products[id].name,
					resolution: products[id].resolution,
					sizeInInches: products[id].size,
				},
				price: products[id].price,
				quantity: 1,
				totalPrice: products[id].price,
			});
			cart.totalQuantity += 1;
		}
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
	console.log(cart);
	alert(
		`Total Quantity: ${
			cart.totalQuantity
		}\nNet price: ${new Intl.NumberFormat("th-TH", {
			style: "currency",
			currency: "THB",
		}).format(cart.netPrice)}`
	);
});
