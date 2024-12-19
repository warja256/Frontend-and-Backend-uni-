document.addEventListener('DOMContentLoaded', function() {
    var welcomeHeader = document.getElementById('welcome');
    if (welcomeHeader) {
        welcomeHeader.addEventListener('click', function() {
            alert('Вы кликнули на заголовок - так держать!');
        });
    }

    var carouselImages = document.querySelectorAll('#slider1 .carousel-item img');
    carouselImages.forEach(function(img) {
        img.addEventListener('click', function() {
            const teacherImages = [
                'assets/png/teacher.png',
                'assets/png/teacher.png',
                'assets/png/teacher.png'
            ];

            const randomIndex = Math.floor(Math.random() * teacherImages.length);
            img.src = teacherImages[randomIndex];
        });

        img.addEventListener('dblclick', function() {
            alert('Не налегай, у меня не так много любимых преподавателей');
        });
    });

    var paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(function(paragraph) {
        paragraph.addEventListener('click', function() {
            paragraph.style.backgroundColor = paragraph.style.backgroundColor === '#E3FC87' ? '' : '#E3FC87';
        });
    });
});
