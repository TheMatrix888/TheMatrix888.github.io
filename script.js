function checkPassword() {
    const password = document.getElementById("password").value.trim().toLowerCase();
    const validPasswords = ["поля", "полина", "полечка", "апполинария"];
    const passwordContainer = document.getElementById("password-container");
    const letterContainer = document.querySelector(".letter-container");
    const paper = document.querySelector(".paper");
    const content = document.getElementById("content");

    if (validPasswords.includes(password) || true) { // TODO remove true - for testing purposes
        letterContainer.classList.add("open");
        setTimeout(() => {
            paper.style.zIndex = 0;
            paper.classList.add("flyOut");
        }, 1500);
        setTimeout(() => {
            passwordContainer.classList.add("hidden");
            letterContainer.classList.add("hidden");
            document.body.classList.add("background-changed");
        }, 3000);
        setTimeout(() => {
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
        plushSound.play().catch(() => {});
        plush.classList.add("squish");
    });

    plush.addEventListener('animationend', () => {
        plush.classList.remove("squish");
    });
});


function ValentineYes() {
    const yes_content = document.getElementById('yes-content');
    yes_content.classList.remove('hidden');
    yes_content.classList.add('revealed');
}