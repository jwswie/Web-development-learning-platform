document.addEventListener("DOMContentLoaded", function() {
    const lessonContainer = document.querySelector('.LessonContainer');
    var startButtons = document.querySelectorAll('.StartTaskButton');


    startButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var lessonId = parseInt(button.id);

            switch (lessonId) {
                case 1:
                    window.location.href = "htmlcode.html";
                    break;
                case 2:
                    window.location.href = "htmlcode.html";
                    break;
                case 3: 
                    window.location.href = "htmlcode.html";
                    break;
                case 4:
                    window.location.href = "htmlcode.html";
                    break;
                case 5:
                    window.location.href = "htmlcode.html";
                    break;
                case 6:
                    window.location.href = "htmlcode.html";
                    break;
                case 7:
                    window.location.href = "htmlcode.html";
                    break;
                case 8:
                    window.location.href = "csscode.html";
                    break;
                case 9:
                    window.location.href = "csscode.html";
                    break;
                case 10: 
                    window.location.href = "csscode.html";
                    break;
                case 11:
                    window.location.href = "csscode.html";
                    break;
                case 12:
                    window.location.href = "csscode.html";
                    break;
                case 13:
                    window.location.href = "csscode.html";
                    break;
                case 14:
                    window.location.href = "csscode.html";
                    break;
                case 15:
                    window.location.href = "csscode.html";
                    break;
                case 16:
                    window.location.href = "jscode.html";
                    break;
                case 17:
                    window.location.href = "jscode.html";
                    break;
                case 18: 
                    window.location.href = "jscode.html";
                    break;
                case 19:
                    window.location.href = "jscode.html";
                    break;
                case 20:
                    window.location.href = "jscode.html";
                    break;
                case 21:
                    window.location.href = "jscode.html";
                    break;
                case 22:
                    window.location.href = "jscode.html";
                    break;
                default:
                    alert('Неизвестный урок');
                    break;
            }
        });
    });
});