// Student Menu table creation
if (document.title == "Student Menu") {
    // Create the title of the first block
    var title = document.createElement("h2");
    title.innerHTML = "Registration Information";
    document.getElementsByClassName("pagebodydiv")[0].appendChild(title);
    // Create table itself
    var table = document.createElement("table");
    table.classList.add("maincontenttable");
    // Create rows
    var iconList = ["ballot", "add_circle_outline", "how_to_reg", "assignment"];
    var titleList = ["Check Registration Status", "Register, Add, or Drop", "Financial Responsibility Agreement", "Change Thesis/Project Credits"];
    var linkList = ["/rss/bwskrsta.P_RegsStatusDisp", "/rss/bwskfreg.P_AltPin", "/rss/ybwskfina.P_FinancialAgreement", "/rss/bwskfreg.P_ChangeCrseOpt"];
    var descriptionList = ["View time tickets, holds, SAM status, academic standing, anything that could prevent registration or restrict course selection.",
                            "Add courses based on their CRNs or drop courses you're currently taking.",
                            "Ensure you've met this agreement for each one of your semesters.",
                            "If you're engaged in a project, thesis, or dissertation, you can set or change the number of credits here."];
    createRow(iconList, titleList, linkList, descriptionList, table, 4);
    iconList = ["youtube_searched_for", "calendar_view_day", "calendar_today"];
    titleList = ["Class Search", "View Weekly Schedule, Day/Time Grid", "View Class Information"];
    linkList = ["/rss/bwskfcls.p_sel_crse_search", "/rss/bwskfshd.P_CrseSchd", "/rss/bwskfshd.P_CrseSchdDetl"];
    descriptionList = ["Search for classes by subject, credit range, part of term, course number, etc.",
                        "View a grid that displays what classes you have per week at which times.",
                        "View all the classes you're taking, along with the instructor, location, CRNs, and status."]
    createRow(iconList, titleList, linkList, descriptionList, table, 3);
    document.getElementsByClassName("pagebodydiv")[0].appendChild(table);

    // Create the title of the second block
    title = document.createElement("h2");
    title.innerHTML = "Curriculum Information";
    document.getElementsByClassName("pagebodydiv")[0].appendChild(title);
    // Create table itself
    table = document.createElement("table");
    table.classList.add("maincontenttable");
    // Create rows
    iconList = ["assignment_ind", "assessment", "assignment_returned", "assignment_late"];
    titleList = ["View Advisor and Curriculum Information", "View Grades", "View Transcript", "Request a Transcript"];
    linkList = ["/rss/bwskgstu.P_StuInfo", "/rss/bwskogrd.P_ViewTermGrde", "/rss/bwskotrn.P_ViewTermTran", "/rss/bwskwtrr.p_disp_transcript_address"];
    descriptionList = ["View various information regarding your status as a student, your advisor, and your major.",
                        "See your grades from every semester. Grades in classes you are currently in won't be in here.",
                        "An unofficial transcript that contains a history of every class you've taken.",
                        "For mailing an official transcript to whomever it be necessary."]
    createRow(iconList, titleList, linkList, descriptionList, table, 4);
    iconList = ["assignment_turned_in", "chrome_reader_mode", "class", "contact_support"];
    titleList = ["Check Transcript Request Status", "View CAPP Reports", "Degree Works", "Degree Works Tutorials"];
    linkList = ["/rss/bwskwtrr.p_disp_status_of_order", "/rss/hwskocap.P_StuSelectCompl", "/rss/DW_Student.P_SignOn", "https://info.rpi.edu/degree-works"];
    descriptionList = ["This displays a history of your transcript requests by date of order.",
                        "See your progression towards your major, regarding required courses and grades.",
                        "An alternative to CAPP for viewing progression towards your major.",
                        "A tutorial regarding how to use Degree Works."]
    createRow(iconList, titleList, linkList, descriptionList, table, 4);
    document.getElementsByClassName("pagebodydiv")[0].appendChild(table);

    // Create the title of the third block
    title = document.createElement("h2");
    title.innerHTML = "Graduation Information";
    document.getElementsByClassName("pagebodydiv")[0].appendChild(title);
    // Create table itself
    table = document.createElement("table");
    table.classList.add("maincontenttable");
    // Create rows
    iconList = ["school", "how_to_vote", "subtitles", "note"];
    titleList = ["Commencement Ceremony Participation Policy", "Apply to Graduate", "View Degree Status and Diploma Information", "View Diploma Holds"];
    linkList = ["http://registrar.rpi.edu/update.do?artcenterkey=83", "/rss/bwskgrad.p_disp_grad_term", "/rss/hwskgrad.P_StuSelectTerm?menu_choice=B", "/rss/hwskgrad.P_StuViewHolds"];
    descriptionList = ["This link is broken, as it is no longer accessible online and SIS never updates. Just be aware that it exists.",
                        "Apply for your degree.",
                        "If you've applied for a degree, that information can be viewed here.",
                        "Double check to ensure there are no holds on your diploma."]
    createRow(iconList, titleList, linkList, descriptionList, table, 4);
    document.getElementsByClassName("pagebodydiv")[0].appendChild(table);
}
