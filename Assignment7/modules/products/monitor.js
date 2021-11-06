export default class Monitor {
	constructor(code = 0, name = "unknown", size = 0, resolution = "1440x1080") {
		this._code = code;
		this._name = name;
		this._sizeInInches = size;
		this._stock = 0;
		this._price = 0;
		this._resolution = resolution;
		this._imgURL = "path";
	}

	get name() {
		return this._name;
	}

	get resolution() {
		return this._resolution;
	}

	get code() {
		return this._code;
	}

	get imgURL() {
		return this._imgURL;
	}

	get size() {
		return this._sizeInInches;
	}

    get price() {
        return this._price;
    }

    get stock() {
        return this._stock;
    }

	/**
	 * @param {string} path set a new path
	 */
	set imgURL(path) {
		this._imgURL = path;
	}

	/**
	 * @param {number} amount set a new amount
	 */
	set stock(amount) {
		this._stock += amount;
	}

	/**
	 * @param {number} size set a new size
	 */
	set size(size) {
		this._sizeInInches = size;
	}

	/**
	 * @param {string} name set a new name
	 */
	set name(name) {
		this._name = name;
	}

	/**
	 * @param {string} code set a new code
	 */
	set code(code) {
		this._code = code;
	}

	/**
	 * @param {string} resolution set a new resolution
	 */
	set resolution(resolution) {
		this._resolution = resolution;
	}

	/**
	 * @param {number} size set a new size
	 */
	set size(size) {
		this._sizeInInches = size;
	}

    /**
	 * @param {number} price set a new price
	 */
    set price(price) {
        this._price = price;
    }
}
