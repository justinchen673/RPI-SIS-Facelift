if (window.location.href == "https://sis.rpi.edu/rss/twbkwbis.P_GenMenu?name=pmenu.P_PayMenu") {
    // Create a new title
    createPageTitle("Pay Information", "infotextdiv", 'c');

    document.getElementsByClassName("infotexttable")[0].innerHTML = "NOTICE FOR DIRECT DEPOSITIRS:<br>There have been changes to the payment system rules for direct deposit of payroll. If you receive your payroll via direct deposit at a U.S. financial institution and then have the entire payroll amount forwarded to a financial institution in another country please advise the payroll department 276-6926. There are formatting requirements for these transactions that the company needs to follow. It will not impact your payroll.";

    // Create table itself
    var table = document.createElement("table");
    table.classList.add("maincontenttable");
    // Create rows
    var iconList = ["card_giftcard", "receipt", "money_off"];
    var titleList = ["Pay Stub", "Earnings History", "Deductions History"];
    var linkList = ["/rss/bwpkhstb.P_ChoosePayStubYear", "/rss/bwpkhpay.P_ChooseEarnings", "/rss/bwpkhded.P_ChooseDedn"];
    var descriptionList = ["View your pay stub detail including direct deposit information.",
                            "View your earnings history by type and date range.",
                            "View your deductions history by type and date range."];
    createRow(iconList, titleList, linkList, descriptionList, table, 3);
    document.getElementsByClassName("pagebodydiv")[0].appendChild(table);
}
