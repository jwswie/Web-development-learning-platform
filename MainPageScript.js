/*document.querySelectorAll('.editor-pane textarea').forEach(textarea => {
    textarea.addEventListener('input', render);
});

function render() {
    var htmlCode = document.getElementById('html-editor').value;
    var cssCode = document.getElementById('css-editor').value;
    var jsCode = document.getElementById('js-editor').value;

    var output = document.getElementById('output');
    output.innerHTML = htmlCode;

    var style = document.createElement('style');
    style.innerHTML = cssCode;

    output.appendChild(style);
    var script = document.createElement('script');
    script.innerHTML = jsCode;
    output.appendChild(script);
}*/

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.text-input');
    const lessonContainer = document.querySelector('.LessonContainer');
    const allLessons = lessonContainer.querySelectorAll('.main-item');

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
});
