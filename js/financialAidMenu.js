if (window.location.href == "https://sis.rpi.edu/rss/twbkwbis.P_GenMenu?name=bmenu.P_FinAidMainMnu") {
    // Create table itself
    var table = document.createElement("table");
    table.classList.add("maincontenttable");
    // Create rows
    var iconList = ["done_all", "event", "receipt", "date_range"];
    var titleList = ["Eligibility & Requirements", "Award Package by Aid Year", "Account Summary By Semester", "Award Payment Schedule for Award Year"];
    var linkList = ["/rss/bwrkelig.P_DispEligReq", "/rss/bwrkrhst.P_DispAwdAidYear", "/rss/bwskoacc.P_ViewAcct", "/rss/bwrkpays.P_DispPaySched"];
    var descriptionList = ["See if you qualify for financial aid.",
                            "View how much financial aid you're receiving by the semester.",
                            "See all charges and payments by the semester.",
                            "Your financial aid disbursement schedule reflects expected payment for the purpose of reducing your outstanding school charges."];
    createRow(iconList, titleList, linkList, descriptionList, table, 4);
    iconList = ["line_weight", "supervised_user_circle"];
    titleList = ["Award History", "Loan Application History"];
    linkList = ["/rss/bwrkrhst.P_DispAwdHst", "/rss/bwrklhst.P_DispLoanHst"];
    descriptionList = ["View how much financial aid you're receiving by the year.",
                        "View all accounts of applications for loans."];
    createRow(iconList, titleList, linkList, descriptionList, table, 2);
    document.getElementsByClassName("pagebodydiv")[0].appendChild(table);
}
