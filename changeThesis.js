if (window.location.href == "https://sis.rpi.edu/rss/bwskfreg.P_ChangeCrseOpt") {
    // Create page title
    document.getElementsByClassName("pagebodydiv")[0].getElementsByTagName("br")[0].remove();
    var title = document.createElement("h1");
    title.innerHTML = "Update Project, Thesis or Dissertation Credits";
    document.getElementsByClassName("pagebodydiv")[0].insertBefore(title, document.getElementsByTagName("form")[1]);

    // Adjustments to the paragraph above the table
    document.getElementsByClassName("infotexttable")[0].innerHTML = "<BLOCKQUOTE><strong>If you have registered for a Project, Thesis or Dissertation Course and you would like to set/change the number of credits you can do so from this screen. Note: You can use the Menu button or the links at the bottom of this page to navigate to another page.</strong></BLOCKQUOTE>";

    var tables = document.getElementsByClassName("dataentrytable");
    var initLength = tables.length;
    for (var i = 0; i < initLength; i++) {
        tables[0].classList.add("datadisplaytable");

        for (var j = 0; j < 4; j++) {
            var currentRow = tables[0].getElementsByTagName("tr")[j];

            var extraTD = currentRow.getElementsByTagName("td")[2];
            if (extraTD != null) {
                extraTD.remove();
            }

        }

        addTableTitle(i, "2", tables[0].getElementsByClassName("captiontext")[0].innerHTML);

        for (var j = 1; j < 9; j++) {
            tables[0].getElementsByTagName("td")[j].classList.add("dddefault");
            if (j % 2 == 1) {
                tables[0].getElementsByTagName("td")[j].style.width = "25%";
            }
        }
        tables[0].classList.remove("dataentrytable");
    }
}
