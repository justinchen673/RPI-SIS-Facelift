if (window.location.href == "https://sis.rpi.edu/rss/bwskotrn.P_ViewTran") {
    // Create page title
    createPageTitle("Display Transcript", "infotextdiv", 'c');

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[0].innerHTML = "This is NOT an official transcript. Courses which are in progress may also be included on this transcript.";

    addTableTitle(0, "12", "Transcript Data");
    addDefaultCell("ddlabel");

    var labelCells = document.getElementsByClassName("ddtitle");
    var oldLength = labelCells.length;
    for (var i = 0; i < oldLength; i++) {
        labelCells[0].classList.add("ddheader");
        labelCells[0].classList.remove("ddtitle");
    }

    var labelCells2 = document.getElementsByClassName("infotextdiv");
    oldLength = labelCells2.length;
    for (var i = 1; i < oldLength; i++) {
        labelCells2[1].remove();
    }

    var labelCells3 = document.getElementsByClassName("dddead");
    oldLength = labelCells3.length;
    for (var i = 0; i < oldLength; i++) {
        labelCells3[0].classList.add("ddheader");
        labelCells3[0].classList.remove("dddead");
    }

    document.getElementsByClassName("ddheader")[1].colSpan = "12";
    document.getElementsByClassName("dddefault")[4].colSpan = "12";
    document.getElementsByClassName("dddefault")[5].colSpan = "12";
    document.getElementsByClassName("dddefault")[7].colSpan = "9";
    document.getElementsByClassName("dddefault")[9].colSpan = "9";
    document.getElementsByClassName("dddefault")[11].colSpan = "9";

    document.getElementsByClassName("ddseparator")[1].remove();
    document.getElementsByClassName("ddseparator")[0].remove();}
