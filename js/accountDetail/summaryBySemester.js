if (window.location.href == "https://sis.rpi.edu/rss/bwskoacc.P_ViewAcct") {
    // Create page title
    createPageTitle("Account Summary by Semester", "infotextdiv", 'c');

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[0].innerHTML = "This is your account summary by term. Pending third party contract payments, financial aid, and memos are NOT included in the summary.";

    addTableTitle(0, "5", "Summary");

    addDefaultCell("ddlabel");
    var rows = document.getElementsByTagName("tr");
    for (var i = 5; i < rows.length-1; i++) {
        rows[i].children[0].style.width = "25%";
    }
}
