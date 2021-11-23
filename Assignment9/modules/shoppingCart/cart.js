// store in Cookies
// will change to localStorage soon
import products from "../products/products.js";
import CookieUtil from "../cookieUtil.js";

export const cookieName = "cart";

export const shoppingCart = {
	cart: {},
	/**
	 * @returns {number} total quantity in the cart
	 */
	getTotalQty() {
		if (CookieUtil.getCookie(cookieName) === null) {
			return 0;
		} else {
			this.cart = parseToObj(CookieUtil.getCookie(cookieName));
			return Object.values(this.cart).reduce(
				(total, qty) => total + qty,
				0
			);
		}
	},
	getNetPrice() {
		if (CookieUtil.getCookie(cookieName) === null) {
			return 0;
		} else {
			this.cart = parseToObj(CookieUtil.getCookie(cookieName));
			let total = 0;
			Object.keys(this.cart).forEach((id) => {
				total += this.getTotalPrice(id);
			});
			return total;
		}
	},
	/**
	 * @param {string} id product code
	 */
	add(id) {
		if (CookieUtil.getCookie(cookieName) === null) {
			this.cart[id] = 1;
		} else {
			this.cart = parseToObj(CookieUtil.getCookie(cookieName));
			if (this.cart.hasOwnProperty(id)) {
				this.cart[id] += 1;
			} else {
				this.cart[id] = 1;
			}
		}
		CookieUtil.setCookie(cookieName, JSON.stringify(this.cart), 1);
		updateTotalQty();
	},
	clearAll() {
		if (CookieUtil.getCookie(cookieName) !== null) {
			this.cart = parseToObj(CookieUtil.getCookie(cookieName));
			for (const key in this.cart) {
				if (this.cart.hasOwnProperty(key)) {
					delete this.cart[key];
				}
			}
			CookieUtil.unset(cookieName);
		}
	},
	/**
	 * @param {string} id product code
	 */
	removeItem(id) {
		this.cart = parseToObj(CookieUtil.getCookie(cookieName));
		if (Object.keys(this.cart).length == 1) {
			delete this.cart[id];
			CookieUtil.unset(cookieName);
		} else {
			delete this.cart[id];
			CookieUtil.setCookie(cookieName, JSON.stringify(this.cart), 1);
		}
	},
	/**
	 * @param {string} id product code
	 */
	remove(id) {
		this.cart = parseToObj(CookieUtil.getCookie(cookieName));
		this.cart[id] -= 1;
		if (this.cart[id] == 0) {
			this.removeItem(id);
		} else {
			CookieUtil.setCookie(cookieName, JSON.stringify(this.cart), 1);
		}
		updateTotalQty();
	},
	/**
	 * @param {string} id product code
	 */
	getTotalPrice(id) {
		if (CookieUtil.getCookie(cookieName) === null) {
			return 0;
		} else {
			this.cart = parseToObj(CookieUtil.getCookie(cookieName));
			return (
				products.find((product) => product.code == id).price *
				this.cart[id]
			);
		}
	},
};

/**
 * @param {string} json JSON string format
 * @returns {object} object from JSON
 */
export function parseToObj(json) {
	return JSON.parse(json);
}

export function updateTotalQty() {
	let totalQuantity = document.getElementById("total");
	totalQuantity.innerHTML = `<b>${shoppingCart.getTotalQty()}</b>`;
}
