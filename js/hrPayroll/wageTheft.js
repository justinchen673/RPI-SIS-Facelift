if (window.location.href == "https://sis.rpi.edu/rss/ybwpkwtpa.P_WageTheftMenu") {
    // Create page title
    createPageTitle("NY State Wage Theft Prevention Notification", "infotextdiv", 'c');

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[0].innerHTML = "On December 13, 2010, former New York State Governor David Paterson signed into law the Wage Theft Prevention Act, which imposes new notification and recordkeeping requirements for employers. This law requires Rensselaer to provide an annual notice to you, informing you of your current pay rate, payday and requiring your acknowledgement of this information. This notice is being provided to you in English. However, the notice is also available in Chinese, Korean, Spanish, Russian, Haitian Creole or Polish.<br><br>Select a position from the list below to review wage and compensation information.";

    document.getElementsByClassName("infotextdiv")[1].remove();
}
