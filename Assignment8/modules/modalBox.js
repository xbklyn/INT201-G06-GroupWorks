import CookieUtil from "./cookieUtil.js";

let modalBody = document.querySelector("div.modal-body");
let table = document.createElement("table");
table.style = "width: 100%;";
modalBody.appendChild(table);

let thead = document.createElement("thead");
thead.id = "thead";
let tbody = document.createElement("tbody");
tbody.id = "tbody";
table.appendChild(thead);
table.appendChild(tbody);

let tr = document.createElement("tr");
thead.appendChild(tr);

const heads = [
	"#",
	"Picture",
	"Product code",
	"Product name",
	"Price",
	"Quantity",
	"Total",
	"Delete",
];
for (const head of heads) {
	let th = document.createElement("th");
	th.textContent = head;
	tr.appendChild(th);
}

// show shopping cart function
const shoppingCart = document.querySelector("#shopping-cart");
let modal = document.getElementById("modal-box");

shoppingCart.addEventListener("click", () => {
	let cart = JSON.parse(CookieUtil.getCookie("shopping_cart"));
	// console.log(JSON.stringify(cart, 0, 2));
	let tableBody = document.getElementById("tbody");
	while (tableBody.firstChild) {
		tableBody.removeChild(tableBody.lastChild);
	}
	for (let i = 0; i < cart.items.length; i++) {
		let row = document.createElement("tr");
		tbody.appendChild(row);

		let noCol = document.createElement("td");
		noCol.className = "no-col";
		noCol.textContent = i + 1;
		noCol.style = "text-align: center;";
		row.appendChild(noCol);

		let imageCol = document.createElement("td");
		let productImg = document.createElement("img");
		imageCol.className = "image-col";
		productImg.src = cart.items[i].productDetails.img;
		productImg.alt = cart.items[i].productDetails.productName;
		imageCol.appendChild(productImg);
		row.appendChild(imageCol);

		let productCodeCol = document.createElement("td");
		productCodeCol.className = "product-code-col";
		productCodeCol.textContent = cart.items[i].productDetails.productCode;
		productCodeCol.style = "text-align: center;";
		row.appendChild(productCodeCol);

		let productNameCol = document.createElement("td");
		productNameCol.className = "product-name-col";
		productNameCol.textContent = cart.items[i].productDetails.productName;
		row.appendChild(productNameCol);

		let productPriceCol = document.createElement("td");
		productPriceCol.className = "product-price-col";
		productPriceCol.textContent = new Intl.NumberFormat("th-TH", {
			style: "currency",
			currency: "THB",
		}).format(cart.items[i].price);
		productPriceCol.style = "text-align: center;";
		row.appendChild(productPriceCol);

		let productQuantityCol = document.createElement("td");
		productQuantityCol.className = "product-quantity-col";
		productQuantityCol.textContent = cart.items[i].quantity;
		productQuantityCol.style = "text-align: center;";
		row.appendChild(productQuantityCol);

		let totalPriceCol = document.createElement("td");
		totalPriceCol.className = "total-price-col";
		totalPriceCol.textContent = new Intl.NumberFormat("th-TH", {
			style: "currency",
			currency: "THB",
		}).format(cart.items[i].totalPrice);
		totalPriceCol.style = "text-align: center;";
		row.appendChild(totalPriceCol);

		let deleteCol = document.createElement("td");
		deleteCol.className = "deleteButton";
		deleteCol.innerHTML = "&#x1F5D1;";
		deleteCol.style = "text-align: center;";
		row.appendChild(deleteCol);
	}
	modal.style.display = "block";
});

let span = document.getElementsByClassName("close")[0];
span.addEventListener("click", () => {
	modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
