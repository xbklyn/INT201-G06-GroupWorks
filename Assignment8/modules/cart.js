// need to revise this file

import products from "./products/products.js";
import CookieUtil from "./cookieUtil.js";

const cart = {
	itemID: [],
	items: [],
	netPrice: 0,
	totalQuantity: 0,
	/**
	 * @param {number} id id of the button
	 */
	add: function (id) {
		if (CookieUtil.getCookie("shopping_cart") !== "") {
			let sc = JSON.parse(CookieUtil.getCookie("shopping_cart"));
			if (sc.itemID.includes(id + 1)) {
				const index = sc.itemID.indexOf(id + 1);
				sc.items[index].quantity += 1;
				let price = sc.items[index].price;
				let quantity = sc.items[index].quantity;
				sc.items[index].totalPrice = price * quantity;
				sc.totalQuantity += 1;
			} else {
				sc.itemID.push(id + 1);
				sc.items.push({
					productDetails: {
						img: products[id].imgURL,
						productCode: products[id].code,
						productName: products[id].name,
						resolution: products[id].resolution,
						sizeInInches: products[id].size,
					},
					price: products[id].price,
					quantity: 1,
					totalPrice: products[id].price,
				});
				sc.totalQuantity += 1;
			}
			sc.netPrice += products[id].price;
			CookieUtil.setCookie("shopping_cart", JSON.stringify(sc, 0, 2), 1);
		} else {
			if (this.itemID.includes(id + 1)) {
				const index = this.itemID.indexOf(id + 1);
				this.items[index].quantity += 1;
				let price = this.items[index].price;
				let quantity = this.items[index].quantity;
				this.items[index].totalPrice = price * quantity;
				this.totalQuantity += 1;
			} else {
				this.itemID.push(id + 1);
				this.items.push({
					productDetails: {
						img: products[id].imgURL,
						productCode: products[id].code,
						productName: products[id].name,
						resolution: products[id].resolution,
						sizeInInches: products[id].size,
					},
					price: products[id].price,
					quantity: 1,
					totalPrice: products[id].price,
				});
				this.totalQuantity += 1;
			}
			this.netPrice += products[id].price;
			CookieUtil.setCookie(
				"shopping_cart",
				JSON.stringify(cart, 0, 2),
				1
			);
		}
	},
	// new features
	// remove: function (id) {},
	// clear: function () {},
};

export { cart as default };
