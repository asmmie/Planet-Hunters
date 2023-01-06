const soundBtn = document.querySelector(".sound-btn");
const audio = document.querySelector(".bgm");
const soundText = document.querySelector(".sound-text");
let toggle;
soundBtn.onclick = () => {
    toggle = !toggle;
    if (toggle) {
        audio.play();
        soundText.innerText = "SOUND ON";
        soundBtn.style.color = "#fff";
    } else {
        audio.pause();
        soundText.innerText = "SOUND OFF";
        soundBtn.style.color = "#BFBFBF";
    }
}

