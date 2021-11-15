import checkTheme from "./theme.js";
import CookieUtil from "./cookieUtil.js";
import { updateTotalQty } from "./cart.js";

window.onload = checkTheme();

if (CookieUtil.getCookie("shopping_cart") != null) {
	updateTotalQty();
}
