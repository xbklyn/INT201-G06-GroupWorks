// html management file
// tan add script
//nut add description 
import products from "./products.js";

// code here
let body = document.querySelector("body.product-list");

let divContainer = document.createElement("div");
divContainer.className = "product-container";

// add container to body
let container = body.appendChild(divContainer);
container.className = "grid grid-cols-5";

for (const product of products) {
    // add div to container in body
    let divList = document.createElement("div");
    divList.id = product.code;
    divList.className = "flex flex-col bg-white rounded-lg shadow-md m-5";
    let divItem = container.appendChild(divList);

    // add img to div in container
    let img = document.createElement("img");
    img.src = product.imgURL;
    img.alt = product.name;
    img.style = "width: 100%; height: 100%;";
    divItem.appendChild(img);

    // add Description to div in container
    let divDesc = document.createElement("div");
    divDesc.className = "p-2";

    let name = document.createElement("div");
    name.className = "bg-green-100 font-mono flex-1";
    name.innerHTML = `<b>Name</b> : ${product.name} ${product.size}"`;
    divDesc.appendChild(name);

    let price = document.createElement("div");
    price.className = "";
    price.innerHTML = `<b>Price</b> : ${product.price}`;
    divDesc.appendChild(price);

    let res = document.createElement("div");
    res.className = "";
    res.innerHTML = `<b>Resolution</b> : ${product.resolution}`;
    divDesc.appendChild(res);

    let stock = document.createElement("div");
    stock.className = ""
    stock.innerHTML = `<b>In stock</b> : ${product.stock}`;
    divDesc.appendChild(stock);

    divItem.appendChild(divDesc);
}
