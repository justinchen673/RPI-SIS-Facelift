if (window.location.href == "https://sis.rpi.edu/rss/twbkwbis.P_GenMenu?name=pmenu.P_MainMnu") {
    // Create table itself
    var table = document.createElement("table");
    table.classList.add("maincontenttable");

    document.getElementsByClassName("infotexttable")[0].innerHTML = "<BLOCKQUOTE><strong>The information provided on this site does not constitute an implied or expressed contract, guarantee or assurance of employment or any right to an employment-related benefit or procedure. The actual terms of the various employee benefit plans are stated in and governed by the formal plan documents.</strong></BLOCKQUOTE>";

    // Create rows
    var iconList = ["av_timer", "queue", "new_releases", "money_off"];
    var titleList = ["Time Sheet", "Tax Forms", "Pay Information", "Benefits and Deductions"];
    var linkList = ["/rss/bwpktais.P_SelectTimeSheetRoll", "/rss/twbkwbis.P_GenMenu?name=pmenu.P_TaxMenu", "/rss/twbkwbis.P_GenMenu?name=pmenu.P_PayMenu", "/rss/twbkwbis.P_GenMenu?name=pmenu.P_BenMenu"];
    var descriptionList = ["Log your working hours. Payments occur every two weeks.",
                            "View federal W-4 information, state tax exemptions/allowances, or your W-2 form. As always, please consult your tax advisor or accountant for any tax advice.",
                            "View your pay stub, earnings history, and deductions history.",
                            "View your retirement plans, medical, dental and vision plans, flex spending accounts, life insurance and long term disability benefits."];
    createRow(iconList, titleList, linkList, descriptionList, table, 4);
    iconList = ["account_balance", "security"];
    titleList = ["Leave Balances and History", "NY State Wage Theft Prevention Notification"];
    linkList = ["/rss/bwpkeinf.P_ViewLeaveBalances", "/rss/ybwpkwtpa.P_WageTheftMenu"];
    descriptionList = ["View your leave accruals, usage and balances.",
                        "This law requires Rensselaer to provide an annual notice to you, informing you of your current pay rate, payday and requiring your acknowledgement of this information."];
    createRow(iconList, titleList, linkList, descriptionList, table, 2);
    document.getElementsByClassName("pagebodydiv")[0].appendChild(table);
}
