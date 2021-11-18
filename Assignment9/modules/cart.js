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
		shoppingCart = parseToObj(CookieUtil.getCookie("cart"));
		return Object.values(shoppingCart).reduce((total, qty) => total + qty);
	}
}

function getNetPrice() {
	if (CookieUtil.getCookie("cart") === null) {
		return 0;
	} else {
		shoppingCart = parseToMap(parseToObj(CookieUtil.getCookie("cart")));
		let total = 0;
		shoppingCart.forEach((qty, code) => {
			total +=
				products.find((product) => product.code == code).price * qty;
		});
		return total;
	}
}

/**
 * @param {string} id product code
 * @param {object} cart product code and quantity of each product
 */
function add(id) {
	if (CookieUtil.getCookie("cart") === null) {
		shoppingCart[id] = 1;
		CookieUtil.setCookie("cart", JSON.stringify(shoppingCart), 1);
	} else {
		shoppingCart = parseToObj(CookieUtil.getCookie("cart"));
		if (shoppingCart.hasOwnProperty(id)) {
			shoppingCart[id] += 1;
		} else {
			shoppingCart[id] = 1;
		}
		CookieUtil.setCookie("cart", JSON.stringify(shoppingCart), 1);
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
	shoppingCart = parseToObj(CookieUtil.getCookie("cart"));
	for (const key in shoppingCart) {
		if (shoppingCart.hasOwnProperty(key)) {
			delete shoppingCart[key];
		}
	}
	CookieUtil.unset("cart");
}

/**
 * @param {string} id product code
 */
function removeItem(id) {
	shoppingCart = parseToObj(CookieUtil.getCookie("cart"));
	if (Object.keys(shoppingCart).length == 1) {
		delete shoppingCart[id];
		CookieUtil.unset("cart");
	} else {
		delete shoppingCart[id];
		CookieUtil.setCookie("cart", JSON.stringify(shoppingCart), 1);
	}
}

/**
 * @param {string} id product code
 */
function getTotalPrice(id) {
	if (CookieUtil.getCookie("cart") === null) {
		return 0;
	} else {
		shoppingCart = parseToMap(parseToObj(CookieUtil.getCookie("cart")));
		return (
			products.find((product) => product.code == id).price *
			shoppingCart.get(id)
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
