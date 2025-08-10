let lyricsContainerSerialNum = 0;

function sanitizeFilename(s) {
	return s.replace(/[^a-zA-Z0-9]/g, "_"); // Replace non-alphanumeric characters with underscores
}

function getAlbumHTML(item) {
	return `
		<img class="cover" src="./img/covers/${sanitizeFilename(
			item.title
		)}.jpg" alt="Album Cover">
		<div class="album-content">
			<h1>${item.title}</h1>
			<p class="info">${prettifyDate(item.date)} &bull; ${item.description}</p>
			<ol>
				${item.songs
					.map(
						(song) => `
					<li>
						<p class="album-song-title">${song.title}<span class="duration">${
							song.length
						}</span></p>
						<span class="info">${song.description}</span>
						${
							song.lyrics
								? `<button class="lyrics-button" onclick='toggleLyrics(${lyricsContainerSerialNum})'>lyrics</button>`
								: ""
						}
						<button class="play-album" onclick="playSongFromName('${sanitizeFilename(
							song.title
						)}');"><img class="play-button" src="./img/play.svg"></button>
						<div class="lyrics-container" id="lyrics-container-${lyricsContainerSerialNum++}">
							${
								song.lyrics
									? song.lyrics
											.split("\n")
											.map((line) => `<p class="lyrics-line">${line}</p>`)
											.join("")
									: ""
							}
						</div>
					</li>
				`
					)
					.join("")}
			</ol>
		</div>
	`;
}

function getSingleHTML(item) {
	return `
		<img class="cover" src="./img/covers/${sanitizeFilename(
			item.title
		)}.jpg" alt="Album Cover">
		<div class="album-content">
			<h1>${item.title}<span class="duration">${item.length}</span></h1>
			<p class="info">${prettifyDate(item.date)} &bull; ${item.description} ${
		item.lyrics
			? `&bull; <button class="lyrics-button" onclick='toggleLyrics(${lyricsContainerSerialNum})'>lyrics</button>`
			: ""
	}</p>
			<button class="play-single" onclick="playSongFromName('${sanitizeFilename(
				item.title
			)}');"><img class="play-button" src="./img/play.svg"></button>
			<div class="lyrics-container" id="lyrics-container-${lyricsContainerSerialNum++}">
				${
					item.lyrics
						? item.lyrics
								.split("\n")
								.map((line) => `<p class="lyrics-line">${line}</p>`)
								.join("")
						: ""
				}
			</div>
		</div>
	`;
}

function toggleLyrics(containerId) {
	const container = document.getElementById(`lyrics-container-${containerId}`);
	container.style.display =
		getComputedStyle(container).display == "none" ? "block" : "none";
}

// This variable is used to prevent the player from being re-initialzed upon multiple music commands
let firstLaunch = true;
function generateMusic() {
	const containers = document.getElementsByClassName("music-container");
	const container = containers[containers.length - 1];
	songs.forEach((item) => {
		const div = document.createElement("div");
		div.classList.add("album");
		const content = item.album ? getAlbumHTML(item) : getSingleHTML(item);
		div.innerHTML = content;
		container.appendChild(div);
	});
	document
		.getElementById("player")
		.setAttribute("style", "visibility: visible;");
	if (firstLaunch) initPlayer();
	firstLaunch = false;
}
