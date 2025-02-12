function checkPassword() {
    const password = document.getElementById("password").value.trim().toLowerCase();
    const validPasswords = ["поля", "полина", "полечка", "апполинария"];
    const passwordContainer = document.getElementById("password-container");
    const letterContainer = document.querySelector(".letter-container");
    const paper = document.querySelector(".paper");
    const content = document.getElementById("content");
    const bgaudio = document.getElementById("bg-music");
    bgaudio.volume = 0.05;
    paper_audio = new Audio('mp3/paper.mp3');
    paper_audio.volume = 0.8;

    if (validPasswords.includes(password)) {
        letterContainer.classList.add("open");
        setTimeout(() => {
            paper.style.zIndex = 0;
            paper.classList.add("flyOut");
            paper_audio.play().catch(() => { });
        }, 1500);
        setTimeout(() => {
            passwordContainer.classList.add("hidden");
            letterContainer.classList.add("hidden");
            document.body.classList.add("background-changed");
        }, 3000);
        setTimeout(() => {
            bgaudio.play().catch(() => { });
            passwordContainer.style.display = "none";
            letterContainer.style.display = "none";
            content.classList.remove("hidden");
            content.classList.add("revealed");
        }, 4000);
    } else {
        alert("Неправильна!😭💔");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const plush = document.querySelector('.plush');
    if (!plush) return;

    const plushSound = new Audio('mp3/plush.mp3');
    plushSound.volume = 0.5;

    plush.addEventListener('click', () => {
        plushSound.play().catch(() => { });
        plush.classList.add("squish");
    });

    plush.addEventListener('animationend', () => {
        plush.classList.remove("squish");
    });
});


function ValentineYes() {
    const yes_content = document.getElementById('yes-content');
    const party_horn = new Audio('mp3/party_horn.mp3');
    party_horn.volume = 0.6;
    party_horn.play().catch(() => { });
    yes_content.classList.remove('hidden');
    yes_content.classList.add('revealed');
}

function ValentineNo() {
    const valentine_no = document.getElementById('valentine-no');
    const WTFSound = new Audio('mp3/WTF.mp3');
    WTFSound.volume = 0.5;
    valentine_no.classList.add("move-left");
    WTFSound.play().catch(() => { });
    valentine_no.addEventListener('animationend', () => {
        valentine_no.classList.remove("move-left");
    });
}