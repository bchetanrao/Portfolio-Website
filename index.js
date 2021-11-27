var loader = document.getElementById("loader");

window.addEventListener("load", () => {
	setTimeout(hideLoader, 3000);
});
function hideLoader() {
	loader.style.opacity = 0;
}

var animation = bodymovin.loadAnimation({
	container: document.getElementById("bm"),
	renderer: "svg",
	loop: true,
	autoplay: true,
	path: "data.json",
});
