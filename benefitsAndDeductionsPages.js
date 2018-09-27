if (window.location.href == "https://sis.rpi.edu/rss/bwpkdcmn.P_DispDednCurRet") {
    // Create page title
    createPageTitle("Retirement Plans Information", "infotextdiv", 'c');

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[0].innerHTML = "<BLOCKQUOTE><strong>This is a list of your retirement contributions. Select Contributions or Deductions for a list of contribution activity. Please note the annual supplemental limit is the total amount that may be contributed across all supplemental retirement plans (457b plan excluded).<br><br>Note: Detailed information is available after 1992 only.</strong></BLOCKQUOTE>";
}
if (window.location.href == "https://sis.rpi.edu/rss/bwpkdcmn.P_DispDednCurHlt") {
    // Create page title
    createPageTitle("Medical and Dental Benefit Information", "infotextdiv", 'c');

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[0].innerHTML = "<BLOCKQUOTE><strong>This is a list of all of your health benefits.<br>Changes to medical and dental benefits and deductions may only occur during open enrollment or if there is a qualifying event. If you have any medical or dental related questions please contact the Division of Human Resources at (518) 276-6302 or fill out the Human Resources Contact Form.</strong></BLOCKQUOTE>";
}
if (window.location.href == "https://sis.rpi.edu/rss/bwpkdcmn.P_DispDednCurFlxs") {
    // Create page title
    createPageTitle("Flex Spending Account Information", "infotextdiv", 'c');

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[0].innerHTML = '<BLOCKQUOTE><strong>Below is your current spending account information.<br>For information about Flexible (Medical and/or Dependent Care) Spending Accounts please visit Flexible Spending Accounts, and for information on current balances or outstanding claims please contact <a href="https://rpi.connectyourcare.com/portal/CC?rnd=1397068192558">ConnectYourCare.</a></strong></BLOCKQUOTE>';
}
if (window.location.href == "https://sis.rpi.edu/rss/bwpkdcmn.P_DispDednCurMisc") {
    // Create page title
    createPageTitle("Additional Benefits", "infotextdiv", 'c');

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[0].innerHTML = "<BLOCKQUOTE><strong>This is a list of your additional benefits.<br><br>Note: Rensselaer provides Basic Life Insurance to eligible employees. This program provides term life insurance equal to 2.25 times your July 1 rate of pay or your prior calendar year Rensselaer earnings.</strong></BLOCKQUOTE>";
}
