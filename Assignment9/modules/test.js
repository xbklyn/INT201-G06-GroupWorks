// store in localStorage
import products from "./products/products.js";
import CookieUtil from "./cookieUtil.js";

let shoppingCart = new Object();

/**
 * @returns {number} total quantity in cart
 */
function getTotalQty() {
	if (CookieUtil.getCookie("cart") === null) {
		return 0;
	} else {
		let temp = parseToObj(CookieUtil.getCookie("cart"));
		return Object.values(temp).reduce((total, qty) => total + qty);
	}
}

function getNetPrice() {
	if (CookieUtil.getCookie("cart") === null) {
		return 0;
	} else {
		let temp = parseToMap(parseToObj(CookieUtil.getCookie("cart")));
		let total = 0;
		temp.forEach((qty, code) => {
			total +=
				products.find((product) => product.code == code).price * qty;
		});
		return total;
	}
}

/**
 * @param {string|number} id product code
 * @param {object} cart product code and quantity of each product
 */
function add(id) {
	if (CookieUtil.getCookie("cart") === null) {
		shoppingCart[`${id}`] = 1;
		CookieUtil.setCookie("cart", JSON.stringify(shoppingCart), 1);
	} else {
		let temp = parseToObj(CookieUtil.getCookie("cart"));
		if (temp.hasOwnProperty(`${id}`)) {
			temp[`${id}`] += 1;
		} else {
			temp[`${id}`] = 1;
		}
		CookieUtil.setCookie("cart", JSON.stringify(temp), 1);
	}
}

/**
 * @param {object} obj product code and quantity of each product
 */
function parseToMap(obj) {
	return new Map(Object.entries(obj));
}

/**
 * @param {JSON} json JSON format
 * @returns {object} object from JSON
 */
function parseToObj(json) {
	return JSON.parse(json);
}

function clearAll() {
	let temp = parseToObj(CookieUtil.getCookie("cart"));
	for (const key in temp) {
		delete temp[key];
	}
	CookieUtil.unset("cart");
}

/**
 * @param {string|number} id product code
 */
function removeItem(id) {
	let temp = parseToObj(CookieUtil.getCookie("cart"));
	if (Object.keys(temp).length == 1) {
		delete temp[`${id}`];
		CookieUtil.unset("cart");
	} else {
		delete temp[`${id}`];
		CookieUtil.setCookie("cart", JSON.stringify(temp), 1);
	}
}

/**
 * @param {string|number} id product code
 */
function getTotalPrice(id) {
	if (CookieUtil.getCookie("cart") === null) {
		return 0;
	} else {
		let temp = parseToMap(parseToObj(CookieUtil.getCookie("cart")));
		return (
			products.find((product) => product.code == id).price * temp.get(id)
		);
	}
}

export {
	add,
	clearAll,
	removeItem,
	getTotalPrice,
	getNetPrice,
	getTotalQty,
	parseToObj,
};
