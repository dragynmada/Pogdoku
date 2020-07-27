var grid = $('#sudoku-grid'),
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

$('#startGame').click(function() {
    $('#gameControls').show();
    $('#insertHeader').hide();
    $('#startGame').hide();
    $('#playContainer').addClass("center-vertical");
});

var down = false;
$(document).mousedown(function() {
    down = true;
}).mouseup(function() {
    down = false;
});

// HIGHLIGHT FUNCTIONS
cell.mouseover(function(event) {
    if (down) {
        var cell = $(event.target);
        if (cell.hasClass("selected"))
            cell.removeClass("selected");
        else 
            cell.addClass("selected");
    }
}).mousedown(function(event) {
    var cell = $(event.target);
    if (cell.hasClass("selected"))
        cell.removeClass("selected")
    else {
        if (!event.ctrlKey)
            $('.selected').removeClass("selected");
        cell.addClass("selected");
    }
});

// ENTERING DIGITS
$(document).keydown(function(event) {
    if(event.keyCode == 8 || event.keyCode == 46) {
        $('.selected').html("").removeClass("sudoku-given");
    } else if (event.keyCode >= 49 && event.keyCode <= 57) {
        $('.selected').html(event.keyCode - 48).addClass("sudoku-given");
    }
});

$('#deleteNum').click(function() {
    $('.selected').html("");
})