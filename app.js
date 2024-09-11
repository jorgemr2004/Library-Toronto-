let currentMusic = 0;

const music = document.querySelector('#audio');

const seekBar = document.querySelector('.seek-bar');
const artistName = document.querySelector('.artist-name');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');

let libro1;

const songs = [
    {
        artist: 'Estructuras de Datos y Algoritmos',
        path: 'audio/Audiolibro1.mp3'
    },
];

playBtn.addEventListener('click', () => {
    if (playBtn.classList.contains('pause')) {
        music.play();
    } else {
        music.pause();
    }
    playBtn.classList.toggle('pause');
});

const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    currentTime.innerHTML = '00:00';
    setTimeout(() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
}

setMusic(0);

music.addEventListener('timeupdate', () => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);
});

seekBar.addEventListener('input', () => {
    music.currentTime = seekBar.value;
});

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    if (min < 10) {
        min = `0${min}`;
    }
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return `${min}:${sec}`;
}

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.href.includes('Vista_Previa1.html')) {
        const libro1 = new Audio('audio/introAudioLibro1.mp3');
        libro1.addEventListener('canplaythrough', function() {
            libro1.play();
        });
        libro1.load();

        document.addEventListener('keydown', function(event) {
            const key = event.key.toLowerCase();
            if (key === 'f') {
                libro1.pause();
                togglePlayPause();
            }
            if (key === 'g') {
                redirectToDetalle1();
            }
        });
    }
});

function redirectToDetalle1() {
    window.location.href = 'Libro1.html';
}

function togglePlayPause() {
    if (libro1 && !libro1.paused) {
        libro1.pause(); 
        libro1.currentTime = 0; 
    } else if (music.paused) {
        music.play();
        playBtn.classList.add('pause');
    } else {
        music.pause();
        playBtn.classList.remove('pause');
    }
}