if (window.location.href == "https://sis.rpi.edu/rss/bwskogrd.P_ViewGrde") {
    // Create page title
    createPageTitle("Final Grades", "infotextdiv", 'c');

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[0].innerHTML = "<BLOCKQUOTE><strong>For undergraduates who have repeated courses - Recalculation of GPAs to account for repeated courses will occur at the end of the term after grade processing for all students has been completed.</strong></BLOCKQUOTE>";

    //Add some margin below first table
    document.getElementsByClassName("datadisplaytable")[0].style.marginBottom = "20px";

    // Change style of the cells
    var studentInfoTable = document.getElementsByClassName("datadisplaytable")[0];
    var studentInfoCellTH = studentInfoTable.getElementsByTagName("th");
    addDefaultCellStyle("ddlabel");

    addTableTitle(0, "2", "Student Information");
    studentInfoCellTH[0].classList.add("ddheader");
    studentInfoCellTH[0].classList.remove("ddlabel");
    studentInfoCellTH[0].innerHTML = studentInfoCellTH[0].innerHTML + ": " + studentInfoTable.getElementsByTagName("td")[1].innerHTML;
    studentInfoTable.getElementsByTagName("td")[1].remove();

    addTableTitle(1, "11", "Undergraduate Course Work");

    document.getElementsByClassName("dddead")[5].classList.add("ddheader");
    document.getElementsByClassName("dddead")[4].remove();
    document.getElementsByClassName("dddead")[3].remove();
    document.getElementsByClassName("dddead")[2].remove();
    document.getElementsByClassName("dddead")[1].remove();
    document.getElementsByClassName("dddead")[0].remove();

    addTableTitle(2, "7", "Undergraduate Summary");
}
