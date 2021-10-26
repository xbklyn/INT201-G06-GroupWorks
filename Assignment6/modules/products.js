// product management file
// Theme: Monitor
// tan add template
// donut add products

import Monitor from "./monitor.js";

const products = [];

products.push(new Monitor(1, "BENQ ZOWIE XL2731", 27, "1920x1080"));
products.push(new Monitor(2, "BENQ MOBIUZ EX3415R", 34, "3440x1440"));
products.push(new Monitor(3, "BENQ MOBIUZ EX2710R", 27, "2560x1440"));
products.push(new Monitor(4, "BENQ MOBIUZ EW2780Q", 27, "2560x1440"));
console.log(products);

// add products here
const prod = [
	{
		price: 9900,
		stock: 0,
		imageURL: "../images/ZOWIE-XL2731",
	},
	{
		price: 35900,
		stock: 0,
		imageURL: "../images/MOBIUZ-EX3415R",
	},
	{
		price: 21900,
		stock: 0,
		imageURL: "../images/MOBIUZ-EX2710R",
	},
	{
		price: 9500,
		stock: 0,
		imageURL: "../images/EW2780Q",
	},
	{
		code: 5,
		name: "BENQ EW2480",
		size: 24,
		resolution: "1920 x 1080",
		price: 5500,
		stock: 0,
		imageURL: "../images/EW2480",
	},
	{
		code: 6,
		name: "BENQ EX3203R",
		size: 31.5,
		resolution: "2560 x 1440",
		price: 16900,
		stock: 0,
		imageURL: "../images/EX3203R",
	},
	{
		code: 7,
		name: "BENQ ZOWIE XL2546",
		size: 24.5,
		resolution: "1920 x 1080",
		price: 15900,
		stock: 0,
		imageURL: "../images/ZOWIE-XL2546",
	},
	{
		code: 8,
		name: "BENQ GW2780",
		size: 27,
		resolution: "1920 x 1080",
		price: 5900,
		stock: 0,
		imageURL: "../images/GW2780",
	},
];

export { products };
