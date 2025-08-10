// variable for the button that will contain both icons
const playIconContainer = document.getElementById("main-control");
const audioPlayerContainer = document.getElementById("player");
const volumeSlider = document.getElementById("volume");
const muteIconContainer = document.getElementById("mute-icon");
const nowPlayingContainer = document.getElementById("song-name");
const nowPlayingCover = document.getElementById("cover");

let songList = [];
let wavesurfer = WaveSurfer.create({
	container: "#waveform",
	waveColor: "#fdfefc",
	progressColor: "#ffbcf9ff",
	height: "40",
	width: "100%",
	cursorWidth: "2",
});

let playState = "play";
let muteState = "unmute";
// variable that will store the button’s current state (play or pause)
let state = "play";

function play() {
	const icon = playIconContainer.querySelector("img");
	state = "pause";
	icon.setAttribute("src", "./img/pause.svg");
	wavesurfer.play();
}

function pause() {
	const icon = playIconContainer.querySelector("img");
	state = "play";
	icon.setAttribute("src", "./img/play.svg");
	wavesurfer.pause();
}

// adds an event listener to the button so that when it is clicked, the the player toggles between play and pause
playIconContainer.addEventListener("click", () => {
	if (state === "play") {
		play();
	} else {
		pause();
	}
});

/** Implementation of the functionality of the audio player */
const durationContainer = document.getElementById("duration");
const currentTimeContainer = document.getElementById("current-time");

const calculateTime = (secs) => {
	const minutes = Math.floor(secs / 60);
	const seconds = Math.floor(secs % 60);
	const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
	return `${minutes}:${returnedSeconds}`;
};

wavesurfer.on("timeupdate", () => {
	currentTimeContainer.textContent = calculateTime(wavesurfer.getCurrentTime());
});

wavesurfer.on("interaction", () => {
	play();
});

volumeSlider.addEventListener("input", (e) => {
	const value = e.target.value;
	wavesurfer.setVolume(value / 100);
});

document.addEventListener("DOMContentLoaded", () => {
	const volume = document.getElementById("volume");

	// Set the volume slider position based on its value
	if (volume) {
		volume.value = volume.getAttribute("value");
	}
});

// Get all the individual songs from the JSON file
function initPlayer() {
	songs.forEach((item) => {
		if (item.album) {
			item.songs.forEach((song) => {
				song.albumName = item.title;
				songList.push(song);
			});
		} else {
			item.albumName = item.title;
			songList.push(item);
		}
	});
	playSong(songList[0], false);
}

wavesurfer.on("finish", () => {
	playNextSong();
});

function playNextSong() {
	const currentSongIndex = songList.findIndex(
		(song) =>
			sanitizeFilename(song.title) ===
			wavesurfer.getMediaElement().src.split("/").pop().split(".")[0]
	);
	const nextSongIndex = (currentSongIndex + 1) % songList.length;
	playSong(songList[nextSongIndex]);
	enableAutoplay();
}

function playPreviousSong() {
	const currentSongIndex = songList.findIndex(
		(song) =>
			sanitizeFilename(song.title) ===
			wavesurfer.getMediaElement().src.split("/").pop().split(".")[0]
	);
	const previousSongIndex =
		(currentSongIndex - 1 + songList.length) % songList.length;
	playSong(songList[previousSongIndex]);
	enableAutoplay();
}

function playSong(song, autoplay = true) {
	wavesurfer.load(`./songs/${sanitizeFilename(song.title)}.opus`);
	updateNowPlaying(song);
	wavesurfer.seekTo(0);
	if (autoplay) play();
}

function playSongFromName(songname) {
	const songIndex = songList.findIndex(
		(song) => sanitizeFilename(song.title) === songname
	);
	playSong(songList[songIndex]);
	enableAutoplay();
}

function enableAutoplay() {
	wavesurfer.on("ready", () => {
		play();
		durationContainer.textContent = calculateTime(wavesurfer.getDuration());
	});
}

function updateNowPlaying(song) {
	nowPlayingContainer.textContent = song.title;
	nowPlayingCover.src = `./img/covers/${sanitizeFilename(song.albumName)}.jpg`;
}
