if (window.location.href == "https://sis.rpi.edu/rss/bwskgstu.P_StuInfo") {
    // Create page title
    createPageTitle("General Student Record", "datadisplaytable", 'c');

    var studentInfoTable = document.getElementsByClassName("datadisplaytable")[0];
    var studentInfoCellTH = studentInfoTable.getElementsByTagName("th");
    for (var i = 0; i < 13; i++) {
        studentInfoCellTH[i].classList.add("dddefault");
        studentInfoCellTH[i].classList.remove("ddlabel");
        studentInfoCellTH[i].style.width = "25%";
        studentInfoCellTH[i].style.fontWeight = "400";
    }

    addTableTitle(0, "2", "Student Information");

    var curriculumInfoTable = document.getElementsByClassName("datadisplaytable")[1];
    var curriculumInfoCellTH = curriculumInfoTable.getElementsByTagName("th");
    for (var i = 1; i < 10; i++) {
        curriculumInfoCellTH[i].classList.add("dddefault");
        curriculumInfoCellTH[i].classList.remove("ddlabel");
        curriculumInfoCellTH[i].style.width = "25%";
        curriculumInfoCellTH[i].style.fontWeight = "400";
    }

    curriculumInfoCellTH[0].classList.add("ddheader");
    curriculumInfoCellTH[0].classList.remove("ddlabel");
    curriculumInfoCellTH[0].innerHTML = curriculumInfoCellTH[0].innerHTML + ": " + curriculumInfoTable.getElementsByTagName("td")[0].innerHTML;
    curriculumInfoTable.getElementsByTagName("td")[0].remove();
    curriculumInfoTable.style.marginTop = "20px";

    addTableTitle(1, "2", "Curriculum Information");
}
