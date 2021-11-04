// html management file
// tan add script
// nut add description
// max add css
// nine add css

import products from "./products.js";

// code here
let body = document.querySelector("body");
body.className = "product-list p-6 bg-blue-50";

// add h1 to body
let title = document.createElement("h1");
title.className = "font-bold text-xl text-center";
title.textContent = "Product List";
body.appendChild(title);

let divContainer = document.createElement("div");
divContainer.className = "product-container grid grid-cols-5";
divContainer.id = "store-product"

// add container to body
let container = body.appendChild(divContainer);

for (const product of products) {
	// add div to container in body
	let divList = document.createElement("div");
	divList.id = product.code;
	divList.className = "flex flex-col m-5 bg-white rounded-lg transition duration-200 ease-in-out hover:bg-purple-200 shodow-xl transform hover:scale-110 ";
	divList.setAttribute("name", product.name);
	let divItem = container.appendChild(divList);

	// add img to div in container
	let img = document.createElement("img");
	img.src = product.imgURL;
	img.alt = product.name;
	img.style = "width: 100%; height: 100%; ";
	img.className = "p-2"
	divItem.appendChild(img);

	// add details to div in container
	let divDetails = document.createElement("div");
	divDetails.className = "details p-2";

	let name = document.createElement("div");
	name.className = " p-1 bg-green-100 flex-1 m-1";
	name.innerHTML = `<b>Product: </b>${product.name} ${product.size}"`;
	divDetails.appendChild(name);

	let price = document.createElement("div");
	price.className = "m-1 p-1"
	price.innerHTML = `<b>Price: </b>${new Intl.NumberFormat("th-TH", {
		style: "currency",
		currency: "THB",
	}).format(product.price)}`;
	divDetails.appendChild(price);

	let res = document.createElement("div");
	res.className = "m-1 p-1 ";
	res.innerHTML = `<b>Resolution: </b>${product.resolution}`;
	divDetails.appendChild(res);

	let stock = document.createElement("div");
	stock.className = "m-1 p-1 ";
	if (product.stock == 0) {
		let outOfStock = document.createElement("b");
		outOfStock.className = "text-red-500";
		outOfStock.textContent = "Out of Stock";
		stock.appendChild(outOfStock);
	} else {
		stock.innerHTML = `<b>In stock: </b>${product.stock}`;
	}
	divDetails.appendChild(stock);

	divItem.appendChild(divDetails);
}

document.querySelector(".icon").addEventListener("click", function () {
	document.querySelector("input").classList.toggle("active");
})

//search function
const productStore = document.querySelectorAll(".product");
const search = document.getElementById("search");

search.addEventListener("keyup", filterProducts);


function filterProducts(e) {
	const text = e.target.value.toLowerCase();
	for (let i = 0; i < productStore.length; i++) {
		let productName = productStore[i].getAttribute("name");
		if (productName.toLowerCase().indexOf(text) > -1) {
			productStore[i].style.display = "";
		} else {
			productStore[i].style.display = "none";
		}
	}
}
