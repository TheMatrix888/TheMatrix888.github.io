function checkPassword() {
    const password = document.getElementById("password").value.trim().toLowerCase();
    const validPasswords = ["поля", "полина", "полечка", "апполинария", "апполинария"];

    if (validPasswords.includes(password)) {
        document.getElementById("password-container").style.display = "none";
        document.body.classList.add("revealed");
        const content = document.getElementById("content");
        content.classList.remove("hidden");
        content.style.display = "block"; // Добавлено на случай, если `hidden` не удаляет `display: none`
    } else {
        alert("Неправильна!😭💔");
    }
}


function ValentineYes() {

}

function ValentineNo() {

}