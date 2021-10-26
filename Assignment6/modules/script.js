// html management file
// tan add script
import products from "./products.js";

// code here
let body = document.querySelector("body.product-list");

let divContainer = document.createElement("div");
divContainer.className = "product-container";

// add container to body
let container = body.appendChild(divContainer);

for (const product of products) {
    // add div to container in body
    let divList = document.createElement("div");
    divList.id = product.code;
    divList.className = "product-item";
    let divItem = container.appendChild(divList);

    // add img to div in container
    let img = document.createElement("img");
    img.src = product.imgURL;
    img.alt = product.name;
    img.style = "width: 30%; height: 30%;";
    divItem.appendChild(img);
}
