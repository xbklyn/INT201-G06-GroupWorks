// store in localStorage

import products from "../../Assignment8/modules/products/products.js";

class Cart {
	#items;
	#netPrice = 0;
	#totalQty = 0;

	constructor() {
		this.#items = new Map();
	}

	get allItems() {
		return this.#items;
	}

	get size() {
		return this.#items.size;
	}

	get totalQty() {
		this.#items.forEach((value) => {
			this.#totalQty += value.quantity;
		});
		return this.#totalQty;
	}

	get netPrice() {
		this.#items.forEach((value) => {
			this.#netPrice += value.price;
		});
		return this.#netPrice;
	}

	/**
	 * @param {*} id product code
	 * @param {object} product product details
	 */
	add(id, product) {
		if (arguments.length > 1) {
			if (this.find(id)) {
				this.getItem(id).quantity += 1;
			} else {
				this.#items.set(id, product);
				// set default quantity = 1
			}
		} else {
			if (this.find(id)) {
				this.getItem(id).quantity += 1;
			}
		}
	}

	clearAll() {
		this.#items.clear();
	}

	/**
	 * @param {*} id product code
	 */
	remove(id) {
		return this.#items.delete(id);
	}

	/**
	 * @param {*} id product code
	 */
	find(id) {
		return this.#items.has(id);
	}

	/**
	 * @param {*} id product code
	 * @return {object|null} return object or return null if not found
	 */
	getItem(id) {
		return this.find(id) ? this.#items.get(id) : null;
	}
}

let cart = new Cart();

for (let i = 0; i < 5; i++) {
	cart.add(i + 1, {
		name: `Item ${i}`,
		quantity: (i + 1) * 2,
		price: 100 * (i + 1),
	});
}

cart.add(5);
console.log(cart.allItems);
console.log(cart.totalQty);
console.log(cart.netPrice);
