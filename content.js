if (window.location.href == "https://sis.rpi.edu/") {
	// Eliminate the image of the SIS man
	var sisMan = document.getElementsByTagName("img");
	sisMan[0].remove();

	// Remove the paragraphs which cause white space
	var paragraphs = document.getElementsByTagName("p");
	paragraphs[2].remove();
	paragraphs[1].remove();
	paragraphs[0].remove();

	// Remove the tables on SIS
	var tables = document.getElementsByTagName("table");
	tables[1].remove();
	tables[0].remove();

	// Create the top header
	var body = document.body;
	body.style.fontFamily = "Source Sans Pro, sans-serif";
	var header = document.createElement("HEADER");
	header.style.display = "flex";
	header.style.alignItems = "center";
	header.style.height = "150px";
	header.style.width = "100%";
	header.style.backgroundColor = "#D6001C";
	header.style.borderBottom = "10px solid #ffffff"
	var logoDiv = document.createElement("div");
	logoDiv.style.marginLeft = "auto";
	logoDiv.style.marginRight = "auto";
	logoDiv.style.width = "75%";
	header.appendChild(logoDiv);
	body.style.margin = 0;
	body.insertBefore(header, body.childNodes[0]);
	var logoImg = document.createElement("img");
	logoImg.src = "https://www.rpi.edu/dept/cct/apps/web-branding/v2/header/meganav/img/RPIlogo_white.png";
	var logoLink = document.createElement("a");
	logoLink.href = "https://rpi.edu";
	logoDiv.appendChild(logoLink);
	logoLink.appendChild(logoImg);
	var sisText = document.createElement("div");
	sisText.innerHTML = "Rensselaer's Student Information System";
	sisText.style.float = "right";
	sisText.style.fontSize = "x-large";
	sisText.style.color = "#ffffff";
	logoDiv.appendChild(sisText);

	// Set the background image
	body.style.backgroundImage = "url(https://www.cappex.com/assets/email/RensselaerEMPAC.jpg)";
	//body.style.backgroundImage = "url(https://i.imgur.com/Q1ue5Yq.jpg)";
	body.style.backgroundSize = "1920px auto";
	body.style.backgroundPosition = "center top";

	paragraphs[0].remove();
	// Create "transformative" text
	
	var transformative = document.createElement("div");
	transformative.style.marginLeft = "15%";
	transformative.style.float = "left";
	transformative.height = "100%";
	body.appendChild(transformative);
	var tText = document.createElement("h1");
	tText.style.paddingTop = "60%";
	tText.style.color = "#ffffff";
	tText.innerHTML = "TRANSFORMATIVE.";
	tText.style.fontSize = "42px";
	transformative.appendChild(tText);
	

	// Create and set up the login button
	var loginButton = document.createElement("button");
	loginButton.type = "button";
	loginButton.style.backgroundColor = "#990011"; // #D6001C ?
	loginButton.style.border = "3px solid #ffffff";
	loginButton.style.borderRadius = "0";
	loginButton.style.color = "#fff";
	loginButton.style.textDecoration = "none";
	loginButton.style.fontSize = "x-large";
	loginButton.style.paddingTop = "70%";
	loginButton.style.position = "absolute";
	loginButton.innerHTML = "LOGIN";
	loginButton.style.float = "left";
	loginButton.style.padding = "40px 50px 40px 50px";
	transformative.appendChild(loginButton);

	// Create and set up references div
	var div = document.createElement("div");
	div.style.float = "right";
	div.style.margin = 0;
	div.style.width = "400px";
	div.style.height = "100%";
	div.style.backgroundColor = "#4c4c4c";
	body.appendChild(div);

	//Create and set up the header that goes inside the references div
	var h1 = document.createElement("h1");
	h1.innerHTML = "References";
	h1.style.fontWeight = "normal";
	h1.style.color = "#ffffff";
	h1.style.marginLeft = "10px";
	div.appendChild(h1);

	//Create and set up the list that goes inside the references div
	var ul = document.createElement("ul");
	var referencesList = ["Online Syllabus Catalog", "Transfer Course Guide", "Class Hour Schedules", "SIS User Responsibility", "Office of the Registrar", "College Catalog", "System Availability", "Server Not Responding?"];
	var referencesLinkList = ["http://provost.rpi.edu/syllabus-display", "https://sis.rpi.edu/rss/yhwwkwags.P_Web_Artic_Guide", "stuclshr.htm", "policy.htm", "https://info.rpi.edu/registrar", "http://www.rpi.edu/academics/catalog", "update.htm", "http://j2ee.rpi.edu/swf/setup.do?target=sis"];
	div.appendChild(ul);
	for (var i = 0; i < 8; i++) {
		var li = document.createElement("li");
		li.style.color = "white";
		li.style.margin = "25px";
		var link = document.createElement("a");
		link.href = referencesLinkList[i];
		link.innerHTML = referencesList[i];
		link.style.color = "white";
		link.style.textDecoration = "none";
		li.appendChild(link);
		ul.appendChild(li);
	}
} else {

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

}