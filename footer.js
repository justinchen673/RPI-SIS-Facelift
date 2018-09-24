// Get rid of pointless footer links
var footerLinks = document.getElementsByClassName("footerlinksdiv");
var numLinks = footerLinks.length;
for (var i = 0; i < numLinks; i++) {
    footerLinks[0].remove();
}

// Get rid of release statement
document.getElementsByClassName("releasetext")[0].remove();

// Get rid of original copyright statement
document.getElementsByClassName("banner_copyright")[0].remove();

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
