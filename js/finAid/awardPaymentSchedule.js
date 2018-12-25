if (window.location.href == "https://sis.rpi.edu/rss/bwrkpays.P_DispPaySched") {
    // Create page title
    createPageTitle("Award Payment Schedule for Award Year", "infotextdiv", 'c');

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[0].innerHTML = "Your financial aid disbursement schedule reflects expected payment for the purpose of reducing your outstanding school charges. Your disbursement schedule and a record of the award payments made to your account are listed below. Federal Direct Loans and other alternative loans will not appear on this page as they have various disbursement schedules. New York Awards (i.e. NYS Tuition Assistance Program) appear with an expected date of December 31, 2099 until the funds are disbursed. Once disbursed, the actual date of disbursement will appear.";


    var ddlabels = document.getElementsByClassName("ddlabel");
    for (var i = 0; i < ddlabels.length; i++) {
        ddlabels[i].classList.add("dddefault");
    }
    var ddlabelsLength = ddlabels.length;
    for (var i = 0; i < ddlabelsLength; i++) {
        ddlabels[0].classList.remove("ddlabel");
    }
}
