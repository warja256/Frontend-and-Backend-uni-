document.addEventListener("DOMContentLoaded", function() {
    // Получаем элементы модального окна и кнопок
    const modal = document.getElementById("modal");
    const btns = document.querySelectorAll('.btn');
    const span = document.getElementsByClassName("close")[0];
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
    const serviceTypeInput = document.getElementById("serviceType");

    // Открываем модальное окно при нажатии на кнопку
    btns.forEach(btn => {
        btn.onclick = function() {
            const serviceType = btn.getAttribute('data-service');
            serviceTypeInput.value = serviceType;
            modal.style.display = "flex"; // Используем flex для центрирования
            console.log(serviceType); // Выводим тип услуги в консоль
        }
    });

    // Закрываем модальное окно при нажатии на "X"
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Закрываем модальное окно при клике вне его области
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Обработчик отправки формы
    form.onsubmit = function(event) {
        event.preventDefault(); // Предотвращаем отправку формы
        successMessage.style.display = "block"; // Показываем сообщение об успешной отправке
        form.reset(); // Очищаем форму
    }
});

