if (window.location.href == "https://sis.rpi.edu/rss/bwpkxtxs.P_ViewState") {
    // Create page title
    createPageTitle("State Tax Exemptions/Allowances", "infotextdiv", 'c');

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[0].innerHTML = "<BLOCKQUOTE><strong>Your State Tax Exemptions/Allowances information determines the amount of State Tax that is withheld from your pay. A New York State Employee’s Withholding Allowance Certificate Form (IT-2104) must be submitted to the Payroll Office if you would like to change your New York State withholding information (including change in filing status, number of allowances or additional withholding). A State of Connecticut Employee’s Withholding Certificate Form (CT-W4) must be submitted to the Payroll Office if you would like to change your State of Connecticut withholding information (including change in filing status, number of allowances or additional withholding). Please print, complete and forward to the Payroll Office via fax (518) 276-2151 or mail to Rensselaer Polytechnic Institute, Payroll Office, Rice Building 5th floor, 110 8th Street, Troy, NY 12180. </strong></BLOCKQUOTE>";

    addTableTitle(0, "2", "New York State Tax");
    addDefaultCellStyle("ddlabel");

    document.getElementsByClassName("pagefooterlinks")[0].remove();

    var rightAligned = document.getElementsByClassName("rightaligntext");
    for (var i = 0; i < 3; i++) {
        rightAligned[1].classList.remove("rightaligntext");
    }
}
