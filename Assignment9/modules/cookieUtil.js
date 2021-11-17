export default class CookieUtil {
	static getCookie(name) {
		console.log(`all cookies: ${document.cookie}`);
		let cookieName = `${encodeURIComponent(name)}=`;
		let cookieStart = document.cookie.indexOf(cookieName);
		let cookieValue = null;
		console.log(`cookieName = ${cookieName}`);
		console.log(`cookieStart = ${cookieStart}`);

		if (cookieStart > -1) {
			let cookieEnd = document.cookie.indexOf(";", cookieStart);
			console.log(`cookieEnd = ${cookieEnd}`);
			if (cookieEnd == -1) {
				cookieEnd = document.cookie.length;
			}
			cookieValue = decodeURIComponent(
				document.cookie.substring(
					cookieStart + cookieName.length,
					cookieEnd
				)
			);
			console.log(`cookieValue = ${cookieValue}`);
		}
		return cookieValue;
	}

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
		console.log(`cookieText = ${cookieText}`);
		document.cookie = cookieText;
	}

	static unset(name) {
		CookieUtil.setCookie(name, "", new Date(0));
	}
}
