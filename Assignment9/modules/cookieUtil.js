export default class CookieUtil {
	/**
	 * @param {string} name name of the cookie
	 */
	static getCookie(name) {
		// console.log(`all cookies: ${document.cookie}`);
		let cookieName = `${encodeURIComponent(name)}=`;
		let cookieStart = document.cookie.indexOf(cookieName);
		let cookieValue = null;
		// console.log(`cookieName = ${cookieName}`);
		// console.log(`cookieStart = ${cookieStart}`);

		if (cookieStart > -1) {
			let cookieEnd = document.cookie.indexOf(";", cookieStart);
			// console.log(`cookieEnd = ${cookieEnd}`);
			if (cookieEnd == -1) {
				cookieEnd = document.cookie.length;
			}
			cookieValue = decodeURIComponent(
				document.cookie.substring(
					cookieStart + cookieName.length,
					cookieEnd
				)
			);
			// console.log(`cookieValue = ${cookieValue}`);
		}
		return cookieValue;
	}

	/**
	 * @param {string} name name of the cookie
	 * @param {string} value value of the cookie
	 * @param {number} expires duration of the cookie in days
	 */
	static setCookie(name, value, expires) {
		let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(
			value
		)}`;

		const expireDate = new Date();
		expireDate.setTime(
			expireDate.getTime() + expires * 24 * 60 * 60 * 1000
		);

		cookieText += `; expires=${expireDate.toUTCString()}`;
		// cookieText += `; expires=${expires}`;
		// console.log(`cookieText = ${cookieText}`);
		document.cookie = cookieText;
	}

	/**
	 * @param {string} name name of the cookie
	 */
	static unset(name) {
		CookieUtil.setCookie(name, "", new Date(0));
	}
}
