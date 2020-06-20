// BASIC GRID FUNCTIONALITY //
var grid = document.getElementById("sudoku-grid"),
    selected = grid.getElementsByClassName("selected");

// LISTENERS //
grid.addEventListener("mousedown", highlight);
document.addEventListener("keydown", enterNum);

// GAME LOGIC //
// TODO: givens array, corners array, centers array, digits array
var givenList = [[]], // list that holds all givens for the grid 
    cornerList = [[[]]], // list that will hold corner digits entered by user
    centerList = [[[]]], // list that will hold center digits entered by user
    digitsList = [[]], // list that will hold sudoku digits entered by user
    gameStart = false; // boolean indicating whether the game has started

// TODO: Queue for undo and redo

/*
Hide all divs other than the homepage upon loading / refreshing the page
*/
function initializePage() {
    document.getElementById("homeContainer").style.display = "block";
    document.getElementById("generateContainer").style.display = "none";
    document.getElementById("gameContainer").style.display = "none";
}

/*
Hide the come page and show the options page
*/
function hideHome() {
    document.getElementById("homeContainer").style.display = "none";
    document.getElementById("generateContainer").style.display = "block";
}

/*
Hide the options page and show the creation page
*/
function hideGenerate() {
    document.getElementById("generateContainer").style.display = "none";
    document.getElementById("gameContainer").style.display = "block";
    document.getElementById("gameControls").style.display = "none";
}

/*
Create a grid based on a classic 9 by 9 sudoku grid
*/
function createClassic() {
    hideGenerate();
}

/*
Load the givens into the sudoku grid and load the div for playing the game
*/
function playGame() {
    document.getElementById("gameControls").style.display = "block";
    document.getElementById("insertHeader").style.display = "none";
    document.getElementById("startGame").style.display = "none";
    var currID = "";
    // load the givens into the given list
    for (var row = 1; row <= 9; row++) {
        for (var col = 1; col <= 9; col++) {
            currID = "r" + row.toString(10) + "c" + col.toString(10);
            if (document.getElementById(currID).innerHTML != "") {
                givenList[row-1][col-1] = parseInt(document.getElementById(currID).innerHTML);
            }
        }
    }
    gameStart = true;
}

/*
Functionality for selecting cells within the grid based on user click
*/
function highlight(cell) {
    if (!cell.target.className.includes("selected")) { // check if cell isn't already selected
        if (!cell.ctrlKey) { // check if we do not want to select multiple cells
            
            selected = grid.getElementsByClassName("selected");
            
            while (selected[0] != null) { // remove all of the selected cells from the grid
                if (selected[0].className.includes("sudoku-given"))
                    selected[0].className = "cell_data sudoku-given";
                else
                    selected[0].className = "cell-data";
                selected = grid.getElementsByClassName("selected");
            }
            
            cell.target.className += " selected";

        } else { // add to selected list without removing previously selected cells
            cell.target.className += " selected";
        }   
    } else { // cell is already selected, so deselect it
        if (cell.target.className.includes("sudoku-given"))
            cell.target.className = "cell_data sudoku-given";
        else
            cell.target.className = "cell_data";        
    }
}

/*
Functionality for entering and deleting a number from a given cell based on keyboard input
*/
function enterNum(event) {
    if (!(gameStart && event.target.className.includes("sudoku-given"))) { // TODO: fix this garbage lmao
        if (event.keyCode == 8 || event.keyCode == 46) {
            for (var i = 0; i < selected.length; i++) {
                selected[i].innerHTML = "";
                selected[i].className = "cell-data selected";
            }
        } else if (event.keyCode >= 49 && event.keyCode <= 57) { // check if 1-9 was pressed
            selected = grid.getElementsByClassName("selected"); // grab all the selected cells
            for (var i = 0; i < selected.length; i++) { // put the number pressed into the cells
                selected[i].innerHTML = event.keyCode - 48;
                if (!gameStart)
                    insertGiven(selected[i]);
            }
        }
    }
}

function insertGiven(currCell) {
    if (!currCell.className.includes("sudoku-given"))
        currCell.className += " sudoku-given";
}

function extractRowCol(id) {
    row = parseInt(id.substring(1,2));
    col = parseInt(id.substring(3,4));
    return row, col;
}
