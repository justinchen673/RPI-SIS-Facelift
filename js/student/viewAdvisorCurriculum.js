if (window.location.href == "https://sis.rpi.edu/rss/bwskgstu.P_StuInfo") {
    // Create page title
    createPageTitle("General Student Record", "datadisplaytable", 'c');

    var curriculumInfoTable = document.getElementsByClassName("datadisplaytable")[1];
    var curriculumInfoCellTH = curriculumInfoTable.getElementsByTagName("th");
    addDefaultCellStyle("ddlabel");

    curriculumInfoCellTH[0].classList.add("ddheader");
    curriculumInfoCellTH[0].classList.remove("dddefault");
    curriculumInfoCellTH[0].innerHTML = curriculumInfoCellTH[0].innerHTML + ": " + curriculumInfoTable.getElementsByTagName("td")[0].innerHTML;
    curriculumInfoTable.getElementsByTagName("td")[0].remove();
    curriculumInfoTable.style.marginTop = "20px";

    addTableTitle(0, "2", "Student Information");
    addTableTitle(1, "2", "Curriculum Information");
}
