const songs = [
    { id: 1, title: "architect-tech-corporate-advertising-music-247324.mp3", image: "cover1.jpg", src: "architect-tech-corporate-advertising-music-247324.mp3" },
    { id: 2, title: "calm-night-piano-music-249235.mp3", image: "cover1.jpg", src: "calm-night-piano-music-249235.mp3" },
    { id: 3, title: "corporate-life-upbeat-commercial-music-250619.mp3", image: "cover1.jpg", src: "corporate-life-upbeat-commercial-music-250619.mp3" },
    { id: 4, title: "creative-technology-showreel-241274.mp3", image: "cover1.jpg", src: "creative-technology-showreel-241274.mp3" },
    { id: 5, title: "health-care-positive-corporate-advertising-music-250618.mp3", image: "cover1.jpg", src: "health-care-positive-corporate-advertising-music-250618.mp3" },
    { id: 6, title: "inspiring-cinematic-ambient-116199.mp3", image: "cover1.jpg", src: "inspiring-cinematic-ambient-116199.mp3" },
    { id: 7, title: "mango-sundive-249556.mp3mango-sundive-249556.mp3", image: "cover1.jpg", src: "mango-sundive-249556.mp3mango-sundive-249556.mp3" },
    { id: 8, title: "office-tour-corporate-background-music-250621.mp3", image: "cover1.jpg", src: "office-tour-corporate-background-music-250621.mp3" },
    { id: 9, title: "relaxing-piano-music-248868.mp3", image: "cover1.jpg", src: "relaxing-piano-music-248868.mp3" },   

];

document.addEventListener('DOMContentLoaded', () => {
    const songList = document.getElementById('song-list');
    songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.classList.add('song');
        songDiv.innerHTML = `
            <img src="${song.image}" alt="${song.title}">
            <h2>${song.title}</h2>
            <button onclick="playSong(${song.id})">Play</button>
        `;
        songList.appendChild(songDiv);
    });
});

function playSong(songId) {
    const song = songs.find(s => s.id === songId);
    const audioPlayer = document.getElementById('audio-player');
    const currentSong = document.getElementById('current-song');
    
    audioPlayer.src = song.src;
    audioPlayer.play();
    
    currentSong.innerText = `Playing: ${song.title}`;
}

function searchSongs() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const songList = document.getElementById('song-list');
    songList.innerHTML = '';
    songs.filter(song => song.title.toLowerCase().includes(searchTerm))
        .forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.classList.add('song');
            songDiv.innerHTML = `
                <img src="${song.image}" alt="${song.title}">
                <h2>${song.title}</h2>
                <button onclick="playSong(${song.id})">Play</button>
            `;
            songList.appendChild(songDiv);
        });
}
