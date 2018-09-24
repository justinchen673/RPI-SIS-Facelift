if (window.location.href == "https://sis.rpi.edu/rss/twbkwbis.P_GenMenu?name=amenu.P_AcctInfoMnu") {
    // Create table itself
    var table = document.createElement("table");
    table.classList.add("maincontenttable");
    // Create rows
    var iconList = ["assessment"];
    var titleList = ["Account Summary By Semester"];
    var linkList = ["/rss/bwskoacc.P_ViewAcct"];
    var descriptionList = ["View a history of all of your charges and payments."];
    createRow(iconList, titleList, linkList, descriptionList, table, 1);
    document.getElementsByClassName("pagebodydiv")[0].appendChild(table);
}
