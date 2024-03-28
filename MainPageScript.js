document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.text-input');
    const lessonContainer = document.querySelector('.LessonContainer');
    const allLessons = lessonContainer.querySelectorAll('.main-item');
    var startButtons = document.querySelectorAll('.StartButton');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim().toLowerCase();

        allLessons.forEach(function(lesson) {
            const title = lesson.querySelector('.LessonHeader').textContent.toLowerCase();
            const description = lesson.querySelector('.Description').textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                lesson.style.display = 'block';
            } else {
                lesson.style.display = 'none';
            }
        });
    });

    startButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var lessonId = parseInt(button.id);

            switch (lessonId) {
                case 1:
                    window.location.href = "Lesson1.html";
                    break;
                case 2:
                    window.location.href = "Lesson2.html";
                    break;
                case 3: 
                    window.location.href = "Lesson3.html";
                    break;
                case 4:
                    window.location.href = "Lesson4.html";
                    break;
                case 5:
                    window.location.href = "Lesson5.html";
                    break;
                case 6:
                    console.log('Нажата кнопка для урока 6');
                    break;
                case 7:
                    console.log('Нажата кнопка для урока 7');
                    break;
                default:
                    console.log('Неизвестный урок');
                    break;
            }
        });
    });
});
