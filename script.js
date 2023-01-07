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

const loadingScreen = document.querySelector(".loading-screen");
window.addEventListener("load", () => {
    document.body.style.position = "fixed";
    document.body.style.top = "0";
  setTimeout(() => {
    loadingScreen.classList.add("fadeout");
    document.body.style.position = "";
  }, 1600);
  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 5000);
});
