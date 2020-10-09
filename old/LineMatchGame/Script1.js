// Checkerboard Test

var ROWS = 10;
var COLUMNS = 10;

var board;

// Square Objects
var bSquare = {
    tile: "<div class=\"tile\" onclick=\"returnId(this.id)\">" + String.fromCharCode(9724) + "</div>",
    posR: -1,
    posC: -1,
};

var wSquare = {
    tile: "<div class=\"tile\" onclick=\"returnId(this.id)\">" + String.fromCharCode(9723) + "</div>",
    posR: -1,
    posC: -1,
}

function setBoard(r, c) {
    for (var i = 0; i < r; i++) {
        if (i % 2 == 0) {
            for (var j = 0; j < c; j++) {
                if (j % 2 == 0) 
                    board[i][j] = wSquare;
                if (j % 2 == 1)
                    board[i][j] = bSquare;
                board[i][j].posR = i;
                board[i][j].posC = j;
            }
        }
        if (i % 2 == 1) {
            for (var j = 0; j < c; j++) {
                if (j % 2 == 0)
                    board[i][j] = bSquare;
                if (j % 2 == 1)
                    board[i][j] = wSquare;
                board[i][j].posR = i;
                board[i][j].posC = j;
            }
        }
    }
}

function setBoardRandom(r, c) {
    for (var i = 0; i < r; i++) {
        for (var j = 0; j < c; j++) {
            var rand = Math.round(Math.random() * 10) % 2;
            if (rand == 0)
                board[i][j] = wSquare;
            if (rand == 1)
                board[i][j] = bSquare;
            board[i][j].posR = i;
            board[i][j].posC = j;
        }
    }
}

function printBoard() {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            document.getElementById("board").innerHTML += board[i][j].tile;

        }
        document.getElementById("board").innerHTML += "<br />";
    }
    nameTileClasses(board.length, board[0].length);
}

function applyParams(rowP, colP) {
    document.getElementById("board").innerHTML = "";

    var rowSize = board.length;
    var colSize = board[0].length;

    board.length = 0;

    for (var i = 0; i < rowP; i++) {
        board.push([]);
        for (var j = 0; j < colP; j++) 
            board[i].push("");
    }

    setBoard(rowP, colP);
    printBoard();
}

function applyParamsRandom(rowP, colP) {
    document.getElementById("board").innerHTML = "";

    var rowSize = board.length;
    var colSize = board[0].length;

    board.length = 0;

    for (var i = 0; i < rowP; i++) {
        board.push([]);
        for (var j = 0; j < colP; j++)
            board[i].push("");
    }

    setBoardRandom(rowP, colP);
    printBoard();
}

function returnId(id) {
    console.log(id);
}

function nameTileClasses(c, r) {
    var allTiles = document.querySelectorAll("div.tile");
    var currentTile = 0;
    for (var i = 0; i < allTiles.length / r; i++) {
        for (var j = 0; j < allTiles.length / c; j++) {
            allTiles[currentTile].classList.add("row_" + i);
            allTiles[currentTile].classList.add("col_" + j);
            allTiles[currentTile].setAttribute("id", "tile_" + currentTile);
            currentTile++;
        }
    }
}

function initialSettings() {
    var rows = ROWS;
    var cols = COLUMNS;

    board = [];

    for (var i = 0; i < rows; i++) {
        board[i] = [];
    }

    var form = document.getElementById("options");
    form[0].value = rows;
    form[1].value = cols;

    setBoard(rows, cols);
    printBoard();
}

document.addEventListener("DOMContentLoaded", function (event) {

    initialSettings();

    document.getElementById("apply").onclick = function () {
        var optionsForm = document.getElementById("options");
        var rowParam = optionsForm[0].value;
        var colParam = optionsForm[1].value;
        applyParams(rowParam, colParam);
    };

    document.getElementById("random").onclick = function () {
        var optionsForm = document.getElementById("options");
        var rowParam = optionsForm[0].value;
        var colParam = optionsForm[1].value;
        applyParamsRandom(rowParam, colParam);
    };

    
});

//document.getElementsByClassName("tile").addEventListener("click", function () {
//    console.log("test");

//    //var posR = bSquare.posR;
//    //var posC = bSquare.posC;

//    //console.log("R: " + bposR + " C: " + posC);
//});