if (window.location.href == "https://sis.rpi.edu/rss/bwskfreg.P_AltPin") {
    // Create page title
    document.getElementsByClassName("pagebodydiv")[0].getElementsByTagName("br")[0].remove();
    var title = document.createElement("h1");
    title.innerHTML = "Register, Add, or Drop";
    document.getElementsByClassName("pagebodydiv")[0].insertBefore(title, document.getElementsByTagName("form")[1]);

    // We'll add the title to the table, so remove the default one
    document.getElementsByTagName("h3")[0].remove();

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[1].remove();
    document.getElementsByClassName("infotexttable")[0].innerHTML = "<BLOCKQUOTE><strong>Using this screen, you can add classes to your current schedule or drop a class from your current schedule. You can add classes in the Add Class section by entering in the desired class's Course Reference Number (CRN), or drop a class by using the options available in the action column of the Current Schedules table (some classes cannot be dropped!). When adds/drops are complete press the Submit Changes button. If you are unsure of which classes you wish to add press the Class Search button to review the class schedule.</strong></BLOCKQUOTE>";

    // Adjustments to the table
    var table = document.getElementsByClassName("datadisplaytable")[0];
    // Make it fit the length of the screen
    table.width = "100%";
    // Add custom title to the table
    var headRow = document.createElement("tr");
    var headCell = document.createElement("td");
    headCell.classList.add("tablehead");
    headCell.colSpan = "10";
    headCell.innerHTML = "Current Schedule";
    headRow.appendChild(headCell);
    table.getElementsByTagName("tbody")[0].insertBefore(headRow, table.getElementsByTagName("tr")[0]);

    // Edit credit hours table
    document.getElementsByTagName("table")[6].classList.add("datadisplaytable");
    document.getElementsByTagName("table")[6].classList.remove("dataentrytable");
    // Change style of the cells
    crnTable = document.getElementsByClassName("datadisplaytable")[1];
    crnTable.getElementsByTagName("td")[0].classList.add("ddheader");
    crnTable.getElementsByTagName("td")[0].classList.remove("detitle");
    for (var i = 1; i < 11; i++) {
        crnTable.getElementsByTagName("td")[i].classList.add("dddefault");
        crnTable.getElementsByTagName("td")[i].classList.remove("dedefault");
    }
    document.getElementsByTagName("h3")[0].remove();
    // Add title to the table
    var headRow2 = document.createElement("tr");
    var headCell2 = document.createElement("td");
    headCell2.classList.add("tablehead");
    headCell2.colSpan = "10";
    headCell2.innerHTML = "Add Classes Worksheet";
    headRow2.appendChild(headCell2);
    crnTable.getElementsByTagName("tbody")[0].insertBefore(headRow2, crnTable.getElementsByTagName("tr")[0]);
}
