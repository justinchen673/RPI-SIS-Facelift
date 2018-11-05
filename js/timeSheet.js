if (window.location.href == "https://sis.rpi.edu/rss/bwpkteci.P_UpdateTimeInOut") {
    // Create page title
    createPageTitle("Time Sheet", "infotextdiv", 'c');

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[0].innerHTML = "<BLOCKQUOTE><strong>Click \"Enter Hours\" under the date on the appropriate earnings code row. Select \"Next\" or \"Previous\" to navigate through the dates within the pay period. It is highly recommended that you \"Preview\" your time sheet before you \"Submit for Approval\". See \"Help\" for additional guidance on functions available on this page.</strong></BLOCKQUOTE>";

    addTableTitle(0, "2", "Time Sheet");
    addDefaultCellStyle("ddlabel");
    /*
    addDefaultCell("ddlabel");
    var rows = document.getElementsByTagName("tr");
    for (var i = 5; i < rows.length-1; i++) {
        rows[i].children[0].style.width = "25%";
    }
    */
}
