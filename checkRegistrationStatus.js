if (window.location.href == "https://sis.rpi.edu/rss/bwskrsta.P_RegsStatusDisp") {
    // Create page title
    document.getElementsByClassName("pagebodydiv")[0].getElementsByTagName("br")[0].remove();
    var title = document.createElement("h1");
    title.innerHTML = "Check Registration Status";
    document.getElementsByClassName("pagebodydiv")[0].insertBefore(title, document.getElementsByClassName("infotextdiv")[0]);

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[0].innerHTML = "<BLOCKQUOTE><strong>Displayed below are various items which may affect your registration. Your Time Ticket, Holds, Student Advisor Meeting (SAM) Status, Academic Standing, Student Status, Class, and Curriculum may prevent registration or restrict the courses you will be permitted to select. Incoming freshmen will be assigned a time ticket to permit registration during their assigned Student Orientation session.</strong></BLOCKQUOTE>";

    //Add some margin below first table
    document.getElementsByClassName("datadisplaytable")[0].style.marginBottom = "20px";

    // Add custom title to the curriculum table
    earnedCreditTable = document.getElementsByClassName("datadisplaytable")[1];
    earnedCreditTable.getElementsByClassName("captiontext")[0].remove();
    var headRow = document.createElement("tr");
    var headCell = document.createElement("td");
    headCell.classList.add("tablehead");
    headCell.colSpan = "10";
    headCell.innerHTML = "Earned Credit";
    headRow.appendChild(headCell);
    earnedCreditTable.getElementsByTagName("tbody")[0].insertBefore(headRow, earnedCreditTable.getElementsByTagName("tr")[0]);

    // Change style of the cells
    curriculumTable = document.getElementsByClassName("datadisplaytable")[2];
    curriculumTable.getElementsByTagName("th")[0].remove();
    curriculumTable.getElementsByClassName("captiontext")[0].remove();
    curriculumCell = curriculumTable.getElementsByTagName("td");
    curriculumCellHeader = curriculumTable.getElementsByTagName("th");
    curriculumCell[0].classList.add("ddheader");
    curriculumCell[0].classList.remove("dddefault");
    curriculumCell[0].innerHTML = "Current Program: " + curriculumCell[0].innerHTML;
    for (var i = 0; i < 9; i++) {
        curriculumCellHeader[i].classList.add("dddefault");
        curriculumCellHeader[i].classList.remove("ddlabel");
    }

    // Add custom title to the curriculum table
    var headRow2 = document.createElement("tr");
    var headCell2 = document.createElement("td");
    headCell2.classList.add("tablehead");
    headCell2.colSpan = "10";
    headCell2.innerHTML = "Curriculum Information";
    headRow2.appendChild(headCell2);
    curriculumTable.getElementsByTagName("tr")[0].remove();
    curriculumTable.getElementsByTagName("tbody")[0].insertBefore(headRow2, curriculumTable.getElementsByTagName("tr")[0]);
}
