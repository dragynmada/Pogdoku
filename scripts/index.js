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
grid.addEventListener("keypress", enterNum);

function highlight(cell) {
    if (cell.target.className == "cell-data") { // check if cell isn't already selected
        if (!cell.ctrlKey) { // check if we do not want to select multiple cells
            selected = grid.getElementsByClassName("selected");
            for (var i = 0; i < selected.length; i++) {
                selected[i].className = "cell-data";
            }
            cell.target.className = "cell-data selected";

        } else { // add to the selected list
            cell.target.className = "cell-data selected";
        }   
    } else { // cell is already selected, so deselect it
        cell.target.className = "cell-data";        
    }
}

function enterNum(event) {
    alert(event.keyCode);
    if (event.keyCode >= 49 && event.keyCode <= 57) {
        selected = grid.getElementsByClassName("selected");
        for (var i = 0; i < selected.length; i++)
            selected[i].innerHTML = event.keyCode - 48;
    }
}