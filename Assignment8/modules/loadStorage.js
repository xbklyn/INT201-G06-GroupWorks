import checkTheme from "./theme.js";
import CookieUtil from "./cookieUtil.js";

window.onload = checkTheme();

if (CookieUtil.getCookie("shopping_cart") != null) {
	let sc = JSON.parse(CookieUtil.getCookie("shopping_cart"));
	if (sc.totalQuantity <= 99) {
		document.getElementById(
			"total"
		).innerHTML = `<b>${sc.totalQuantity}</b>`;
	} else {
		document.getElementById("total").innerHTML = `<b>99+</b>`;
	}
}
