if (window.location.href != "https://sis.rpi.edu/") {
    document.getElementsByClassName("pagebodydiv")[0].style.visibility = "visible";

    // Redo the copyright statement in a custom footer
    var footer = document.createElement("footer");
    var footerDiv = document.createElement("div");
    footerDiv.innerHTML = "© 2018 Ellucian Company L.P. and its affiliates.<br>SIS redesign by Justin Chen.";
    footerDiv.style.textAlign = "center";
    if (body.offsetHeight <= window.innerHeight) {
        footer.style.position = "absolute";
    }
    footer.appendChild(footerDiv);
    body.appendChild(footer);
}
