import * as lib from "./cart.js";
import products from "../products/products.js";

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

function showNetPrice() {
	let netPrice = document.getElementById("net-price");
	netPrice.textContent = new Intl.NumberFormat("th-TH", {
		style: "currency",
		currency: "THB",
	}).format(lib.getNetPrice());
}

// Clear all products button
let clearAllButton = document.createElement("button");
clearAllButton.id = "clear-all-products";
clearAllButton.className =
	"m-2 p-2 bg-red-500 text-white rounded-lg btn btn-outline-primary";
clearAllButton.innerHTML = "<b>Clear All</b>";
clearAllButton.addEventListener("click", () => {
	let tableBody = document.getElementById("tbody");
	while (tableBody.firstChild) {
		tableBody.removeChild(tableBody.lastChild);
	}
	let totalQuantity = document.getElementById("total");
	totalQuantity.innerHTML = "<b>0</b>";
	lib.clearAll();
	showNetPrice();
	// console.log("clear all!");
});
modalBody.appendChild(clearAllButton);

function deleteRow(id) {
	let rw = document.querySelector(`#sc-row-${id + 1}`);
	rw.remove();
}

// show shopping cart function
const shoppingCart = document.querySelector("#shopping-cart");
let modal = document.getElementById("modal-box");

shoppingCart.addEventListener("click", () => {
	if (lib.getCookie(lib.cookieName) !== null) {
		let sc = lib.parseToObj(lib.getCookie(lib.cookieName));
		// console.log(JSON.stringify(cart, 0, 2));
		let tableBody = document.querySelector("#tbody");
		while (tableBody.firstChild) {
			tableBody.removeChild(tableBody.lastChild);
		}
		for (let i = 0; i < Object.keys(sc).length; i++) {
			let row = document.createElement("tr");
			row.id = `sc-row-${i + 1}`;
			tbody.appendChild(row);

			let noCol = document.createElement("td");
			noCol.className = "no-col";
			noCol.textContent = i + 1;
			noCol.style = "text-align: center;";
			row.appendChild(noCol);

			let imageCol = document.createElement("td");
			let productImg = document.createElement("img");
			imageCol.className = "image-col";
			productImg.src = products.find(
				(product) => product.code == Object.keys(sc)[i]
			).imgURL;
			imageCol.appendChild(productImg);
			row.appendChild(imageCol);

			let productCodeCol = document.createElement("td");
			productCodeCol.className = "product-code-col";
			productCodeCol.textContent = Object.keys(sc)[i];
			productCodeCol.style = "text-align: center;";
			row.appendChild(productCodeCol);

			let productNameCol = document.createElement("td");
			productNameCol.className = "product-name-col";
			productNameCol.textContent = products.find(
				(product) => product.code == Object.keys(sc)[i]
			).name;
			row.appendChild(productNameCol);

			let productPriceCol = document.createElement("td");
			productPriceCol.className = "product-price-col";
			productPriceCol.textContent = new Intl.NumberFormat("th-TH", {
				style: "currency",
				currency: "THB",
			}).format(
				products.find((product) => product.code == Object.keys(sc)[i])
					.price
			);
			productPriceCol.style = "text-align: center;";
			row.appendChild(productPriceCol);

			let productQuantityCol = document.createElement("td");
			productQuantityCol.className = "product-quantity-col";
			productQuantityCol.textContent = sc[Object.keys(sc)[i]];
			productQuantityCol.style = "text-align: center;";
			row.appendChild(productQuantityCol);

			let totalPriceCol = document.createElement("td");
			totalPriceCol.className = "total-price-col";
			totalPriceCol.textContent = new Intl.NumberFormat("th-TH", {
				style: "currency",
				currency: "THB",
			}).format(lib.getTotalPrice(Object.keys(sc)[i]));
			totalPriceCol.style = "text-align: center;";
			row.appendChild(totalPriceCol);

			let deleteCol = document.createElement("td");
			let deleteButton = document.createElement("button");
			deleteButton.type = "button";
			deleteButton.innerHTML = "&#x1F5D1;";
			deleteButton.className = "delete-button";
			deleteButton.addEventListener("click", () => {
				let totalQuantity = document.getElementById("total");
				lib.removeItem(Object.keys(sc)[i]);
				totalQuantity.innerHTML = `<b>${lib.getTotalQty()}</b>`;
				deleteRow(i);
				showNetPrice();
			});
			deleteCol.style = "text-align: center;";
			deleteCol.appendChild(deleteButton);
			row.appendChild(deleteCol);

			clearAllButton.style.visibility = "visible";
		}
	} else {
		clearAllButton.style.visibility = "hidden";
	}
	modal.style.display = "block";
	showNetPrice();
	// console.log(lib.getNetPrice());
});

let span = document.getElementsByClassName("close")[0];
span.addEventListener("click", () => {
	modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
