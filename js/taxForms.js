if (window.location.href == "https://sis.rpi.edu/rss/twbkwbis.P_GenMenu?name=pmenu.P_TaxMenu") {
    // Create a new title
    var title = document.createElement("h2");
    title.innerHTML = "Tax Forms";
    document.getElementsByClassName("pagebodydiv")[0].appendChild(title);
    // Create table itself
    var table = document.createElement("table");
    table.classList.add("maincontenttable");
    // Create rows
    var iconList = ["account_balance", "account_balance_wallet", "assessment", "track_changes"];
    var titleList = ["W-4 Federal Employee’s Withholding Allowance", "State Tax Exemptions/Allowances", "W-2 Year End Earnings Statement", "W-2c Corrected Wage and Tax Statement"];
    var linkList = ["/rss/bwpkxtxs.P_ViewW4", "/rss/bwpkxtxs.P_ViewState", "/rss/bwpkxtxs.P_ChooseW2Key", "/rss/bwpkxtxs.P_ChooseW2cKey"];
    var descriptionList = ["Your W-4 information determines the amount of Federal Tax that is withheld from your pay.",
                            "Your State Tax Exemptions/Allowances information determines the amount of State Tax that is withheld from your pay.",
                            "Form W-2 is used to report wages paid to employees and the taxes withheld from them.",
                            "A W2C form is used for tax filing and reporting services."];
    createRow(iconList, titleList, linkList, descriptionList, table, 4);
    iconList = ["assignment_turned_in"];
    titleList = ["Electronic W-2 Consent"];
    linkList = ["/rss/bwpkxtxs.P_W2Consent"];
    descriptionList = ["By consenting to receive your W-2 electronically, you agree to return to this site between January 31st and April 15th each year to print your W-2 form online."];
    createRow(iconList, titleList, linkList, descriptionList, table, 1);
    document.getElementsByClassName("pagebodydiv")[0].appendChild(table);
}
