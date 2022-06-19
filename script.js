function change(id) {
	if (document.getElementById("c" + id).value == 1) {
		document.getElementById("c" + id).value = 0;
		document.getElementById("u" + id).style.display = "none";
		document.getElementById("tr" + id).style.display = "none";
		document.getElementById("d" + id).style.display = "none";
	} else {
		document.getElementById("c" + id).value = 1;
		document.getElementById("u" + id).style.display = "block";
		document.getElementById("tr" + id).style.display = "block";
		document.getElementById("d" + id).style.display = "block";
	}
}
function menu(event,id) {
	alert(id);
}
function div_scroll() {
	document.getElementById("header_right").scrollLeft = document.getElementById("content_right").scrollLeft;
	document.getElementById("content_left").scrollTop = document.getElementById("content_right").scrollTop;
	document.getElementById("content_center").scrollTop = document.getElementById("content_right").scrollTop;
}