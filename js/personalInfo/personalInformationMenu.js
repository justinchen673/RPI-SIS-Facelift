if (document.title == "Personal Information Menu") {
    // Create table itself
    var table = document.createElement("table");
    table.classList.add("maincontenttable");
    // Create rows
    var iconList = ["lock", "security", "gps_fixed", "contact_phone"];
    var titleList = ["Change PIN", "Change Security Question", "Update your Address", "Update your Emergency Contacts"];
    var linkList = ["/rss/twbkwbis.P_ChangePin", "/rss/twbkwbis.P_SecurityQuestion", "/rss/bwgkogad.P_SelectAtypUpdate", "/rss/bwgkoemr.P_SelectEmrgContacts"];
    var descriptionList = ["Change the password required to enter your accounut.",
                            "Change the security question you use when you forget your password/PIN.",
                            "This allows you to edit either your permanent address or your campus address.",
                            "Add new emergency contacts and view the ones you already have."];
    createRow(iconList, titleList, linkList, descriptionList, table, 4);
    iconList = ["wc", "accessibility_new"];
    titleList = ["Update your Marital Status", "Veterans Classifications"];
    linkList = ["/rss/bwgkomar.P_SelectMtypUpdate", "/rss/bwgkvets.P_DispClass"];
    descriptionList = ["Here you can update your marital status within the system. This does NOT affect tax information or benefits.",
                        "RPI requires government contractors to take affirmative action to employ and advance in employment veterans."];
    createRow(iconList, titleList, linkList, descriptionList, table, 2);
    document.getElementsByClassName("pagebodydiv")[0].appendChild(table);
}
