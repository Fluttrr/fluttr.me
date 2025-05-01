// variable for the button that will contain both icons
const playIconContainer = document.getElementById('main-control');
const audioPlayerContainer = document.getElementById('player');
const seekSlider = document.getElementById('seekbar');
const volumeSlider = document.getElementById('volume');
const muteIconContainer = document.getElementById('mute-icon');
const nowPlayingContainer = document.getElementById('song-name');
const nowPlayingCover = document.getElementById('cover');

let playState = 'play';
let muteState = 'unmute';
// variable that will store the button’s current state (play or pause)
let state = 'play';

function play() {
    const icon = playIconContainer.querySelector('img');
    state = 'pause';
    icon.setAttribute('src', './img/pause.svg');
    audio.play();
}

function pause() {
    const icon = playIconContainer.querySelector('img');
    state = 'play';
    icon.setAttribute('src', './img/play.svg');
    audio.pause();
}

// adds an event listener to the button so that when it is clicked, the the player toggles between play and pause
playIconContainer.addEventListener('click', () => {
    if (state === 'play') {
        play();
    } else {
        pause();
    }
});

const showRangeProgress = (rangeInput) => {
    if (rangeInput === seekSlider) audioPlayerContainer.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
    else audioPlayerContainer.style.setProperty('--volume-before-width', rangeInput.value / rangeInput.max * 100 + '%');
}

seekSlider.addEventListener('input', (e) => {
    showRangeProgress(e.target);
});
volumeSlider.addEventListener('input', (e) => {
    showRangeProgress(e.target);
});

/** Implementation of the functionality of the audio player */

const audio = document.querySelector('audio');
const durationContainer = document.getElementById('duration');

const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}

const displayDuration = () => {
    durationContainer.textContent = calculateTime(audio.duration);
}

const setSliderMax = () => {
    seekSlider.max = Math.floor(audio.duration);
}

const displayBufferedAmount = () => {
    const bufferedAmount = Math.floor(audio.buffered.end(audio.buffered.length - 1));
    audioPlayerContainer.style.setProperty('--buffered-width', `${(bufferedAmount / seekSlider.max) * 100}%`);
}

if (audio.readyState > 0) {
    displayDuration();
    setSliderMax();
    displayBufferedAmount();
} else {
    audio.addEventListener('loadedmetadata', () => {
        displayDuration();
        setSliderMax();
        displayBufferedAmount();
    });
}

audio.addEventListener('progress', displayBufferedAmount);

const currentTimeContainer = document.getElementById('current-time');

seekSlider.addEventListener('input', () => {
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
});

seekSlider.addEventListener('change', () => {
    audio.currentTime = seekSlider.value;
});

audio.addEventListener('timeupdate', () => {
    seekSlider.value = Math.floor(audio.currentTime);
    currentTimeContainer.textContent = calculateTime(seekSlider.value);

});

volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    audio.volume = value / 100;
});

document.addEventListener("DOMContentLoaded", () => {
    const seekbar = document.getElementById("seekbar");
    const volume = document.getElementById("volume");

    // Set the seekbar position based on its value
    if (seekbar) {
        seekbar.value = seekbar.getAttribute("value");
    }

    // Set the volume slider position based on its value
    if (volume) {
        volume.value = volume.getAttribute("value");
    }
});

let songList = [];

// Get all the songs from the JSON file
fetch('./js/songs.json')
    .then(response => response.json())
    .then(data => {
        const catalogue = data.catalogue;

        catalogue.forEach(item => {
            if (item.album) {
                item.songs.forEach(song => {
                    song.albumName = item.title;
                    songList.push(song);
                });
            } else {
                item.albumName = item.title;
                songList.push(item);
            }
        });

        audio.src = `./songs/${sanitizeFilename(songList[0].title)}.opus`;
        updateNowPlaying(songList[0]);
    })
    .catch(error => console.error('Error loading JSON:', error));

audio.onended = () => {
    playNextSong();
}

function playNextSong() {
    const currentSongIndex = songList.findIndex(song => sanitizeFilename(song.title) === audio.src.split('/').pop().split('.')[0]);
    const nextSongIndex = (currentSongIndex + 1) % songList.length;
    audio.src = `./songs/${sanitizeFilename(songList[nextSongIndex].title)}.opus`;
    updateNowPlaying(songList[nextSongIndex]);
    audio.play();
}

function playPreviousSong() {
    const currentSongIndex = songList.findIndex(song => sanitizeFilename(song.title) === audio.src.split('/').pop().split('.')[0]);
    const previousSongIndex = (currentSongIndex - 1 + songList.length) % songList.length;
    audio.src = `./songs/${sanitizeFilename(songList[previousSongIndex].title)}.opus`;
    updateNowPlaying(songList[previousSongIndex]);
    audio.play();
}

function playSong(song) {
    const songIndex = songList.findIndex(item => sanitizeFilename(item.title) === song);
    const audio = document.querySelector('audio');
    audio.src = `./songs/${song}.opus`;
    updateNowPlaying(songList[songIndex]);
    play();
}

function updateNowPlaying(song) {
    nowPlayingContainer.textContent = song.title;
    nowPlayingCover.src = `./img/covers/${sanitizeFilename(song.albumName)}.jpg`;
}
