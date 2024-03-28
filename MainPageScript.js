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
                    // Действия для урока 2
                    console.log('Нажата кнопка для урока 2');
                    break;
                case 3:
                    // Действия для урока 3
                    console.log('Нажата кнопка для урока 3');
                    break;
                case 4:
                    // Действия для урока 4
                    console.log('Нажата кнопка для урока 4');
                    break;
                case 5:
                    // Действия для урока 5
                    console.log('Нажата кнопка для урока 5');
                    break;
                case 6:
                    // Действия для урока 6
                    console.log('Нажата кнопка для урока 6');
                    break;
                case 7:
                    // Действия для урока 7
                    console.log('Нажата кнопка для урока 7');
                    break;
                default:
                    // Действия по умолчанию, если ID неизвестен
                    console.log('Неизвестный урок');
                    break;
            }
        });
    });
});
