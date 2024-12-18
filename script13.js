document.addEventListener('DOMContentLoaded', function() {
    var welcomeHeader = document.getElementById('welcome');
    if (welcomeHeader) {
        welcomeHeader.addEventListener('click', function() {
            alert('Вы кликнули на заголовок - так держать!');
        });
    }

    var carouselImages = document.querySelectorAll('#slider1 .carousel-item img');
    carouselImages.forEach(function(img) {
        img.addEventListener('mouseover', function() {
            img.style.transform = 'scale(1.1)'; 
            img.style.transition = 'transform 0.3s'; 
        });

        img.addEventListener('mouseout', function() {
            img.style.transform = 'scale(1)'; 
            img.style.transition = 'transform 0.3s'; 
        });

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
});
