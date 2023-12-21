let speech = new SpeechSynthesisUtterance();
let btn = document.querySelector('#btn');
let voiceSelect = document.querySelector('#voiceSelect');

let voices = [];

window.speechSynthesis.onvoiceschanged = function() {
    voices = window.speechSynthesis.getVoices();
    populateVoiceList();
};

function populateVoiceList() {
    voiceSelect.innerHTML = '';
    voices.forEach((voice, i) => {
        let option = document.createElement('option');
        option.textContent = voice.name;
        option.setAttribute('data-voice-id', i);
        voiceSelect.appendChild(option);
    });
}

btn.addEventListener('click', function() {
    let selectedVoiceIndex = voiceSelect.selectedIndex;
    speech.text = document.querySelector("textarea").value;

    if (selectedVoiceIndex >= 0) {
        speech.voice = voices[selectedVoiceIndex];
    } else {
        // If no voice is selected, use the default voice
        speech.voice = voices[0];
    }

    window.speechSynthesis.speak(speech);
});
