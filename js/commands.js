function help() {
	print("Available commands:");
	printIndentedLine(
		"* help \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0- display this help message"
	);
	printIndentedLine(
		"* about \u00A0\u00A0\u00A0\u00A0\u00A0- all about me"
	);
	printIndentedLine(
		"* music \u00A0\u00A0\u00A0\u00A0\u00A0- open a music player to listen to my music"
	);
	printIndentedLine(
		"* blog \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0- view my blog posts"
	);
	printIndentedLine(
		"* photos \u00A0\u00A0\u00A0\u00A0- view my photo gallery"
	);
	printIndentedLine(
		"* plushies \u00A0\u00A0- images of the plushies i've made"
	);
	printIndentedLine(
		"* ls \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0- display all accessible files (links)"
	);
	printIndentedLine("* cat <file> - display contents of a file");
	printIndentedLine(
		"* clear \u00A0\u00A0\u00A0\u00A0\u00A0- clear the screen"
	);
	printIndentedLine(
		"* history \u00A0\u00A0\u00A0- show previously used commands"
	);
}

function about() {
	print(
		"hey!! thanks for trusting me enough to actually go on my website lol. this is a hub for anything about me, from my links to my music to a dumb useless little blog and even my photos and plushies!!"
	);
	printLineBreak();

	print(
		"i study computer science and im into various things, such as:"
	);
	printLineBreak();

	printIndentedLine("* anime (i dont watch nearly as much as id like to)");
	printIndentedLine(
		"* listening to music (edm, rap, singer/songwriter, classical, rock (especially noise pop) and osts)"
	);
	printIndentedLine("* making music (type 'music' to take a look!!)");
	printIndentedLine("* sewing plushies (type 'plushies to see them..)");
	printIndentedLine("* making friendship bracelets")
	printIndentedLine("* embroidery??")
	printIndentedLine("* photography (type 'photos' for a wall)");
	printIndentedLine("* tech/programming");
	printIndentedLine("* collecting vinyl and manga");
	printIndentedLine("* good audio gear (headphones, iems, amps, speakers)");
	printIndentedLine("* tea (love me some white tea)");
	printIndentedLine("* learning japanese (on a bit of a hiatus...)");
	printIndentedLine("* 3d printing");
	printIndentedLine("* cooking/baking");
	printIndentedLine("* wild camping (i never do this lol)");
	printLineBreak();

	print(
		'you can find links to any of my profiles by using the "ls" command to list all my profiles and then using "cat [link]".'
	);

	printLineBreak();

	print(
		"this site is made using nothing but html, css and vanilla javascript."
	);

	printLineBreak();

	print("feel free to message me anywhere for any reason!!");
}

function ls(num) {
	print("total " + num);

	// Signal
	printSpan("-rw-r--r-- 1 fluttr social 64 Mar  1 13:29\u00A0");
	printCommandLink("signal", "--accent", "cat signal");
	printLineBreak();

	// Discord
	printSpan("-rw-r--r-- 1 fluttr social 64 Mar  1 13:29\u00A0");
	printCommandLink("discord", "--accent", "cat discord");
	printLineBreak();

	// Steam
	printSpan("-rw-r--r-- 1 fluttr social 64 Mar  1 13:29\u00A0");
	printCommandLink("steam", "--accent", "cat steam");
	printLineBreak();

	// GitHub
	printSpan("-rw-r--r-- 1 fluttr coding 64 Mar  1 13:29\u00A0");
	printCommandLink("github", "--accent", "cat github");
	printLineBreak();

	// Last.fm
	printSpan("-rw-r--r-- 1 fluttr stats\u00A0 64 Mar  1 13:29\u00A0");
	printCommandLink("lastfm", "--accent", "cat lastfm");
	printLineBreak();

	// Anilist
	printSpan("-rw-r--r-- 1 fluttr stats\u00A0 64 Mar  1 13:29\u00A0");
	printCommandLink("anilist", "--accent", "cat anilist");
	printLineBreak();

	// Discogs
	printSpan("-rw-r--r-- 1 fluttr stats\u00A0 64 Mar  1 13:29\u00A0");
	printCommandLink("discogs", "--accent", "cat discogs");
	printLineBreak();
}

function lsExtra() {
	ls(16);

	// Fake Onlyfans
	printSpan("-rw-r--r-- 1 fluttr social 64 Mar  1 13:29\u00A0");
	printCommandLink(".onlyfans", "--accent2", "cat .onlyfans");
	printLineBreak();

	// Favorite music
	printSpan("-rw-r--r-- 1 fluttr lists\u00A0 64 Mar  1 13:29\u00A0");
	printCommandLink(".favmusic", "--accent2", "cat .favmusic");
	printLineBreak();
}

function favMusic() {
	printLink(
		"Willy Rodrigez - wetdream (noise pop)",
		"https://www.youtube.com/watch?v=d8GaT09uxow&pp=ygUYd2lsbHkgcm9kcmlndWV6IHdldGRyZWFt"
	);
	printLineBreak();
	printLink(
		"San Holo - worthy (electronic)",
		"https://www.youtube.com/watch?v=ZIjGhWi6FEI"
	);
	printLineBreak();
	printLink(
		"Jeremy Zucker & Chelsea Cutler - this is how you fall in love (singer/songwriter)",
		"https://www.youtube.com/watch?v=6qkgVgjN188"
	);
	printLineBreak();
	printLink(
		"Aries - KIDS ON MOLLY (rap/rock)",
		"https://www.youtube.com/watch?v=6gbV8tUuYiY"
	);
	printLineBreak();
	printLink(
		"Parannoul - White Ceiling (noise pop)",
		"https://www.youtube.com/watch?v=Jp9qIHFlvgc&pp=ygUNd2hpdGUgY2VpbGluZw%3D%3D"
	);
	printLineBreak();
	printLink(
		"drug bug - took my heart (idk what genre this is..)",
		"https://www.youtube.com/watch?v=xdF4mq_DPH8&pp=ygUWdG9vayBteSBoZWFydCBkcnVnIGJ1Zw%3D%3D"
	);
	printLineBreak();
}

function clear() {
	var list = document.getElementsByClassName("clearable");

	while (list[0]) {
		list[0].parentNode.removeChild(list[0]);
	}
}

function music() {
	printSpan("you can also find my music on\u00A0");
	printLink("bandcamp", "https://fluttr.bandcamp.com");
	printSpan(",\u00A0");
	printLink("youtube", "https://www.youtube.com/channel/UCrtf_NgTcCwwrMfWCb3PKHA");
	printSpan("\u00A0and streaming services like\u00A0");
	printLink("spotify", "https://open.spotify.com/artist/6vRyHtkx50nQkp8kUuyj0h?si=de82da17c25b44e7");
	printSpan("!");

	const container = document.createElement('div');
	container.classList.add('clearable');
	container.classList.add('music-container');
	document.getElementById("window").appendChild(container);
	document.getElementById("window").style.setProperty('margin-bottom', '5rem');

	generateMusic();
}

function blog() {
	if (blogPosts.length === 0) {
		print("No blog posts available.");
		return;
	}

	print('Blog overview (type "blog {num}" or "blog {name}" to see any entry! Incomplete names are searched for.):');

	blogEntry(blogPosts.length);
	blogEntry(blogPosts.length - 1);


	for (let i = 2; i < blogPosts.length; i++) {
		const post = blogPosts[i];
		const num = String(blogPosts.length - i).padStart(2, '0');
		printCommandLink(`${num} - ${post.title} (${prettifyDate(post.date)})`, "--accent", `blog ${num}`);
		printLineBreak();
	}
	printLineBreak();
}

function blogEntry(query) {
	let index = getIndexFromQuery(blogPosts, query);

	if (index == -1) {
		print("Blog entry does not exist!");
		return;
	}

	const post = blogPosts[index];
	printLineBreak();
	print(`${String(blogPosts.length - index).padStart(2, "0")} - ${post.title}`, "--accent");
	print(prettifyDate(post.date), "--accent2");
	post.content.split("\n").forEach(line => {
		print(line);
		printLineBreak();
	});
}

function plushies() {
	const windowElement = document.getElementById("window");
	const gallery = document.createElement("div");
	gallery.classList.add("clearable")
	gallery.classList.add("gallery")
	windowElement.appendChild(gallery);

	plushieList.forEach(plushie => {
		const imageContainer = document.createElement("div");
		imageContainer.style.breakInside = "avoid";
		const imageTitle = document.createElement("p");
		imageTitle.textContent = `${plushie.title} (${plushie.date})`;

		const img = new Image();
		img.src = "../img/plushies/" + plushie.title;
		img.className = "clearable"

		imageContainer.appendChild(imageTitle);
		imageContainer.appendChild(img);
		gallery.appendChild(imageContainer);
	})
}

function photos() {
	print('Photo album overview (type "photos {num}" or "photos {name}" to view any album! Incomplete names are searched for.)')
	print('Click on an image for a high resolution version!');
	printLineBreak();

	photoAlbum(photoAlbums.length);

	for (let i = 1; i < photoAlbums.length; i++) {
		const album = photoAlbums[i];
		const num = String(photoAlbums.length - i).padStart(2, '0');
		printCommandLink(`${num} - ${album.title}, ${prettifyDate(album.date)} (${album.count} photos)`, "--accent", `photos ${num}`);
		const thumbContainer = document.createElement("div");
		thumbContainer.classList.add("clearable");
		thumbContainer.classList.add("album-thumbnail-container");
		generateThumbnails(album, thumbContainer);
		document.getElementById("window").appendChild(thumbContainer);
	}

	printLineBreak();
}

function generateThumbnails(album, container) {
	const usedThumbnails = new Set();
	for (let j = 0; j < Math.min(3, album.count); j++) {
		let thumbnailPick;

		// Keep generating a new pick until it's unique
		do {
			thumbnailPick = Math.floor(Math.random() * album.count) + 1;
		} while (usedThumbnails.has(thumbnailPick)); // Check for duplicates

		usedThumbnails.add(thumbnailPick);

		const linkContainer = document.createElement("a");
		linkContainer.href = `../img/photos/${album.title}/${String(thumbnailPick).padStart(4, '0')}.jpg`;
		linkContainer.target = "_blank";
		const img = new Image();
		img.src = `../img/photos/${album.title}/${String(thumbnailPick).padStart(4, '0')}.jpg-thumb.jpg`;
		img.classList.add("album-thumbnail");
		linkContainer.appendChild(img);
		container.appendChild(linkContainer);
	}
}

function photoAlbum(query) {
	const index = getIndexFromQuery(photoAlbums, query);

	if (index == -1) {
		print("Blog entry does not exist!");
		return;
	}

	const albumInfo = photoAlbums[index];
	printSpan(`${String(photoAlbums.length - index).padStart(2, '0')} - ${albumInfo.title}, ${prettifyDate(albumInfo.date)} (${albumInfo.count} photos)`, "--accent");

	const gallery = document.createElement("div");
	gallery.classList.add("clearable")
	gallery.classList.add("gallery")
	document.getElementById("window").appendChild(gallery);

	for (let i = 1; i <= albumInfo.count; i++) {
		let filename = String(i).padStart(4, '0')
		const linkContainer = document.createElement("a");
		linkContainer.href = `../img/photos/${albumInfo.title}/${String(filename).padStart(4, '0')}.jpg`;
		linkContainer.target = "_blank";
		const img = new Image();
		img.src = `../img/photos/${albumInfo.title}/${filename}.jpg-medium.jpg`;
		linkContainer.appendChild(img);
		gallery.appendChild(linkContainer);
	}
}

// returns the index of the corresponding blog post/photo album/ etc.
function getIndexFromQuery(array, query) {
	let index;

	// get index from query
	if (/^\d+$/.test(query)) { // it is a number
		index = array.length - parseInt(query);
	} else {
		index = searchTitle(array, query)
	}

	if (index < 0 || index >= array.length) {
		return -1;
	}

	return index;
}

function searchTitle(array, query) {
	for (let i = 0; i < array.length; i++) {
		if (array[i].title.startsWith(query))
			return i;
	}
	return -1;
}