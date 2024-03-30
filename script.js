// document.querySelectorAll('.editor-pane textarea').forEach(textarea => {
//     textarea.addEventListener('input', render);
// });
const runButton = document.getElementById('RunButton');
const FromWindow = document.getElementById('FromWindow');

let codeSource;
class CodeSource{
    JsCode;
    HtmlCode;
    CssCode;
    constructor (){
        this.JsCode = "";
        this.HtmlCode = "";
        this.CssCode = "";
    }
}

function render(e) {
    var htmlCode = document.getElementById('html-editor').value;
    var cssCode = codeSource.CssCode;
    var jsCode = codeSource.JsCode;//document.getElementById('js-editor').value;

    var output = document.getElementById('output');
    output.innerHTML = htmlCode;
    

    var style = document.createElement('style');
    style.innerHTML = cssCode;

    output.appendChild(style);
    var script = document.createElement('script');
    script.innerHTML = jsCode;
    output.appendChild(script);
}

function startCodeEnviroment(){
    codeSource = new CodeSource();
}

function Save() {
    codeSource.cssCode = document.getElementById('css-editor').value;
}

startCodeEnviroment();
FromWindow.addEventListener('click', Save);
runButton.addEventListener("click", render);