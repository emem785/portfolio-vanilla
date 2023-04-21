
let isIndex = window.location.href.endsWith("/");
let isLarge = window.innerWidth > 1200;

if (isIndex && !isLarge) {
	document.getElementsByTagName("body")[0].style.margin = "1em 3em";
}


document.getElementById("email").addEventListener("click", openEmail);

function openEmail() {
	window.location.href = "mailto:ememisong62@gmail.com";
}