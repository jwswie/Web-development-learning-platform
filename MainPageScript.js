document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.text-input');
    const lessonContainer = document.querySelector('.LessonContainer');
    const allLessons = lessonContainer.querySelectorAll('.main-item');
    var startButtons = document.querySelectorAll('.StartButton');
    var coursesCount = document.querySelector('.courses-count');

    function updateCoursesCount(count) {
        coursesCount.textContent = "Всего " + count + " уроков";
    }

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim().toLowerCase();
        var foundLessons = [];

        allLessons.forEach(function(lesson) {
            const title = lesson.querySelector('.LessonHeader').textContent.toLowerCase();
            const description = lesson.querySelector('.Description').textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                foundLessons.push(lesson);
                lesson.style.display = 'block';
                updateCoursesCount(foundLessons.length);
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
                    window.location.href = "Lesson6.html";
                    break;
                case 7:
                    window.location.href = "Lesson7.html";
                    break;
                default:
                    alert('Неизвестный урок');
                    break;
            }
        });
    });
});