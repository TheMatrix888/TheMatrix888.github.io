function checkPassword() {
    const password = document.getElementById("password").value.trim().toLowerCase();
    const validPasswords = ["поля", "полина", "полечка", "апполинария"];
    const passwordContainer = document.getElementById("password-container");
    const letterContainer = document.querySelector(".letter-container");
    const paper = document.querySelector(".paper");
    const content = document.getElementById("content");

    if (validPasswords.includes(password) || true) { // true - for testing purposes
        letterContainer.classList.add("open");
        setTimeout(() => {
            paper.style.zIndex = -1;
            paper.classList.add("flyOut");
        }, 1500);
        setTimeout(() => {
            passwordContainer.classList.add("hidden");
            letterContainer.classList.add("hidden");
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
