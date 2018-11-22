if (window.location.href == "https://sis.rpi.edu/rss/bwskrsta.P_RegsStatusDisp") {
    // Create page title
    createPageTitle("Check Registration Status", "infotextdiv", 'c');

    // Change style of the cells
    var curriculumTable = document.getElementsByClassName("datadisplaytable")[2];
    curriculumTable.getElementsByTagName("th")[0].remove();
    var curriculumCell = curriculumTable.getElementsByTagName("td");
    curriculumCellHeader = curriculumTable.getElementsByTagName("th");
    curriculumCell[0].classList.add("ddheader");
    curriculumCell[0].classList.remove("dddefault");
    curriculumCell[0].innerHTML = "Current Program: " + curriculumCell[0].innerHTML;
    addDefaultCell("ddlabel");

    // Add titles to all tables
    addTableTitle(0, "4", "Time Ticket for Registration");
    addTableTitle(1, "3", "Earned Credit");
    addTableTitle(2, "2", "Curriculum Information");
}
