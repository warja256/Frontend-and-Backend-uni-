// script13_1.js
document.getElementById('toggleSemesterButton').addEventListener('click', function() {
    const secondSemesterPractices = [
        "Базовое бэкенд-приложение",
        "HTTP-запросы",
        "JSON и работа с ним",
        "HTTP-ответы",
        "Проектирование API",
        "Роутинг и его настройка",
        "NoSQL базы данных",
        "Обеспечение авторизации и доступа пользователей",
        "Работа сторонних сервисов уведомления и авторизации",
        "Основы ReactJS",
        "Работа с компонентами динамической DOM",
        "Использование хуков в React",
        "Основы микросервисной архитектуры",
        "Разработка классических модулей веб-приложений",
        "Разработка классических модулей веб-приложений"
    ];

    const practicesTableBody = document.getElementById('practicesTableBody');

    practicesTableBody.innerHTML = '';

    secondSemesterPractices.forEach((topic, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${topic}</td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
        `;
        practicesTableBody.appendChild(row);
    });

    document.getElementById('semesterTitle').textContent = 'Второй семестр';
});

document.getElementById('showLecturesButton').addEventListener('click', function() {
    const lecturesContainer = document.getElementById('lecturesContainer');
    if (lecturesContainer.classList.contains('hidden')) {
        lecturesContainer.classList.remove('hidden');
        lecturesContainer.classList.add('visible');
    } else {
        lecturesContainer.classList.remove('visible');
        lecturesContainer.classList.add('hidden');
    }
});
