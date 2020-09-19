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
    const character = element.innerHTML
    
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
compile();