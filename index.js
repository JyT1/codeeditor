function openTab(element, tab) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    element.className += " active";
}
function sendChar(element) {
    let character = element.innerHTML;
    if (character == "&gt;") {
        character = ">"
    }
    if (character == "&lt;") {
        character = "<"
    }
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i in tablinks) {
        if (tablinks[i].className.toString().includes(" active")) {
            const textarea = document.getElementById(tablinks[i].innerHTML.toLowerCase())
            textarea.value = textarea.value + character;
            break;
        }
    }
}
function compile() {
    const html = document.getElementById("html");
    const css = document.getElementById("css");
    const js = document.getElementById("js");
    const result = document.getElementById("result").contentWindow.document;
    document.body.onkeyup = function () {
        result.open();
        result.writeln(`${html.value}<style>${css.value}</style></script>${js.value}</script>`);
        result.close();
    };
}
document.getElementById("defaulttab").click()
compile();