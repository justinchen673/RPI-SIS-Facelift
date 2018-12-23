if (window.location.href == "https://sis.rpi.edu/rss/bwgkogad.P_SelectAtypUpdate") {
    // Create page title
    createPageTitle("Update Address", "infotextdiv", 'c');

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[0].innerHTML = "Update an existing address by selecting the link next to the corresponding address. Insert a new address by choosing the address type from the list and selecting Submit.<br><br>Faculty and Staff: You must also fill out the address change form located <a href='http://www.rpi.edu/dept/hr/forms/NameAddrChange.pdf'>here</a> and submit it to Human Resources to ensure that your address is updated in various other systems.<br><br>Students: Do not enter your residence hall address as your local address.";
}
