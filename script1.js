// Часть 1: Работа с DOM

const welcome = document.getElementById("welcome");
welcome.textContent = "Добро пожаловать на наш сайт";

const head = document.getElementsByClassName("accordion-button");
for (let i = 0; i < head.length; i++) {
    head[i].style.color = "red";
}

const p = document.getElementById("first-paragraph");
p.textContent = "Это новый текст параграфа."
