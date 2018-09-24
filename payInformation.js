if (window.location.href == "https://sis.rpi.edu/rss/twbkwbis.P_GenMenu?name=pmenu.P_PayMenu") {
    // Create a new title
    var title = document.createElement("h1");
    title.innerHTML = "Pay Information";
    document.getElementsByClassName("pagebodydiv")[0].appendChild(title);
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
