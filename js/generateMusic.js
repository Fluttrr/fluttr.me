// Helper function to sanitize filenames
function sanitizeFilename(title) {
    return title.replace(/[^a-zA-Z0-9]/g, '_'); // Replace non-alphanumeric characters with underscores
}

function getAlbumHTML(item) {
    return `
        <img class="cover" src="./img/covers/${sanitizeFilename(item.title)}.jpg" alt="Album Cover">
        <div class="album-content">
            <h1>${item.title}</h1>
            <p class="info">${item.year} &bull; ${item.description}</p>
            <ol>
                ${item.songs.map(song => `
                    <li>
                        <p class="album-song-title">${song.title}<span class="duration">${song.length}</span></p>
                        <span class="info">${song.description}</span>
                        <button class="play-album" onclick="playSong('${sanitizeFilename(song.title)}');"><img class="play-button" src="./img/play.svg"></button>
                    </li>
                `).join('')}
            </ol>
        </div>
    `;
}

function getSingleHTML(item) {
    return `
        <img class="cover" src="./img/covers/${sanitizeFilename(item.title)}.jpg" alt="Album Cover">
        <div class="album-content">
            <h1>${item.title}<span class="duration">${item.length}</span></h1>
            <p class="info">${item.year} &bull; ${item.description}</p>
            <button class="play-single" onclick="playSong('${sanitizeFilename(item.title)}');"><img class="play-button" src="./img/play.svg"></button>
        </div>
    `;
}

function generateMusic() {
    const containers = document.getElementsByClassName('music-container');
    const container = containers[containers.length - 1];
    songs.forEach(item => {
        if (item.album) {
            // Generate album HTML
            const albumDiv = document.createElement('div');
            albumDiv.classList.add('album');

            const albumContent = getAlbumHTML(item);
            albumDiv.innerHTML = albumContent;
            container.appendChild(albumDiv);
        } else {
            // Generate single song HTML
            const singleDiv = document.createElement('div');
            singleDiv.classList.add('album');

            const singleContent = getSingleHTML(item);
            singleDiv.innerHTML = singleContent;
            container.appendChild(singleDiv);
        }
    });
    document.getElementById('player').setAttribute('style', 'visibility: visible;');
    initPlayer();
}