export default class LocalStorage {
	/**
	 * @param {string} key
	 */
	static getItem(key) {
		return localStorage.getItem(key);
	}

	/**
	 * @param {string} key
	 * @param {string} value
	 */
	static setItem(key, value) {
		localStorage.setItem(key, value);
	}
	// u can add more if u want
}
