if (document.title == "Main Menu") {
    // Create table itself
    var table = document.createElement("table");
    table.classList.add("maincontenttable");
    // Create rows
    var iconList = ["face", "account_circle", "directions_car", "local_atm"];
    var titleList = ["Student Menu", "Personal Information", "Parking Main Menu", "Human Resources/Payroll Menu"];
    var linkList = ["/rss/twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu", "/rss/twbkwbis.P_GenMenu?name=bmenu.P_GenMnu", "/rss/bosscars.bosscars_home", "/rss/twbkwbis.P_GenMenu?name=pmenu.P_MainMnu"];
    var descriptionList = ["Add and drop classes, view your schedule, look for classes, view grades, etc.",
                            "Change your pin or security question, update your address or emergency contacts, etc.",
                            "Apply for permits and view the disclaimer.",
                            "See time sheets, tax forms, pay information, benefits and deductions, etc."];
    createRow(iconList, titleList, linkList, descriptionList, table, 4);
    iconList = ["attach_money"];
    titleList = ["Financial Aid"];
    linkList = ["/rss/twbkwbis.P_GenMenu?name=bmenu.P_FinAidMainMnu"];
    descriptionList = ["See if you qualify for financial aid and view your aid per semester or per year."];
    createRow(iconList, titleList, linkList, descriptionList, table, 1);
    document.getElementsByClassName("pagebodydiv")[0].appendChild(table);
}
