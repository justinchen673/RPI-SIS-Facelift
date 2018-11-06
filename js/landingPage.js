if (window.location.href == "https://sis.rpi.edu/") {
	// Initialize document body and global aspects
	var body = document.body;
	body.style.margin = 0;
	body.style.fontFamily = "Source Sans Pro, sans-serif";
	body.style.backgroundImage = "url(https://www.cappex.com/assets/email/RensselaerEMPAC.jpg)";
	body.style.backgroundSize = "1920px auto";
	body.style.backgroundPosition = "center top";

	// Eliminate the image of the SIS man
	document.getElementsByTagName("img")[0].remove();

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
    banner.id = "banner";
	// Create and set up the div that the logo and right text will be in
	var headerDiv = document.createElement("div");
    headerDiv.classList.add("headerdiv");
	// Create the logo image and the link to rpi.edu
	var logoImg = document.createElement("img");
	logoImg.src = "https://www.rpi.edu/dept/cct/apps/web-branding/v2/header/meganav/img/RPIlogo_white.png";
	var logoLink = document.createElement("a");
	logoLink.href = "https://rpi.edu";
	// Text on the right
	var sisText = document.createElement("div");
    sisText.classList.add("sistext");
	sisText.innerHTML = "Rensselaer's Student Information System";
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
	var tText = document.createElement("h2");
    tText.id = "transformativetext";
	tText.innerHTML = "TRANSFORMATIVE.";
	leftHalfDiv.appendChild(tText);
	// Create and set up the login button
	var loginButton = document.createElement("button");
    loginButton.classList.add("fancybtn");
	loginButton.type = "button";
	loginButton.innerHTML = "LOGIN";
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
	var h1 = document.createElement("h2");
    h1.id = "referencestext";
	h1.innerHTML = "References";
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
        li.style.fontSize="20px";
		var link = document.createElement("a");
		link.href = referencesLinkList[i];
		link.innerHTML = referencesList[i];
		link.style.color = "white";
		link.style.textDecoration = "none";
        link.addEventListener('mouseover', coloringHandler);
        link.addEventListener('mouseout', decoloringHandler);
        li.style.listStyle="none";
		li.appendChild(link);
		ul.appendChild(li);
	}
}
