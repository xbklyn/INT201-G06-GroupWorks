// html management file

import products from "./products.js";

// code here
let body = document.querySelector("body.product-list");
let divNode = new Array(products.length);

for (let i = 0; i < products.length; i++) {
    let div = document.createElement("div");
    div.id = products[i].code;
    div.setAttribute("name", products[i].name);
    divNode[i] = div;
}

for (let j = 0; j < divNode.length; j++) {
    let child = body.appendChild(divNode[j]);
    let img = document.createElement("img");
    img.src = products[j].imgURL;
    child.appendChild(img);
}