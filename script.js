document.querySelectorAll('.editor-pane textarea').forEach(textarea => {
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
}