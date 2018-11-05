if (window.location.href == "https://sis.rpi.edu/rss/bwskrsta.P_RegsStatusDisp") {
    // Create page title
    createPageTitle("Check Registration Status", "infotextdiv", 'c');

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[0].innerHTML = "<BLOCKQUOTE><strong>Displayed below are various items which may affect your registration. Your Time Ticket, Holds, Student Advisor Meeting (SAM) Status, Academic Standing, Student Status, Class, and Curriculum may prevent registration or restrict the courses you will be permitted to select. Incoming freshmen will be assigned a time ticket to permit registration during their assigned Student Orientation session.</strong></BLOCKQUOTE>";

    //Add some margin below first table
    document.getElementsByClassName("datadisplaytable")[0].style.marginBottom = "20px";

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
