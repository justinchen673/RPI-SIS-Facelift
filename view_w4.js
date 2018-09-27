if (window.location.href == "https://sis.rpi.edu/rss/bwpkxtxs.P_ViewW4") {
    // Create page title
    createPageTitle("W-4 Tax Exemptions/Allowances", "infotextdiv", 'c');

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[0].innerHTML = "<BLOCKQUOTE><strong>Your W-4 information determines the amount of Federal Tax that is withheld from your pay.<br><br>If Status = Active - Your income is reportable and taxable per the filing status and number of allowances.<br>If Status = Exempt - You are considered a non-resident alien for tax purposes.<br>If Status = Waived - Your income is reportable but no tax is withheld.<br><br>If you would like information regarding Income Tax.  Withholding Rates click on the IRS Forms and Publications link at the bottom of this page and select Publication 15. A W4 Form must be submitted to the Payroll Office if you would like to change your Federal Withholding information (including change in filing status, number of allowances or additional withholding). Please print, complete and forward to the Payroll Office via fax (518) 276-2151 or mail to Rensselaer Polytechnic Institute, Payroll Office, Rice Building 5th floor, 110 8th Street, Troy, NY 12180.</strong></BLOCKQUOTE>";

    addTableTitle(0, "2", "Federal Income Tax");
    addDefaultCellStyle("ddlabel");

    document.getElementsByClassName("pagefooterlinks")[0].remove();
}
