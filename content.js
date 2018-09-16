//Used to color hover on main page refernces link list
function coloringHandler() {
    this.dataset.initialInlineColor = this.style.color;
    this.style.color = '#990011';
}

function decoloringHandler() {
    this.style.color = this.dataset.initialInlineColor;
}

function createRow(iconList, titleList, linkList, descriptionList, table, numBlocks) {
    var row = document.createElement("tr");
    for (var i = 0; i < numBlocks; i+=1) {
        var cell = document.createElement("td");
        var bigCellDiv = document.createElement("div");
        cell.classList.add("custommenucell");
        var icon = document.createElement("i");
        var hyperLinkI = document.createElement("a");
        icon.innerHTML = iconList[i];
        icon.classList.add("material-icons");
        hyperLinkI.href = linkList[i];
        hyperLinkI.style.float = "left";
        hyperLinkI.style.height = "100%";
        hyperLinkI.appendChild(icon);
        bigCellDiv.appendChild(hyperLinkI);
        var cellDiv = document.createElement("div");
        cellDiv.style.float = "left";
        cellDiv.style.width = "250px";
        var titleP = document.createElement("p");
        var hyperLinkP = document.createElement("a");
        hyperLinkP.href = linkList[i];
        titleP.classList.add("titleP");
        hyperLinkP.innerHTML = titleList[i];
        hyperLinkP.style.color = "#515151";
        titleP.appendChild(hyperLinkP);
        cellDiv.appendChild(titleP);
        var p2 = document.createElement("p");
        p2.classList.add("supportText");
        p2.innerHTML = descriptionList[i];
        cellDiv.appendChild(p2);
        bigCellDiv.appendChild(cellDiv);
        bigCellDiv.style.margin = "auto";
        bigCellDiv.style.width = "303px";
        cell.appendChild(bigCellDiv);

        row.appendChild(cell);
    }
    table.appendChild(row);
}


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
} else {
	var body = document.body;
	body.style.fontFamily = "Source Sans Pro, sans-serif";

	/*
	HEADER MODIFICATIONS
	*/

	// Get rid of left header title
	document.getElementsByTagName("h1")[0].remove();

	// Remove the paragraphs which cause white space
	document.getElementsByTagName("p")[0].remove();

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

	document.getElementsByClassName("pageheaderdiv1")[0].appendChild(headerDiv);
	headerDiv.appendChild(logoImg);
	headerDiv.appendChild(sisText);

	// Fix the issue that causes multiple highlighted tabs
	var tabon = document.getElementsByClassName("tabon");
	if (document.title == "Main Menu"
					|| window.location.href == "https://sis.rpi.edu/rss/twbkwbis.P_GenMenu?name=amenu.P_AcctInfoMnu"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskoacc.P_ViewAcct") {
	    tabon[0].classList.add('taboff');
	    tabon[0].classList.remove('tabon');
	} else if (document.title == "Personal Information Menu" || document.title == "Student Menu"
					|| window.location.href == "https://sis.rpi.edu/rss/ywemernot.P_Main"
					|| window.location.href == "https://sis.rpi.edu/rss/bwgkogad.P_SelectAtypUpdate"
					|| window.location.href == "https://sis.rpi.edu/rss/bwgkoemr.P_SelectEmrgContacts"
					|| window.location.href == "https://sis.rpi.edu/rss/bwgkvets.P_DispClass"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskflib.P_SelDefTerm"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskrsta.P_RegsStatusDisp"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskfreg.P_AltPin"
					|| window.location.href == "https://sis.rpi.edu/rss/ybwskfina.P_FinancialAgreement"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskfreg.P_ChangeCrseOpt"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskfcls.p_sel_crse_search"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskfshd.P_CrseSchd"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskfshd.P_CrseSchdDetl"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskgstu.P_StuInfo"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskogrd.P_ViewTermGrde"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskotrn.P_ViewTermTran"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskwtrr.p_disp_transcript_request_type"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskwtrr.p_disp_status_of_order"
					|| window.location.href == "https://sis.rpi.edu/rss/hwskocap.P_StuSelectCompl"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskgrad.p_disp_grad_term"
					|| window.location.href == "https://sis.rpi.edu/rss/hwskgrad.P_StuSelectTerm?menu_choice=B"
					|| window.location.href == "https://sis.rpi.edu/rss/hwskgrad.P_StuViewHolds"
					|| window.location.href == "https://sis.rpi.edu/rss/bwcklibs.P_StoreTerm"
					|| window.location.href == "https://sis.rpi.edu/rss/bwskfreg.P_AddDropCrse"
					|| window.location.href == "https://sis.rpi.edu/rss/bwckgens.p_proc_term_date" ) {
	    tabon[1].classList.add('taboff');
	    tabon[1].classList.remove('tabon');
	} else if (window.location.href == "https://sis.rpi.edu/rss/twbkwbis.P_ChangePin"
					|| window.location.href == "https://sis.rpi.edu/rss/twbkwbis.P_SecurityQuestion") {
		// "Change Pin" and "Change Security Question" has no highlighted tab, so we add a tabon
		var taboff = document.getElementsByClassName("taboff");
		taboff[0].classList.add('tabon');
		taboff[0].classList.remove('taboff');
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

    // Add box shadows to search bar
    var x =  document.getElementsByName("KEYWRD_IN") /*document.getElementsByClassName("fieldlabeltext");*/
    for (var i = 0; i < x.length; i++) {
    	x[i].style.boxShadow = "1px 1px 1px #999999";
    }
    var inp = document.getElementsByTagName("input");
    for (var i = 0; i < inp.length; i++) {
    	inp[i].style.boxShadow = "1px 1px 1px #999999";
    }
    form[0].value = "";


    /*
	BODY MODIFICATIONS
    */

    // Import the icons
    var iconPack = document.createElement("link");
    iconPack.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    iconPack.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(iconPack);

    // Get rid of the table that hold bulleted points
    document.getElementsByClassName("menuplaintable")[0].remove();

    // Student Menu table creation
    if (window.location.href == "https://sis.rpi.edu/rss/twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu") {
        // Get rid of repetitive title
        document.getElementsByClassName("pagetitlediv")[0].remove();
        // Create the title of the first block
        var title = document.createElement("h1");
        title.innerHTML = "Registration Information";
        document.getElementsByClassName("pagebodydiv")[0].appendChild(title);
        // Create table itself
    	var table = document.createElement("table");
        table.classList.add("maincontenttable");
        // Create rows
        var iconList = ["tune", "ballot", "add_circle_outline", "how_to_reg"];
        var titleList = ["Select or Change Term", "Check Registration Status", "Register, Add, or Drop", "Financial Responsibility Agreement"];
        var linkList = ["/rss/bwskflib.P_SelDefTerm", "/rss/bwskrsta.P_RegsStatusDisp", "/rss/bwskfreg.P_AltPin", "/rss/ybwskfina.P_FinancialAgreement"];
        var descriptionList = ["Plan your courses or view past information by the semester.",
                                "View time tickets, holds, SAM status, academic standing, anything that could prevent registration or restrict course selection.",
                                "Add courses based on their CRNs or drop courses you're currently taking.",
                                "Ensure you've met this agreement for each one of your semesters."];
        createRow(iconList, titleList, linkList, descriptionList, table, 4);
        iconList = ["assignment", "youtube_searched_for", "calendar_view_day", "calendar_today"];
        titleList = ["Change Thesis/Project Credits", "Class Search", "View Weekly Schedule, Day/Time Grid", "View Class Information"];
        linkList = ["/rss/bwskfreg.P_ChangeCrseOpt", "/rss/bwskfcls.p_sel_crse_search", "/rss/bwskfshd.P_CrseSchd", "/rss/bwskfshd.P_CrseSchdDetl"];
        descriptionList = ["If you're engaged in a project, thesis, or dissertation, you can set or change the number of credits here.",
                            "Search for classes by subject, credit range, part of term, course number, etc.",
                            "View a grid that displays what classes you have per week at which times.",
                            "View all the classes you're taking, along with the instructor, location, CRNs, and status."]
        createRow(iconList, titleList, linkList, descriptionList, table, 4);
    	document.getElementsByClassName("pagebodydiv")[0].appendChild(table);

        // Create the title of the second block
        title = document.createElement("h1");
        title.innerHTML = "Curriculum Information";
        document.getElementsByClassName("pagebodydiv")[0].appendChild(title);
        // Create table itself
    	table = document.createElement("table");
        table.classList.add("maincontenttable");
        // Create rows
        iconList = ["assignment_ind", "assessment", "assignment_returned", "assignment_late"];
        titleList = ["View Advisor and Curriculum Information", "View Grades", "View Transcript", "Request a Transcript"];
        linkList = ["/rss/bwskgstu.P_StuInfo", "/rss/bwskogrd.P_ViewTermGrde", "/rss/bwskotrn.P_ViewTermTran", "/rss/bwskwtrr.p_disp_transcript_address"];
        descriptionList = ["View various information regarding your status as a student, your advisor, and your major.",
                            "See your grades from every semester. Grades in classes you are currently in won't be in here.",
                            "An unofficial transcript that contains a history of every class you've taken.",
                            "For mailing an official transcript to whomever it be necessary."]
        createRow(iconList, titleList, linkList, descriptionList, table, 4);
        iconList = ["assignment_turned_in", "chrome_reader_mode", "class", "contact_support"];
        titleList = ["Check Transcript Request Status", "View CAPP Reports", "Degree Works", "Degree Works Tutorials"];
        linkList = ["/rss/bwskwtrr.p_disp_status_of_order", "/rss/hwskocap.P_StuSelectCompl", "/rss/DW_Student.P_SignOn", "https://info.rpi.edu/degree-works"];
        descriptionList = ["This displays a history of your transcript requests by date of order.",
                            "See your progression towards your major, regarding required courses and grades.",
                            "An alternative to CAPP for viewing progression towards your major.",
                            "A tutorial regarding how to use Degree Works."]
        createRow(iconList, titleList, linkList, descriptionList, table, 4);
    	document.getElementsByClassName("pagebodydiv")[0].appendChild(table);

        // Create the title of the third block
        title = document.createElement("h1");
        title.innerHTML = "Graduation Information";
        document.getElementsByClassName("pagebodydiv")[0].appendChild(title);
        // Create table itself
    	table = document.createElement("table");
        table.classList.add("maincontenttable");
        // Create rows
        iconList = ["school", "how_to_vote", "subtitles", "note"];
        titleList = ["Commencement Ceremony Participation Policy", "Apply to Graduate", "View Degree Status and Diploma Information", "View Diploma Holds"];
        linkList = ["http://registrar.rpi.edu/update.do?artcenterkey=83", "/rss/bwskgrad.p_disp_grad_term", "/rss/hwskgrad.P_StuSelectTerm?menu_choice=B", "/rss/hwskgrad.P_StuViewHolds"];
        descriptionList = ["This link is broken, as it is no longer accessible online and SIS never updates. Just be aware that it exists.",
                            "Apply for your degree.",
                            "If you've applied for a degree, that information can be viewed here.",
                            "Double check to ensure there are no holds on your diploma."]
        createRow(iconList, titleList, linkList, descriptionList, table, 4);
    	document.getElementsByClassName("pagebodydiv")[0].appendChild(table);
    }
    if (document.title == "Personal Information Menu") {
        // Get rid of repetitive title
        document.getElementsByClassName("pagetitlediv")[0].remove();
        // Create table itself
    	var table = document.createElement("table");
        table.classList.add("maincontenttable");
        // Create rows
        var iconList = ["lock", "security", "gps_fixed", "contact_phone"];
        var titleList = ["Change PIN", "Change Security Question", "Update your Address", "Update your Emergency Contacts"];
        var linkList = ["/rss/twbkwbis.P_ChangePin", "/rss/twbkwbis.P_SecurityQuestion", "/rss/bwgkogad.P_SelectAtypUpdate", "/rss/bwgkoemr.P_SelectEmrgContacts"];
        var descriptionList = ["Change the password required to enter your accounut.",
                                "Change the security question you use when you forget your password/PIN.",
                                "This allows you to edit either your permanent address or your campus address.",
                                "Add new emergency contacts and view the ones you already have."];
        createRow(iconList, titleList, linkList, descriptionList, table, 4);
        iconList = ["wc", "accessibility_new"];
        titleList = ["Update your Marital Status", "Veterans Classifications"];
        linkList = ["/rss/bwgkomar.P_SelectMtypUpdate", "/rss/bwgkvets.P_DispClass"];
        descriptionList = ["Here you can update your marital status within the system. This does NOT affect tax information or benefits.",
                            "RPI requires government contractors to take affirmative action to employ and advance in employment veterans."];
        createRow(iconList, titleList, linkList, descriptionList, table, 2);
    	document.getElementsByClassName("pagebodydiv")[0].appendChild(table);
    }
    if (window.location.href == "https://sis.rpi.edu/rss/twbkwbis.P_GenMenu?name=bmenu.P_FinAidMainMnu") {
        // Get rid of repetitive title
        document.getElementsByClassName("pagetitlediv")[0].remove();
        // Create table itself
    	var table = document.createElement("table");
        table.classList.add("maincontenttable");
        // Create rows
        var iconList = ["done_all", "event", "receipt", "date_range"];
        var titleList = ["Eligibility & Requirements", "Award Package by Aid Year", "Account Summary By Semester", "Award Payment Schedule for Award Year"];
        var linkList = ["/rss/bwrkelig.P_DispEligReq", "/rss/bwrkrhst.P_DispAwdAidYear", "/rss/bwskoacc.P_ViewAcct", "/rss/bwrkpays.P_DispPaySched"];
        var descriptionList = ["See if you qualify for financial aid.",
                                "View how much financial aid you're receiving by the semester.",
                                "See all charges and payments by the semester.",
                                "Your financial aid disbursement schedule reflects expected payment for the purpose of reducing your outstanding school charges."];
        createRow(iconList, titleList, linkList, descriptionList, table, 4);
        iconList = ["line_weight", "supervised_user_circle"];
        titleList = ["Award History", "Loan Application History"];
        linkList = ["/rss/bwrkrhst.P_DispAwdHst", "/rss/bwrklhst.P_DispLoanHst"];
        descriptionList = ["View how much financial aid you're receiving by the year.",
                            "View all accounts of applications for loans."];
        createRow(iconList, titleList, linkList, descriptionList, table, 2);
    	document.getElementsByClassName("pagebodydiv")[0].appendChild(table);
    }
    if (document.title == "Main Menu") {
        // Get rid of repetitive title
        document.getElementsByClassName("pagetitlediv")[0].remove();
        // Create table itself
    	var table = document.createElement("table");
        table.classList.add("maincontenttable");
        // Create rows
        var iconList = ["face", "account_circle", "directions_car", "local_atm"];
        var titleList = ["Student Menu", "Personal Information", "Parking Main Menu", "Human Resources/Payroll Menu"];
        var linkList = ["/rss/twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu", "/rss/twbkwbis.P_GenMenu?name=bmenu.P_GenMnu", "/rss/bosscars.bosscars_home", "/rss/twbkwbis.P_GenMenu?name=pmenu.P_MainMnu"];
        var descriptionList = ["Add and drop classes, view your schedule, look for classes, view grades, etc.",
                                "Change your pin or security question, update your address or emergency contacts, etc.",
                                "Apply for permits and view the disclaimer.",
                                "See time sheets, tax forms, pay information, benefits and deductions, etc."];
        createRow(iconList, titleList, linkList, descriptionList, table, 4);
        iconList = ["attach_money"];
        titleList = ["Financial Aid"];
        linkList = ["/rss/twbkwbis.P_GenMenu?name=bmenu.P_FinAidMainMnu"];
        descriptionList = ["See if you qualify for financial aid and view your aid per semester or per year."];
        createRow(iconList, titleList, linkList, descriptionList, table, 1);
    	document.getElementsByClassName("pagebodydiv")[0].appendChild(table);
    }
    if (window.location.href == "https://sis.rpi.edu/rss/twbkwbis.P_GenMenu?name=pmenu.P_MainMnu") {
        // Get rid of repetitive title
        document.getElementsByClassName("pagetitlediv")[0].remove();
        // Create table itself
    	var table = document.createElement("table");
        table.classList.add("maincontenttable");
        // Create rows
        var iconList = ["av_timer", "queue", "new_releases", "money_off"];
        var titleList = ["Time Sheet", "Tax Forms", "Pay Information", "Benefits and Deductions"];
        var linkList = ["/rss/bwpktais.P_SelectTimeSheetRoll", "/rss/twbkwbis.P_GenMenu?name=pmenu.P_TaxMenu", "/rss/twbkwbis.P_GenMenu?name=pmenu.P_PayMenu", "/rss/twbkwbis.P_GenMenu?name=pmenu.P_BenMenu"];
        var descriptionList = ["Log your working hours. Payments occur every two weeks.",
                                "View federal W-4 information, state tax exemptions/allowances, or your W-2 form. As always, please consult your tax advisor or accountant for any tax advice.",
                                "View your pay stub, earnings history, and deductions history.",
                                "View your retirement plans, medical, dental and vision plans, flex spending accounts, life insurance and long term disability benefits."];
        createRow(iconList, titleList, linkList, descriptionList, table, 4);
        iconList = ["account_balance", "security"];
        titleList = ["Leave Balances and History", "NY State Wage Theft Prevention Notification"];
        linkList = ["/rss/bwpkeinf.P_ViewLeaveBalances", "/rss/ybwpkwtpa.P_WageTheftMenu"];
        descriptionList = ["View your leave accruals, usage and balances.",
                            "This law requires Rensselaer to provide an annual notice to you, informing you of your current pay rate, payday and requiring your acknowledgement of this information."];
        createRow(iconList, titleList, linkList, descriptionList, table, 2);
    	document.getElementsByClassName("pagebodydiv")[0].appendChild(table);
    }



    /*
    FOOTER MODIFICATIONS
    */

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
}
