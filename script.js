function checkPassword() {
    const password = document.getElementById("password").value.trim().toLowerCase();
    const validPasswords = ["поля", "полина", "полечка", "апполинария", "Апполинария"];

    if (validPasswords.includes(password)) {
        document.getElementById("password-container").style.display = "none";
        document.body.classList.add("revealed");
        document.getElementById("content").classList.remove("hidden");
    } else {
        alert("Неправильна!😭💔");
    }
}
