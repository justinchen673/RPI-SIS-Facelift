if (window.location.href == "https://sis.rpi.edu/") {
	var sisMan = document.getElementsByTagName("img");
	sisMan[0].remove();

	var header = document.createElement("HEADER");
	var topbanner = document.createElement("div");
	topbanner.style.backgroundColor = "#D6001C";
	topbanner.style.height= "150px";
	header.appendChild(topbanner);
	var body = document.body;
	body.style.margin = 0;
	body.insertBefore(header, body.childNodes[0]);

	body.style.fontFamily = "Source Sans Pro, sans-serif";

	var tables = document.getElementsByTagName("table");
	tables[1].remove();
	tables[0].remove();

	body.style.backgroundImage = "url(https://www.cappex.com/assets/email/RensselaerEMPAC.jpg)";
	body.style.backgroundSize = "1920px auto";
	body.style.backgroundPosition = "center top";

	var loginButton = document.createElement("button");
	loginButton.type = "button";
	loginButton.style.backgroundColor = "#990011"; // #D6001C ?
	loginButton.style.border = "3px solid #ffffff";
	loginButton.style.borderRadius = "0";
	loginButton.style.color = "#fff";
	loginButton.style.textDecoration = "none";
	loginButton.style.fontSize = "x-large";
	loginButton.style.marginTop = "150px";
	loginButton.style.marginLeft = "250px";
	loginButton.style.position = "absolute";
	loginButton.innerHTML = "LOGIN";
	loginButton.style.padding = "30px 30px 30px 30px";
	body.appendChild(loginButton);
}

	


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