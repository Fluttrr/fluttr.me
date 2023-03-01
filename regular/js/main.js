function setSize() {
	document.getElementById('main-box').style.height = window.innerHeight + 'px';

	const wHeight = window.innerHeight;
	const wWidth = window.innerWidth;
	let distanceStars;

	if (window.innerHeight > window.innerWidth) {
		document.getElementById('stars-overlay').style.height = wHeight * Math.sqrt(2) * 4 + 'px';
		document.getElementById('stars-overlay').style.width = wHeight * Math.sqrt(2) * 4 + 'px';
		distanceStars = window.innerHeight * 4;
	} else {
		document.getElementById('stars-overlay').style.height = wWidth * Math.sqrt(2) * 4 + 'px';
		document.getElementById('stars-overlay').style.width = wWidth * Math.sqrt(2) * 4 + 'px';
		distanceStars = window.innerWidth * 4;
	}

	document.getElementById('stars-overlay').style.top = '-' + distanceStars/4 + 'px';

}

function spawnBody() {
	setTimeout(function transitionBody() {
		document.getElementById('body').style.opacity = 1;
	}, 100);
}

function removeArrow() {
	document.getElementById('arrow').style.opacity = 0;
}
