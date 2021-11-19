// store in Cookies
import products from "../products/products.js";
import CookieUtil from "../cookieUtil.js";

let shoppingCart = new Object();
export const cookieName = "cart";

/**
 * @param {string} name name of cookie
 */
export function getCookie(name) {
	return CookieUtil.getCookie(name);
}

/**
 * @param {string} name name of the cookie
 * @param {string} value value of the cookie
 * @param {number} expires duration of the cookie in days
 */
function setCookie(name, value, expires) {
	CookieUtil.setCookie(name, value, expires);
}

/**
 * @returns {number} total quantity in cart
 */
export function getTotalQty() {
	if (getCookie(cookieName) === null) {
		return 0;
	} else {
		shoppingCart = parseToObj(getCookie(cookieName));
		return Object.values(shoppingCart).reduce((total, qty) => total + qty);
	}
}

export function getNetPrice() {
	if (getCookie(cookieName) === null) {
		return 0;
	} else {
		shoppingCart = parseToMap(parseToObj(getCookie(cookieName)));
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
 */
export function add(id) {
	if (getCookie(cookieName) === null) {
		shoppingCart[id] = 1;
		setCookie(cookieName, JSON.stringify(shoppingCart), 1);
	} else {
		shoppingCart = parseToObj(getCookie(cookieName));
		if (shoppingCart.hasOwnProperty(id)) {
			shoppingCart[id] += 1;
		} else {
			shoppingCart[id] = 1;
		}
		setCookie(cookieName, JSON.stringify(shoppingCart), 1);
	}
}

/**
 * @param {object} obj product code and quantity of each product
 */
function parseToMap(obj) {
	return new Map(Object.entries(obj));
}

/**
 * @param {string} json JSON string format
 * @returns {object} object from JSON
 */
export function parseToObj(json) {
	return JSON.parse(json);
}

export function clearAll() {
	shoppingCart = parseToObj(getCookie(cookieName));
	for (const key in shoppingCart) {
		if (shoppingCart.hasOwnProperty(key)) {
			delete shoppingCart[key];
		}
	}
	CookieUtil.unset(cookieName);
}

/**
 * @param {string} id product code
 */
export function removeItem(id) {
	shoppingCart = parseToObj(getCookie(cookieName));
	if (Object.keys(shoppingCart).length == 1) {
		delete shoppingCart[id];
		CookieUtil.unset(cookieName);
	} else {
		delete shoppingCart[id];
		setCookie(cookieName, JSON.stringify(shoppingCart), 1);
	}
}

/**
 * @param {string} id product code
 */
export function getTotalPrice(id) {
	if (getCookie(cookieName) === null) {
		return 0;
	} else {
		shoppingCart = parseToMap(parseToObj(getCookie(cookieName)));
		return (
			products.find((product) => product.code == id).price *
			shoppingCart.get(id)
		);
	}
}
