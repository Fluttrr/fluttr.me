function print(string, color = "--text", type = "line", indent = false, link = "") {
	let text;
	if (type == "line") {
		text = document.createElement("p");
		if (indent)
			text.classList.add("indent");
	} else if (type == "span")
		text = document.createElement("span");
	else if (type == "link") {
		text = document.createElement("a");
		text.setAttribute("href", link);
		text.setAttribute("target", "_blank");
	}

	text.innerText = string;
	text.setAttribute("class", "clearable");
	if (indent)
		text.setAttribute("class", "indent clearable");
	text.style.color = `var(${color}, #fff)`;

	document.getElementById("window").appendChild(text);
	return text;
}

function printIndentedLine(string, color = "--text") {
	return print(string, color, "line", true);
}

function printSpan(string, color = "--text") {
	return print(string, color, "span")
}

function printLink(text, link, color) {
	return print(text, color, "link", false, link);
}

function printCommandLink(string, color = "--text", command = string, indent = false) {
	const text = document.createElement("span");
	text.style.color = `var(${color}, #fff)`;
	text.classList.add("cmd-link");
	text.classList.add("clearable");
	if (indent)
		text.classList.add("indent");
	text.innerText = string;
	text.setAttribute("onclick", `execCmdForUser("${command}")`);
	document.getElementById("window").appendChild(text);
	return text;
}

function printLineBreak() {
	const linebreak = document.createElement("br");
	linebreak.setAttribute("class", "clearable");

	const window = document.getElementById("window");
	window.appendChild(linebreak);
}