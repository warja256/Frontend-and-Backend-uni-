function showMessage(text) {
    console.log(text);
}


function changeBackgroundColor(color) {
    const bg = document.getElementsByClassName("container-fluid");
    bg[1].style.backgroundColor = color;
    console.log("Цвет поменялся")
}



function toggleVisibility(selector) {
    const temp = document.querySelector(selector);
    temp.style.visibility = "hidden";
    console.log("Видимость изменена")
}



function urlUpdate() {
    const url = window.location.href;
    
    const urlParams = new URLSearchParams(new URL(url).search);
    const utmTerm = urlParams.get("utm_term");
    const h1Element = document.querySelector("h1");
    if (utmTerm && h1Element) {
        h1Element.textContent = utmTerm;
    }
    console.log("URL функция выполнена");
}



function logCurrentTime() {
    const currentTime = new Date(); 
    console.log(currentTime.toLocaleTimeString());
}

function resetBackgroundColor(color) {
    const bg = document.getElementsByClassName("container-fluid");
    bg[1].style.backgroundColor = color;
    console.log("Цвет поменялся на исходный");
}

showMessage("Скрипт загружен!");
logCurrentTime();
changeBackgroundColor("white");
toggleVisibility(".img");
urlUpdate();
resetBackgroundColor("#C0E0FF");