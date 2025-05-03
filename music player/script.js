const progress = document.querySelector('.range');
const song = document.querySelector('.song');
const cntrlSong = document.getElementById('cntlIcon');

progress.max = song.duration;
progress.value = song.currentTime;

// 🔥 Toggle play/pause
function playPause() {
    if (cntrlSong.classList.contains('fa-pause')) {
        song.pause();
        cntrlSong.classList.remove('fa-pause');
        cntrlSong.classList.add('fa-play');
    } else {
        song.play();
        cntrlSong.classList.remove('fa-play');
        cntrlSong.classList.add('fa-pause');
    }
}

// 🔥 Update progress bar every 500ms while playing
setInterval(() => {
    if (!song.paused) {
        progress.value = song.currentTime;
    }
}, 500);

// 🔥 Allow user to change song position using slider
progress.onchange = function () {
    song.currentTime = progress.value;
    song.play();
    cntrlSong.classList.remove('fa-play');
    cntrlSong.classList.add('fa-pause');
};
