const body = document.body;
body.classList.add("animate");
body.addEventListener("mousemove", (e) => {
	body.classList.remove("animate");
	body.style.setProperty(
		"--mouseX",
		((e.pageX / body.offsetWidth) * 200).toFixed(2) + "%"
	);
});
body.addEventListener("mouseout", (e) => {
	body.classList.add("animate");
});