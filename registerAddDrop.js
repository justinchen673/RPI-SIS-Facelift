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

    // Make table take up the whole screen
    document.getElementsByClassName("datadisplaytable")[0].width = "100%";

    // Edit credit hours table
    document.getElementsByTagName("table")[6].classList.add("datadisplaytable");
    document.getElementsByTagName("table")[6].classList.remove("dataentrytable");
    // Change style of the cells
    var crnTable = document.getElementsByClassName("datadisplaytable")[1];
    crnTable.getElementsByTagName("td")[0].classList.add("ddheader");
    crnTable.getElementsByTagName("td")[0].classList.remove("detitle");
    for (var i = 1; i < 11; i++) {
        crnTable.getElementsByTagName("td")[i].classList.add("dddefault");
        crnTable.getElementsByTagName("td")[i].classList.remove("dedefault");
    }
    document.getElementsByTagName("h3")[0].remove();

    // Add titles to all tables
    addTableTitle(0, "10", "Current Schedule");
    addTableTitle(1, "10", "Add Classes Worksheet");
}
