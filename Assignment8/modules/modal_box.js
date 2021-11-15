import cart from "./cart.js";

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

// show net price function
const shoppingCart = document.querySelector("#shopping-cart");
let modal = document.getElementById("modal-box");

shoppingCart.addEventListener("click", () => {
	let netPrice = 0;
	cart.netPrice = cart.items.reduce(
		(total, item) => total + item.totalPrice,
		netPrice
	);
	console.log(JSON.stringify(cart, 0, 2));

	let tableBody = document.getElementById("tbody");
	while (tableBody.firstChild) {
		tableBody.removeChild(tableBody.lastChild);
	}
	for (let i = 0; i < cart.items.length; i++) {
		let row = document.createElement("tr");
		tbody.appendChild(row);

		let no = document.createElement("td");
		no.textContent = i + 1;
		no.style = "text-align: center;";
		row.appendChild(no);

		let image = document.createElement("td");
		let productImg = document.createElement("img");
		productImg.src = cart.items[i].productDetails.img;
		image.appendChild(productImg);
		row.appendChild(image);

		let productCode = document.createElement("td");
		productCode.textContent = cart.items[i].productDetails.productCode;
		productCode.style = "text-align: center;";
		row.appendChild(productCode);

		let productName = document.createElement("td");
		productName.textContent = cart.items[i].productDetails.productName;
		row.appendChild(productName);

		let productPrice = document.createElement("td");
		productPrice.textContent = new Intl.NumberFormat("th-TH", {
			style: "currency",
			currency: "THB",
		}).format(cart.items[i].price);
		productPrice.style = "text-align: center;";
		row.appendChild(productPrice);

		let productQuantity = document.createElement("td");
		productQuantity.textContent = cart.items[i].quantity;
		productQuantity.style = "text-align: center;";
		row.appendChild(productQuantity);

		let totalPrice = document.createElement("td");
		totalPrice.textContent = new Intl.NumberFormat("th-TH", {
			style: "currency",
			currency: "THB",
		}).format(cart.items[i].totalPrice);
		totalPrice.style = "text-align: center;";
		row.appendChild(totalPrice);

		let deleteButton = document.createElement("td");
		deleteButton.innerHTML = "&#x1F5D1;";
		deleteButton.style = "text-align: center;";
		row.appendChild(deleteButton);
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
