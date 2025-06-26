let latestUpdateDate = "1970-01-01";
let latestUpdateType = "";

var blogPosts;
var songs;
var plushieList;
var photoAlbums;

async function fetchJSON(filename, type) {
	try {
		const response = await fetch(`../json/${filename}`);
		const data = await response.json();
		let result = data.content;
		updateLatestUpdate(result[0].date, type);
		return result;
	} catch (error) {
		console.error('Error fetching blog posts:', error);
		return [];
	}
}

async function loadAllData() {
	blogPosts = await fetchJSON("posts.json", "blog post");
	songs = await fetchJSON("musicManifest.json", "music");
	plushieList = await fetchJSON("plushieManifest.json", "plushies");
	photoAlbums = await fetchJSON("photoManifest.json", "photos");

	autoExecUrl(); // once the data is loaded, check if there are any URL parameters to execute
}

loadAllData();

// This function updates the "Latest Update" display at the top of the page
function updateLatestUpdate(date, type) {
	const currentDate = Date.parse(latestUpdateDate);
	const newDate = Date.parse(date);
	if (newDate > currentDate) {
		latestUpdateDate = date;
		latestUpdateType = type;
	}
	document.getElementById("latest-update").textContent = `${prettifyDate(latestUpdateDate)} (${latestUpdateType})`;
}

function prettifyDate(date) {
	const components = date.split("-");
	let year = components[0];
	let month = components[1];
	let day = components[2];

	const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
	month = months[month - 1];

	if (day.startsWith("0"))
		day = day.substring(1);

	let daySuffix = "";
	if (day == 1 || day == 21 || day == 31)
		daySuffix = "st"
	else if (day == 2 || day == 22)
		daySuffix = "nd"
	else if (day == 3 || day == 23)
		daySuffix = "rd"
	else
		daySuffix = "th"

	return `${day}${daySuffix} of ${month}, ${year}`;
}

function autoExecUrl() {
	// Get the query string part of the URL (?color=blue)
	const queryString = window.location.search;

	// Parse the query string
	const urlParams = new URLSearchParams(queryString);

	// Get values of parameters
	const blogParam = urlParams.get('blog');
	const photosParam = urlParams.get('photos');
	const plushies = urlParams.get('plushies');
	const music = urlParams.get('music');
	const about = urlParams.get('about');

	const input = document.getElementById("input");
	if (blogParam)
		if (blogParam == "true")
			input.textContent = "blog";
		else // has to be a number
			input.textContent = `blog ${blogParam}`;
	if (photosParam)
		if (photosParam == "true")
			input.textContent = "photos";
		else // has to be a number
			input.textContent = `photos ${photosParam}`;
	if (plushies)
		input.textContent = "plushies";
	if (music)
		input.textContent = "music";
	if (about)
		input.textContent = "about";

	if (blogParam || photosParam || plushies || music || about)
		evalCommand();
}