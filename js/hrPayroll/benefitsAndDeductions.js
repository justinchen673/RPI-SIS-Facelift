if (window.location.href == "https://sis.rpi.edu/rss/twbkwbis.P_GenMenu?name=pmenu.P_BenMenu") {
    // Create a new title
    createPageTitle("Benefits and Deductions", "infotextdiv", 'f');
    // Create table itself
    var table = document.createElement("table");
    table.classList.add("maincontenttable");
    // Create rows
    var iconList = ["home", "local_hospital", "credit_card", "spa"];
    var titleList = ["Retirement Plans", "Medical, Dental and Vision Benefit Information", "Flex Spending Accounts", "Additional Benefits"];
    var linkList = ["/rss/bwpkdcmn.P_DispDednCurRet", "/rss/bwpkdcmn.P_DispDednCurHlt", "/rss/bwpkdcmn.P_DispDednCurFlxs", "/rss/bwpkdcmn.P_DispDednCurMisc"];
    var descriptionList = ["View retirement information and link to retirement providers' websites.",
                            "View medical, dental and vision information and link to providers' websites.",
                            "View flexible spending accounts and link to the flexible spending administrator's website.",
                            "View life insurance, disability and link to insurance providers' websites."];
    createRow(iconList, titleList, linkList, descriptionList, table, 4);
    document.getElementsByClassName("pagebodydiv")[0].appendChild(table);
}
