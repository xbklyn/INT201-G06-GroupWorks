// need to revise this file

import products from "./products/products.js";

const cart = {
	itemID: [],
	items: [],
	netPrice: 0,
	totalQuantity: 0,
	/**
	 * @param {number} id id of the button
	 */
	add: function (id) {
		if (this.itemID.includes(id + 1)) {
			this.items.forEach((item) => {
				if (item.productDetails.productCode == id + 1) {
					item.quantity += 1;
					item.totalPrice = item.price * item.quantity;
				}
			});
			this.totalQuantity += 1;
		} else {
			this.itemID.push(id + 1);
			this.items.push({
				productDetails: {
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
	},
	// new features
	// remove: (id) => {},
	// clear: () => {},
};

export { cart as default };
