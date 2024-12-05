const form = document.getElementById("contactForm");

function submitForm(event) {
    event.preventDefault();
    console.log("Форма отправляется...");

    const formData = {
        name: form.elements["name"].value.trim(),
        email: form.elements["email"].value.trim(),
        phone: form.elements["phone"].value.trim(),
        country: form.elements["country"].value.trim(),
        date: form.elements["date"].value.trim(),
        comments: form.elements["comments"].value.trim(),
    };


    if (!formData.name || !formData.email || !formData.comments) {
        alert("Необходимо заполнить пустые поля!");
        return; 
    }
    const phone = formData.phone.replace(/\+/g, '').trim();

    if (!/^\d+$/.test(phone)) {
        alert("Номер телефона содержит недопустимые символы!");
        return; 
    }
    formData.phone = phone;


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        alert("Некорректный email!");
        return; 
    }


    function printData() {
        console.log(`Имя: ${formData.name}`);
        console.log(`Email: ${formData.email}`);
        console.log(`Телефон: +${formData.phone}`);
        console.log(`Страна: ${formData.country}`);
        console.log(`Дата: ${formData.date}`);
        console.log(`Комментарии: ${formData.comments}`);
    }


    printData();
}

form.addEventListener("submit", submitForm);
