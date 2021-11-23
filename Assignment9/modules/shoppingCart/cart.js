// store in Cookies
import products from "../products/products.js";
import CookieUtil from "../cookieUtil.js";

let shoppingCart = new Object();
export const cookieName = "cart";

/**
 * @returns {number} total quantity in cart
 */
export function getTotalQty() {
	if (CookieUtil.getCookie(cookieName) === null) {
		return 0;
	} else {
		shoppingCart = parseToObj(CookieUtil.getCookie(cookieName));
		return Object.values(shoppingCart).reduce(
			(total, qty) => total + qty,
			0
		);
	}
}

export function getNetPrice() {
	if (CookieUtil.getCookie(cookieName) === null) {
		return 0;
	} else {
		shoppingCart = parseToObj(CookieUtil.getCookie(cookieName));
		let total = 0;
		Object.keys(shoppingCart).forEach((id) => {
			total += getTotalPrice(id);
		});
		return total;
	}
}

/**
 * @param {string} id product code
 */
export function add(id) {
	if (CookieUtil.getCookie(cookieName) === null) {
		shoppingCart[id] = 1;
	} else {
		shoppingCart = parseToObj(CookieUtil.getCookie(cookieName));
		if (shoppingCart.hasOwnProperty(id)) {
			shoppingCart[id] += 1;
		} else {
			shoppingCart[id] = 1;
		}
	}
	CookieUtil.setCookie(cookieName, JSON.stringify(shoppingCart), 1);
	updateTotalQty();
}

/**
 * @param {string} json JSON string format
 * @returns {object} object from JSON
 */
export function parseToObj(json) {
	return JSON.parse(json);
}

export function clearAll() {
	if (CookieUtil.getCookie(cookieName) !== null) {
		shoppingCart = parseToObj(CookieUtil.getCookie(cookieName));
		for (const key in shoppingCart) {
			if (shoppingCart.hasOwnProperty(key)) {
				delete shoppingCart[key];
			}
		}
		CookieUtil.unset(cookieName);
	}
}

/**
 * @param {string} id product code
 */
export function removeItem(id) {
	shoppingCart = parseToObj(CookieUtil.getCookie(cookieName));
	if (Object.keys(shoppingCart).length == 1) {
		delete shoppingCart[id];
		CookieUtil.unset(cookieName);
	} else {
		delete shoppingCart[id];
		CookieUtil.setCookie(cookieName, JSON.stringify(shoppingCart), 1);
	}
}

/**
 * @param {string} id product code
 */
export function remove(id) {
	shoppingCart = parseToObj(CookieUtil.getCookie(cookieName));
	shoppingCart[id] -= 1;
	if (shoppingCart[id] == 0) {
		removeItem(id);
	} else {
		CookieUtil.setCookie(cookieName, JSON.stringify(shoppingCart), 1);
	}
	updateTotalQty();
}

/**
 * @param {string} id product code
 */
export function getTotalPrice(id) {
	if (CookieUtil.getCookie(cookieName) === null) {
		return 0;
	} else {
		shoppingCart = parseToObj(CookieUtil.getCookie(cookieName));
		return (
			products.find((product) => product.code == id).price *
			shoppingCart[id]
		);
	}
}

function updateTotalQty() {
	let totalQuantity = document.getElementById("total");
	totalQuantity.innerHTML = `<b>${getTotalQty()}</b>`;
}
