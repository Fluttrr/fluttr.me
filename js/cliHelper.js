function printLine(string) {
  const text = document.createElement("p");
  const textNode = document.createTextNode(string);
  text.appendChild(textNode);
  text.setAttribute("class", "clearable");

  const window = document.getElementById("window");
  window.appendChild(text);
  return text;
}

function printIndentedLine(string) {
  const text = document.createElement("p");
  const textNode = document.createTextNode(string);
  text.appendChild(textNode);
  text.setAttribute("class", "indent clearable");

  const window = document.getElementById("window");
  window.appendChild(text);
  return text;
}

function printSpan(string, color) {
  const span = document.createElement("span");
  const textNode = document.createTextNode(string);
  span.appendChild(textNode);
  span.style.color = "var(" + color + ", #fff)";
  span.style.display = "inline-block";
  span.setAttribute("class", "clearable");

  const window = document.getElementById("window");
  window.appendChild(span);
  return span;
}

function printLink(string, link) {
  printLink(string, link, "--text");
}

function printLink(string, link, color) {
  const linkElement = document.createElement("a");
  const textNode = document.createTextNode(string);
  linkElement.appendChild(textNode);
  linkElement.style.color = "var(" + color + ", #fff)";
  linkElement.setAttribute("href", link);
  linkElement.setAttribute("target", "_blank");
  linkElement.setAttribute("class", "clearable");

  const window = document.getElementById("window");
  window.appendChild(linkElement);
  return linkElement;
}

function printLineBreak() {
  const linebreak = document.createElement("br");
  linebreak.setAttribute("class", "clearable");

  const window = document.getElementById("window");
  window.appendChild(linebreak);
}

function scroll(lastPos) {
	if (lastPos > 0) // Do not scroll if at the top of the page (feels weird)
		lastPos += window.innerHeight * 0.9;
	setTimeout(() => {
		window.scrollTo(0, lastPos); // Scroll to see the top of the list
	}, 10);
}