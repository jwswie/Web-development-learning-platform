const runButton = document.getElementById('RunButton');
const JsBtn = document.getElementById('JsButton');
const htmlBtn = document.getElementById('htmlButton');
const cssBtn = document.getElementById('cssButton');
const JsEditor = document.getElementById('js-editor');
const htmlEditor = document.getElementById('html-editor');
const cssEditor = document.getElementById('css-editor');

function render(e) {
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

function clickJsButton(e){
    htmlEditor.style = 'visibility: hidden;';
    cssEditor.style = 'visibility: hidden;';
    JsEditor.style = 'visibility: visible;';
    JsBtn.className = 'current-Button';
    htmlBtn.className = 'side-Button';
    cssBtn.className = 'side-Button';
}

function clickHtmlButton(e){
    htmlEditor.style = 'visibility: visible;';
    cssEditor.style = 'visibility: hidden;';
    JsEditor.style = 'visibility: hidden;';
    JsBtn.className = 'side-Button';
    htmlBtn.className = 'current-Button';
    cssBtn.className = 'side-Button';
}

function clickCssButton(e){
    htmlEditor.style = 'visibility: hidden;';
    cssEditor.style = 'visibility: visible;';
    JsEditor.style = 'visibility: hidden;';
    JsBtn.className = 'side-Button';
    htmlBtn.className = 'side-Button';
    cssBtn.className = 'current-Button';
}

clickJsButton();
JsBtn.addEventListener('click', clickJsButton);
htmlBtn.addEventListener('click', clickHtmlButton);
cssBtn.addEventListener('click', clickCssButton);
runButton.addEventListener('click', render);