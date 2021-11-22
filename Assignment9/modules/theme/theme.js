//add local storage theme
const themeSwitcher = document.getElementById("theme-switch");

themeSwitcher.checked = false;
function clickHandler() {
	if (this.checked) {
		document.body.classList.remove("light");
		document.body.classList.add("dark");
		localStorage.setItem("theme", "dark");
	} else {
		document.body.classList.add("light");
		document.body.classList.remove("dark");
		localStorage.setItem("theme", "light");
	}
}
themeSwitcher.addEventListener("click", clickHandler);

function checkTheme() {
	const localStorageTheme = localStorage.getItem("theme");

	if (localStorageTheme === "dark") {
		document.body.classList.add(localStorageTheme);
		themeSwitcher.checked = true;
	} else {
		document.body.classList.add(localStorageTheme);
		themeSwitcher.checked = false;
	}
}

export { checkTheme as default };
