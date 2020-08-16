var grid = $('#sudoku-grid'),
    cell = $('.cell-data'),
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
    gameStart = true;
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
    if (!gameStart) {
        if(event.keyCode == 8 || event.keyCode == 46) {
            $('.selected').html("").removeClass("sudoku-given");
        } else if (event.keyCode >= 49 && event.keyCode <= 57) {
            $('.selected').html(event.keyCode - 48).addClass("sudoku-given");
        }
    } else {
        if(event.keyCode == 8 || event.keyCode == 46) {
            $(".selected").each(function() {
                if (!$(this).hasClass("sudoku-given"))
                    $(this).html("");
            })
        } else if (event.keyCode >= 49 && event.keyCode <= 57) {
            $(".selected").each(function() {
                if (!$(this).hasClass("sudoku-given"))
                    $(this).html(event.keyCode - 48);
            })
        }
    }
    
});

$('#delete-option').click(function() {
    $(".selected").each(function() {
        if (!$(this).hasClass("sudoku-given"))
            $(this).html("");
    })
})

$('.option-btn').click(function(event) {
    $('.option-btn').removeClass("active");
    $(event.target).addClass("active");
});