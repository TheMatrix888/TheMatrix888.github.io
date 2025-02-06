function checkPassword() {
    const password = document.getElementById("password").value.trim().toLowerCase();
    const validPasswords = ["поля", "полина", "полечка", "апполинария", "аполинария"];

    if (validPasswords.includes(password)) {
        document.getElementById("password-container").classList.add("hidden");
        const content = document.getElementById("content");
        content.classList.remove("hidden");
    } else {
        alert("Неправильна!😭💔");
    }
}


function ValentineYes() {

}

function ValentineNo() {

}