if (window.location.href == "https://sis.rpi.edu/rss/bwskogrd.P_ViewGrde") {
    // Create page title
    document.getElementsByClassName("pagebodydiv")[0].getElementsByTagName("br")[0].remove();
    var title = document.createElement("h1");
    title.innerHTML = "Final Grades";
    document.getElementsByClassName("pagebodydiv")[0].insertBefore(title, document.getElementsByClassName("infotextdiv")[0]);

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[0].innerHTML = "<BLOCKQUOTE><strong>For undergraduates who have repeated courses - Recalculation of GPAs to account for repeated courses will occur at the end of the term after grade processing for all students has been completed.</strong></BLOCKQUOTE>";

    //Add some margin below first table
    document.getElementsByClassName("datadisplaytable")[0].style.marginBottom = "20px";

    // Change style of the cells
    var studentInfoTable = document.getElementsByClassName("datadisplaytable")[0];
    var studentInfoCellTH = studentInfoTable.getElementsByTagName("th");
    for (var i = 1; i < 11; i++) {
        studentInfoCellTH[i].classList.add("dddefault");
        studentInfoCellTH[i].classList.remove("ddlabel");
        studentInfoCellTH[i].style.width = "25%";
        studentInfoCellTH[i].style.fontWeight = "400";
    }

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

    for (var i = 0; i < 4; i++) {
        document.getElementsByClassName("ddlabel")[0].classList.add("dddefault");
        document.getElementsByClassName("ddlabel")[0].style.fontWeight = "400";
        document.getElementsByClassName("ddlabel")[0].classList.remove("ddlabel");
    }

    addTableTitle(2, "7", "Undergraduate Summary");
}
