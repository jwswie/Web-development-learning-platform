document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.text-input');
    const lessonContainer = document.querySelector('.LessonContainer');
    const allLessons = lessonContainer.querySelectorAll('.main-item');
    var startButtons = document.querySelectorAll('.StartButton');
    var coursesCount = document.querySelector('.courses-count');

    function updateCoursesCount(count) {
        var lastDigit = count % 10;
        var lastTwoDigits = count % 100;
    
        if (lastDigit === 1 && lastTwoDigits !== 11) {
            coursesCount.textContent = "Всего " + count + " урок";
        } else if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 10 || lastTwoDigits > 20)) {
            coursesCount.textContent = "Всего " + count + " урока";
        } else {
            coursesCount.textContent = "Всего " + count + " уроков";
        }
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
                case 8:
                    window.location.href = "Lesson8.html";
                    break;
                case 9:
                    window.location.href = "Lesson9.html";
                    break;
                case 10: 
                    window.location.href = "Lesson10.html";
                    break;
                case 11:
                    window.location.href = "Lesson11.html";
                    break;
                case 12:
                    window.location.href = "Lesson12.html";
                    break;
                case 13:
                    window.location.href = "Lesson13.html";
                    break;
                case 14:
                    window.location.href = "Lesson14.html";
                    break;
                case 15:
                    window.location.href = "Lesson15.html";
                    break;
                case 16:
                    window.location.href = "Lesson16.html";
                    break;
                case 17:
                    window.location.href = "Lesson17.html";
                    break;
                case 18: 
                    window.location.href = "Lesson18.html";
                    break;
                case 19:
                    //window.location.href = "Lesson4.html";
                    break;
                case 20:
                    //window.location.href = "Lesson5.html";
                    break;
                case 21:
                    //window.location.href = "Lesson6.html";
                    break;
                case 22:
                    //window.location.href = "Lesson7.html";
                    break;
                default:
                    alert('Неизвестный урок');
                    break;
            }
        });
    });
});