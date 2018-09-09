if (window.location.href == "https://sis.rpi.edu/") {
	// Initialize document body and global aspects
	var body = document.body;
	body.style.margin = 0;
	body.style.fontFamily = "Source Sans Pro, sans-serif";
	body.style.backgroundImage = "url(https://www.cappex.com/assets/email/RensselaerEMPAC.jpg)";
	body.style.backgroundSize = "1920px auto";
	body.style.backgroundPosition = "center top";

	// Eliminate the image of the SIS man
	var sisMan = document.getElementsByTagName("img");
	sisMan[0].remove();

	// Remove the tables on SIS
	var tables = document.getElementsByTagName("table");
	tables[1].remove();
	tables[0].remove();

	// Remove the paragraphs which cause white space
	var paragraphs = document.getElementsByTagName("p");
	paragraphs[2].remove();
	paragraphs[1].remove();
	paragraphs[0].remove();

	// Create top banner : style keeps logo centered vertically
	var banner = document.createElement("HEADER");
	banner.style.height = "150px";
	banner.style.width = "100%";
	banner.style.display = "flex";
	banner.style.alignItems = "center";
	banner.style.backgroundColor = "#D6001C";
	banner.style.borderBottom = "10px solid #ffffff"
	// Create and set up the div that the logo and right text will be in
	var headerDiv = document.createElement("div");
	headerDiv.style.marginLeft = "auto";
	headerDiv.style.marginRight = "auto";
	headerDiv.style.width = "75%";
	// Create the logo image and the link to rpi.edu
	var logoImg = document.createElement("img");
	logoImg.src = "https://www.rpi.edu/dept/cct/apps/web-branding/v2/header/meganav/img/RPIlogo_white.png";
	var logoLink = document.createElement("a");
	logoLink.href = "https://rpi.edu";
	// Text on the right
	var sisText = document.createElement("div");
	sisText.innerHTML = "Rensselaer's Student Information System";
	sisText.style.float = "right";
	sisText.style.fontSize = "30px";
	sisText.style.color = "#ffffff";
	//Insert all parts into the webpage
	body.insertBefore(banner, body.childNodes[0]);
	banner.appendChild(headerDiv);
	headerDiv.appendChild(logoLink);
	logoLink.appendChild(logoImg);
	headerDiv.appendChild(sisText);

	// Set up the left side of the webpage
	var leftHalfDiv = document.createElement("div");
	leftHalfDiv.style.marginLeft = "15%";
	leftHalfDiv.style.float = "left";
	leftHalfDiv.height = "100%";
	body.appendChild(leftHalfDiv);
	// Set up the text that says "transformative"
	var tText = document.createElement("h1");
	tText.style.paddingTop = "60%";
	tText.style.color = "#ffffff";
	tText.innerHTML = "TRANSFORMATIVE.";
	tText.style.fontSize = "42px";
	leftHalfDiv.appendChild(tText);
	// Create and set up the login button
	var loginButton = document.createElement("button");
	loginButton.type = "button";
	loginButton.style.backgroundColor = "#990011"; // #D6001C ?
	loginButton.style.border = "3px solid #ffffff";
	loginButton.style.borderRadius = "0";
	loginButton.style.color = "#fff";
	loginButton.style.fontSize = "x-large";
	loginButton.style.paddingTop = "70%";
	loginButton.style.position = "absolute";
	loginButton.innerHTML = "LOGIN";
	loginButton.style.float = "left";
	loginButton.style.padding = "40px 50px 40px 50px";
	loginButton.onclick = function() {
		window.location.href = "https://sis.rpi.edu/rss/twbkwbis.P_WWWLogin";
	}
	loginButton.onmouseover = function() {
		loginButton.style.backgroundColor = "#ffffff";
		loginButton.style.border = "3px solid #990011";
		loginButton.style.color = "#990011";
	}
	loginButton.onmouseout = function() {
		loginButton.style.backgroundColor = "#990011";
		loginButton.style.border = "3px solid #ffffff";
		loginButton.style.color = "#ffffff";
	}
	//var css = 'button:hover{ background-color: #ffffff; border: 3px solid #990011; color: #990011 }';
	leftHalfDiv.appendChild(loginButton);

	// Create and set up references div
	var div = document.createElement("div");
	div.style.float = "right";
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
	ul.style.color = "#ffffff";
	var referencesList = ["Online Syllabus Catalog", "Transfer Course Guide", "Class Hour Schedules", "SIS User Responsibility", "Office of the Registrar", "College Catalog", "System Availability", "Server Not Responding?"];
	var referencesLinkList = ["http://provost.rpi.edu/syllabus-display", "https://sis.rpi.edu/rss/yhwwkwags.P_Web_Artic_Guide", "stuclshr.htm", "policy.htm", "https://info.rpi.edu/registrar", "http://www.rpi.edu/academics/catalog", "update.htm", "http://j2ee.rpi.edu/swf/setup.do?target=sis"];
	div.appendChild(ul);
	for (var i = 0; i < 8; i++) {
		var li = document.createElement("li");
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
	var body = document.body;
	body.style.fontFamily = "Source Sans Pro, sans-serif";

	/*
	HEADER MODIFICATIONS
	*/

	// Unify the header across all the pages
	var h1 = document.getElementsByTagName("h1");
	h1[0].remove();

	// Remove the paragraphs which cause white space
	var paragraphs = document.getElementsByTagName("p");
	paragraphs[0].remove();

	// Remove all extra space between menu tabs
	var menuBackgroundOn = document.getElementsByClassName("bgtabon");
	var menuBackgroundOff = document.getElementsByClassName("bgtaboff");
	for (var i = menuBackgroundOff.length - 1; i >= 0; i--) {
		menuBackgroundOff[i].remove();
	}
	for (var i = menuBackgroundOn.length - 1; i >= 0; i--) {
		menuBackgroundOn[i].remove();
	}

	// Create and set up the div that the logo and right text will be in
	var headerDiv = document.createElement("div");
	headerDiv.style.marginLeft = "auto";
	headerDiv.style.marginRight = "auto";
	headerDiv.style.width = "75%";
	// Create the logo image and the link to rpi.edu
	var logoImg = document.createElement("img");
	logoImg.src = "https://www.rpi.edu/dept/cct/apps/web-branding/v2/header/meganav/img/RPIlogo_white.png";
	var logoLink = document.createElement("a");
	logoLink.href = "https://rpi.edu";
	// Text on the right
	var sisText = document.createElement("div");
	sisText.innerHTML = "Rensselaer's Student Information System";
	sisText.style.float = "right";
	sisText.style.fontSize = "30px";
	sisText.style.color = "#ffffff";

	var banner = document.getElementsByClassName("pageheaderdiv1");
	banner[0].appendChild(headerDiv);
	headerDiv.appendChild(logoImg);
	headerDiv.appendChild(sisText);
	
	// Fix the issue that causes multiple highlighted tabs
	var tabon = document.getElementsByClassName("tabon");
	if (document.title == "Main Menu" || window.location.href == "https://sis.rpi.edu/rss/twbkwbis.P_GenMenu?name=amenu.P_AcctInfoMnu") {
	    tabon[0].classList.add('taboff');
	    tabon[0].classList.remove('tabon');
	} else if (document.title == "Personal Information Menu" || document.title == "Student Menu") {
	    tabon[1].classList.add('taboff');
	    tabon[1].classList.remove('tabon');
	}

	// Dynamic top buttons, change colors upon hover
	var taboff = document.getElementsByClassName("taboff");
	for (var i = 0; i < taboff.length; i++) {
		taboff[i].onmouseout = function() {
			this.classList.add('taboff');
			this.classList.remove('tabon');
		}
		taboff[i].onmouseover = function() {
			this.classList.add('tabon');
			this.classList.remove('taboff');
		}
	}
	
	/*
	SEARCH BAR MODIFICATIONS
	*/
	// Get rid of useless additional "main menu" hyperlink
	var extraMenuLink = document.getElementById("ssbbackurl");
	if (extraMenuLink != null) {
		extraMenuLink.remove();
	}

	var form = document.getElementsByTagName("form");
	form[0].value = "";
}