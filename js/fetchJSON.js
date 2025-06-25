let latestUpdateDate = "1970-01-01";
let latestUpdateType = "";

var blogPosts;
var songs;
var plushieList;
var photoAlbums;

async function fetchJSON(filename, type) {
	try {
		const response = await fetch(`./js/${filename}`);
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