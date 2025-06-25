let latestUpdateDate = "1970-01-01";
let latestUpdateType = "";

let blogPosts = [];

fetch('./js/posts.json')
	.then(response => response.json())
	.then(data => {
		blogPosts = data.posts;
		updateLatestUpdate(blogPosts[0].date, "blog post");
	})
	.catch(error => console.error('Error fetching blog posts:', error));

let songs = [];

fetch('./js/musicManifest.json')
	.then(response => response.json())
	.then(data => {
		songs = data.catalogue;
		updateLatestUpdate(songs[0].date, "music");
	})
	.catch(error => console.error('Error fetching songs:', error))

let plushieList = [];

fetch('./js/plushieManifest.json')
	.then(response => response.json())
	.then(data => {
		plushieList = data.filenames;
		updateLatestUpdate(plushieList[0].date, "plushies");
	})
	.catch(error => console.error('Error fetching plushie manifest:', error))

let photoAlbums = [];

fetch('./js/photoManifest.json')
	.then(response => response.json())
	.then(data => {
		photoAlbums = data.albums;
		updateLatestUpdate(photoAlbums[0].date, "photos");
	})
	.catch(error => console.error('Error fetching photo manifest:', error))

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