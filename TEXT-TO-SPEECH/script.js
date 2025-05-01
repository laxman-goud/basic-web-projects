const textEl = document.getElementById('text');
const selectEl = document.getElementById('lang');
const playEl = document.querySelector('.play');

let speech = new SpeechSynthesisUtterance();
let voices = [];

function loadVoices() {
    voices = window.speechSynthesis.getVoices();
    if (!voices.length) return;
    selectEl.innerHTML = '';
    voices.forEach((voice, i) => {
        const option = new Option(`${voice.name} (${voice.lang})`, i);
        selectEl.appendChild(option);
    });
    speech.voice = voices[0];
}

window.speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

selectEl.addEventListener('change', () => {
    speech.voice = voices[+selectEl.value];
});

function playSpeech() {
    window.speechSynthesis.cancel();
    speech.text = textEl.value;
    window.speechSynthesis.speak(speech);
}

playEl.addEventListener('click', playSpeech);
