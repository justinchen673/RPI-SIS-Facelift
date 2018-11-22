if (window.location.href == "https://sis.rpi.edu/rss/bwskfreg.P_AltPin") {
    // Create page title
    createPageTitle("Register, Add, or Drop", "infotextdiv", 'c');

    // We'll add the title to the table, so remove the default one
    document.getElementsByTagName("h3")[0].remove();

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[1].remove();
    document.getElementsByClassName("infotexttable")[0].innerHTML = "Using this screen, you can add classes to your current schedule or drop a class from your current schedule. You can add classes in the Add Class section by entering in the desired class's Course Reference Number (CRN), or drop a class by using the options available in the action column of the Current Schedules table (some classes cannot be dropped!). When adds/drops are complete press the Submit Changes button. If you are unsure of which classes you wish to add press the Class Search button to review the class schedule.";

    // Edit credit hours table
    document.getElementsByTagName("table")[6].classList.add("datadisplaytable");
    document.getElementsByTagName("table")[6].classList.remove("dataentrytable");
    // Change style of the cells
    var crnTable = document.getElementsByClassName("datadisplaytable")[1];
    crnTable.getElementsByTagName("td")[0].classList.add("ddheader");
    crnTable.getElementsByTagName("td")[0].classList.remove("detitle");
    addDefaultCell("dedefault");
    document.getElementsByTagName("h3")[0].remove();

    // Add titles to all tables
    addTableTitle(0, "10", "Current Schedule");
    addTableTitle(1, "10", "Add Classes Worksheet");
}
