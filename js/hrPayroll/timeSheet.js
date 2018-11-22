if (window.location.href == "https://sis.rpi.edu/rss/bwpkteis.P_SelectTimeSheetDriver") {
    // Create page title
    createPageTitle("Time Sheet", "infotextdiv", 'c');

    // Change table style
    // Edit first four cells on left
    var timeSheetTable = document.getElementsByClassName("datadisplaytable")[0];
    var ddlabelCells = timeSheetTable.getElementsByClassName("ddlabel");
    ddlabelCells[0].classList.add("dddefault");
    ddlabelCells[0].style.width = "25%";
    ddlabelCells[0].classList.remove("ddlabel");
    ddlabelCells[0].classList.add("dddefault");
    ddlabelCells[0].classList.remove("ddlabel");
    ddlabelCells[0].classList.add("dddefault");
    ddlabelCells[0].classList.remove("ddlabel");
    ddlabelCells[0].classList.add("dddefault");
    ddlabelCells[0].classList.remove("ddlabel");
    ddlabelCells[0].classList.add("dddefault");
    ddlabelCells[0].classList.remove("ddlabel");
    ddlabelCells[0].classList.add("dddefault");
    ddlabelCells[0].classList.remove("ddlabel");
    ddlabelCells[0].classList.add("dddefault");
    ddlabelCells[0].classList.remove("ddlabel");

    // Edit the time sheet headers
    var dbheaderCells = timeSheetTable.getElementsByClassName("dbheader");
    var i = 0;
    for (; i < 12; i++) {
        dbheaderCells[0].classList.add("ddheader");
        dbheaderCells[0].classList.remove("dbheader");
    }

    // Make buttons not far apart
    var fillerTD = document.createElement("td");
    fillerTD.style.width = "50%";
    timeSheetTable.getElementsByClassName("plaintable")[0].getElementsByTagName("tr")[0].appendChild(fillerTD);
}
