function initializePage() {
    document.getElementById("homeContainer").style.display = "block";
    document.getElementById("generateContainer").style.display = "none";
    document.getElementById("creationContainer").style.display = "none";
}

function hideHome() {
    document.getElementById("homeContainer").style.display = "none";
    document.getElementById("generateContainer").style.display = "block";
}

function hideGenerate() {
    document.getElementById("generateContainer").style.display = "none";
    document.getElementById("creationContainer").style.display = "block";
}

function createClassic() {
    hideGenerate();
}

var grid = document.getElementById("sudoku-grid"),
    selected = grid.getElementsByClassName("selected"),
    selectMultiple = false;

grid.addEventListener("mousedown", highlight);

document.addEventListener("mousedown", function(event) {
    if (event.ctrlKey)
        selectMultiple = true;
    else
        selectMultiple = false;
});

function highlight(cell) {
    selected = grid.getElementsByClassName("selected");
    if (cell.target.className == "cell-data") { // check if cell isn't already selected
        if (selectMultiple == false) {
            for (var i = 0; i < selected.length; i++)
                selected[i].className = "cell-data";
            cell.target.className = "cell-data selected";
        } else {
            cell.target.className = "cell-data selected";
        }   
    } else { // cell is already selected, so deselect it
        cell.target.className = "cell-data";        
    }
}