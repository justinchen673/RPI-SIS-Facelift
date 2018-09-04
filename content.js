// Unify the header across all the pages
var h1 = document.getElementsByTagName("h1");
h1[0].innerHTML = "Rensselaer's Student Information System";

// Fix the issue that causes multiple highlighted tabs
var tabon = document.getElementsByClassName("tabon");
var bgtabon = document.getElementsByClassName("bgtabon");
if (document.title == "Main Menu" || window.location.href == "https://sis.rpi.edu/rss/twbkwbis.P_GenMenu?name=amenu.P_AcctInfoMnu") {
    tabon[0].classList.add('taboff');
    tabon[0].classList.remove('tabon');
    bgtabon[0].classList.add('bgtaboff');
    bgtabon[0].classList.remove('bgtabon');
} else if (document.title == "Personal Information Menu" || document.title == "Student Menu") {
    tabon[1].classList.add('taboff');
    tabon[1].classList.remove('tabon');
    bgtabon[1].classList.add('bgtaboff');
    bgtabon[1].classList.remove('bgtabon');
}