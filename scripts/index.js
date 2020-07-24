var grid = $('#sudoku-grid'),
    selected = $('.selected'),
    cell = $('.cell-data'),
    givenList = [[]], // list that holds all givens for the grid 
    cornerList = [[[]]], // list that will hold corner digits entered by user
    centerList = [[[]]], // list that will hold center digits entered by user
    digitsList = [[]], // list that will hold sudoku digits entered by user
    gameStart = false; // boolean indicating whether the game has started

$(function () {
    $('#generateContainer').hide();
    $('#gameContainer').hide();
});

$('#generatePuzzle').click(function() {
    $('#homeContainer').hide();
    $('#generateContainer').show();
});

$('#generateClassic').click(function() {
    $('#generateContainer').hide();
    $('#gameContainer').show();
    $('#gameControls').hide();
});

// HIGHLIGHT FUNCTION
cell.click(function(event) {
    var cell = $(event.currentTarget);
    if (!cell.hasClass("selected")) {
        if (!event.ctrlKey) {
            $('.selected').removeClass("selected");  
        }
        cell.addClass("selected");
    } else {
        cell.removeClass("selected");
    }
});

// ENTERING DIGITS
$(document).keypress(function(event) {
    if(event.keyCode == 8 || event.keyCode == 46) {
        $('.selected').html("").removeClass("sudoku-given");
    } else if (event.keyCode >= 49 && event.keyCode <= 57) {
        $('.selected').html(event.keyCode - 48).addClass("sudoku-given");
    }
});