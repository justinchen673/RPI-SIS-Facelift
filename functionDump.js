//Used to color hover on main page refernces link list
function coloringHandler() {
    this.dataset.initialInlineColor = this.style.color;
    this.style.color = '#990011';
}

function decoloringHandler() {
    this.style.color = this.dataset.initialInlineColor;
}

function createRow(iconList, titleList, linkList, descriptionList, table, numBlocks) {
    var row = document.createElement("tr");
    for (var i = 0; i < numBlocks; i+=1) {
        var cell = document.createElement("td");
        var bigCellDiv = document.createElement("div");
        cell.classList.add("custommenucell");
        var icon = document.createElement("i");
        var hyperLinkI = document.createElement("a");
        icon.innerHTML = iconList[i];
        icon.classList.add("material-icons");
        hyperLinkI.href = linkList[i];
        hyperLinkI.style.float = "left";
        hyperLinkI.style.height = "100%";
        hyperLinkI.appendChild(icon);
        bigCellDiv.appendChild(hyperLinkI);
        var cellDiv = document.createElement("div");
        cellDiv.style.float = "left";
        cellDiv.style.width = "250px";
        var titleP = document.createElement("p");
        var hyperLinkP = document.createElement("a");
        hyperLinkP.href = linkList[i];
        titleP.classList.add("titleP");
        hyperLinkP.innerHTML = titleList[i];
        hyperLinkP.style.color = "#515151";
        titleP.appendChild(hyperLinkP);
        cellDiv.appendChild(titleP);
        var p2 = document.createElement("p");
        p2.classList.add("supportText");
        p2.innerHTML = descriptionList[i];
        cellDiv.appendChild(p2);
        bigCellDiv.appendChild(cellDiv);
        bigCellDiv.style.margin = "auto";
        bigCellDiv.style.width = "303px";
        cell.appendChild(bigCellDiv);

        row.appendChild(cell);
    }
    table.appendChild(row);
}
