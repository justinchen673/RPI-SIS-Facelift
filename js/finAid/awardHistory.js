if (window.location.href == "https://sis.rpi.edu/rss/bwrkrhst.P_DispAwdHst") {
    // Create page title
    createPageTitle("Award History", "infotextdiv", 'c');

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[0].innerHTML = "This is your financial aid award history arranged by aid year. To obtain more detailed information about a loan listed below, click Loan Application History.";


    var ddlabels = document.getElementsByClassName("ddlabel");
    for (var i = 0; i < ddlabels.length; i++) {
        ddlabels[i].classList.add("dddefault");
    }
    var ddlabelsLength = ddlabels.length;
    for (var i = 0; i < ddlabelsLength; i++) {
        ddlabels[0].classList.remove("ddlabel");
    }
}
