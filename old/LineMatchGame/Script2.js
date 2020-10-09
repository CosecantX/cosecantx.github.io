// Checkerboard Test

var ROWS = 10;
var COLUMNS = 10;

var testMovePlus = 2;

var board = [];

var lineCount = 0;
var initialScore = lineCount;
var moves;

// Square Objects
var bSquare = {
    tile: "<div class=\"tile b\"></div>",
    line: false,
    color: 'b',
    shape: 'square'
};

var wSquare = {
    tile: "<div class=\"tile w\"></div>",
    line: false,
    color: 'w',
    shape: 'square'
}

var bSmile = {
    tile: "<div class=\"tile b smile\">"
        + String.fromCharCode(9733) + "</div>",
    line: false,
    color: 'b',
    shape: 'smile'
};

var wSmile = {
    tile: "<div class=\"tile w smile\">"
        + String.fromCharCode(9733) + "</div>",
    line: false,
    color: 'w',
    shape: 'smile'
}

var xSquareB = {
    tile: "<div class=\"tile x b\"></div>",
}

var xSquareW = {
    tile: "<div class=\"tile x w\"></div>",
}

function setBoard(r, c) {
    for (var i = 0; i < (r * c); i++) {
        var rand = Math.round(Math.random() * 100);
        if (rand < 49)
            board[i] = Object.assign({}, wSquare);
        if (rand > 50)
            board[i] = Object.assign({}, bSquare);
        if (rand == 49)
            board[i] = Object.assign({}, wSmile);
        if (rand == 50)
            board[i] = Object.assign({}, bSmile);
    }
}

function printBoard(r, c) {
    for (var i = 0; i < (r * c); i++) {
        var rand = Math.round(Math.random() * 2000);
        if (rand == 100 && board[i].color == 'b')
            board[i] = Object.assign({}, bSmile);
        if (rand == 100 && board[i].color == 'w')
            board[i] = Object.assign({}, wSmile);
    }

    document.getElementById("board").innerHTML = "";
    for (var i = 0; i < (r * c); i++) {
        if (i % c == 0 && i > 0)
            document.getElementById("board").innerHTML += "<br />";
        document.getElementById("board").innerHTML += board[i].tile;
    }
    console.log("printed");

    allTiles = document.getElementsByClassName("tile");
    var currentTile = 0;
    for (var i = 0; i < allTiles.length; i++) {
        allTiles[currentTile].setAttribute("onclick", "returnId(this.id, " + r + ", " + c + ")");
        currentTile++;
    }

    nameTileClasses();

    document.getElementById("score").innerHTML = "Score: " + lineCount;

    document.getElementById("moves").innerHTML = "Moves: " + moves;

    document.getElementById("highScore").innerHTML = "High Score: " + localStorage.highScore;
}

function applyParamsRandom(r, c) {
    document.getElementById("board").innerHTML = "";

    board.length = 0;

    for (var i = 0; i < (r * c); i++) {
        board.push("");
    }

    setBoard(r, c);
    printBoard(r, c);
}

function nameTileClasses() {
    var allTiles = document.querySelectorAll("div.tile");
    var currentTile = 0;
    for (var i = 0; i < allTiles.length; i++) {
        allTiles[currentTile].setAttribute("id", "tile_" + currentTile);
        currentTile++;
    }
}

function initialSettings() {
    var rows = ROWS;
    var cols = COLUMNS;

    moves = parseInt((rows * columns) / 10);

    board = [];

    for (var i = 0; i < (rows * cols); i++) {
        board[i] = "";
    }

    document.getElementById("rows").value = rows;
    document.getElementById("cols").value = cols;

    setBoard(rows, cols);
    printBoard(rows, cols);
}


function returnId(id, r, c) {
    if (moves > 0) {
        moves--;

        var id = id.replace("tile_", "");

        if (parseInt(id) == 0) {                                        // Top left corner
            swapSquares(parseInt(id));
            swapSquares(parseInt(id) + 1);
            swapSquares(parseInt(id) + parseInt(c));
        }
        else if (parseInt(id) == parseInt(c) - 1) {                     // Top right corner
            swapSquares(parseInt(id));
            swapSquares(parseInt(id) - 1);
            swapSquares(parseInt(id) + parseInt(c));
        }
        else if (parseInt(id) == (parseInt(c) - 1) * parseInt(r)) {     // Bottom left corner
            swapSquares(parseInt(id));
            swapSquares(parseInt(id) + 1);
            swapSquares(parseInt(id) - parseInt(c));
        }
        else if (parseInt(id) == (parseInt(c) * parseInt(r)) - 1) {      // Bottom right corner
            swapSquares(parseInt(id));
            swapSquares(parseInt(id) - 1);
            swapSquares(parseInt(id) - parseInt(c));
        }
        else if (parseInt(id) % parseInt(c) == 0) {                      // Left side
            swapSquares(parseInt(id));
            swapSquares(parseInt(id) + 1);
            swapSquares(parseInt(id) - parseInt(c));
            swapSquares(parseInt(id) + parseInt(c));
        }
        else if (parseInt(id) < parseInt(c)) {                           // Top side
            swapSquares(parseInt(id));
            swapSquares(parseInt(id) - 1);
            swapSquares(parseInt(id) + 1);
            swapSquares(parseInt(id) + parseInt(c));
        }
        else if ((parseInt(id) + 1) % parseInt(c) == 0) {                // Right Side
            swapSquares(parseInt(id));
            swapSquares(parseInt(id) - 1);
            swapSquares(parseInt(id) - parseInt(c));
            swapSquares(parseInt(id) + parseInt(c));
        }
        else if (parseInt(id) > (parseInt(c) * (parseInt(r) - 1))) {     // Bottom Side 
            swapSquares(parseInt(id));
            swapSquares(parseInt(id) - 1);
            swapSquares(parseInt(id) + 1);
            swapSquares(parseInt(id) - parseInt(c));
        }
        else {                                                           // All other tiles
            swapSquares(parseInt(id));
            swapSquares(parseInt(id) - 1);
            swapSquares(parseInt(id) + 1);
            swapSquares(parseInt(id) - parseInt(c));
            swapSquares(parseInt(id) + parseInt(c));
        }

        /*
        swapSquares(parseInt(id));                  // The square itself
        swapSquares(parseInt(id) - 1);              // The square to the left
        swapSquares(parseInt(id) + 1);              // The square to the right
        swapSquares(parseInt(id) - parseInt(c));    // The square above
        swapSquares(parseInt(id) + parseInt(c));    // The square below
        */

        console.log(id + " " + r + " " + c)

        checkLines(r, c);
    }
}

function swapSquares(id) {
    if (board[id].color == 'b' && board[id].shape == 'square')
        board[id] = Object.assign({}, wSquare);
    else if (board[id].color == 'w' && board[id].shape == 'square')
        board[id] = Object.assign({}, bSquare);
    else if (board[id].color == 'b' && board[id].shape == 'smile')
        board[id] = Object.assign({}, wSmile);
    else if (board[id].color == 'w' && board[id].shape == 'smile')
        board[id] = Object.assign({}, bSmile);
}

function checkLines(r, c) {
    var color;
    var smileCount;
    var smileCountFinal;
    initialScore = lineCount;

    // Horizontal lines
    smileCount = 0;
    smileCountFinal = 0;
    for (var k = 0; k < r; k++) {
        color = board[0 + (parseInt(c) * k)].color;
        for (var i = 0 + (parseInt(c) * k); i < c + (parseInt(c) * k); i++) {
            if (board[i].shape == 'smile')
                smileCount++;
            if (board[i].color != color) {
                smileCount = 0;
                break;
            }
            else if (i == c + (parseInt(c) * k) - 1) {
                lineCount++;
                smileCountFinal += smileCount;
                moves += testMovePlus
                for (var j = 0 + (parseInt(c) * k); j < c + (parseInt(c) * k); j++)
                    board[j].line = true;
            }
        }
    }

    // Vertical lines
    for (var k = 0; k < c; k++) {
        color = board[0 + k].color;
        for (var i = 0 + k; i < k + (r * c); i = i + parseInt(c)) {
            if (board[i].shape == 'smile')
                smileCount++;
            if (board[i].color != color) {
                smileCount = 0;
                break;
            }
            else if (i == k + (r - 1) * c) {
                lineCount++;
                smileCountFinal += smileCount;
                moves += testMovePlus
                for (var j = 0 + k; j < k + (r * c); j = j + parseInt(c))
                    board[j].line = true;
            }
        }
    }

    //moves = moves + ((lineCount - intialScore) * 3);

    lineCount += (smileCountFinal * smileCountFinal);
    console.log("smile: " + smileCountFinal);
    if (smileCountFinal > 0) {
        moves += Math.round((2 * smileCountFinal) / Math.sqrt(smileCountFinal));
    }

    // Change marked lines
    for (var i = 0; i < board.length; i++) {
        if (board[i].line == true && board[i].color == 'b')
            board[i] = xSquareB;
        if (board[i].line == true && board[i].color == 'w')
            board[i] = xSquareW;
    }



    printBoard(r, c)

    for (var i = 0; i < (r * c); i++) {
        if (board[i] == xSquareB || board[i] == xSquareW) {
            var rand = Math.round(Math.random() * 100);
            if (rand < 49)
                board[i] = Object.assign({}, wSquare);
            if (rand > 50)
                board[i] = Object.assign({}, bSquare);
            if (rand == 49)
                board[i] = Object.assign({}, wSmile);
            if (rand == 50)
                board[i] = Object.assign({}, bSmile);
        }
    }

    if (parseInt(localStorage.highScore) < lineCount)
        localStorage.highScore = lineCount;

    if (moves <= 0) {
        
        alert("Game Over!   Final Score: " + lineCount);
    }



    setTimeout(function () {
        printBoard(r, c);
    }, 700);
}

document.addEventListener("DOMContentLoaded", function (event) {
    moves = 10;
    lineCount = 0;
    if (!localStorage.highScore) {
        localStorage.highScore = 0;
    }

    setBoard(ROWS, COLUMNS);
    printBoard(ROWS, COLUMNS);

    //setInterval(function () {checkLines(ROWS, COLUMNS)}, 250);
    document.getElementById("apply").onclick = function () {
        var optionsForm = document.getElementById("options");
        var rowParam = optionsForm[0].value;
        var colParam = optionsForm[1].value;
        lineCount = 0;
        moves = parseInt((rowParam * colParam) / 10)
        applyParamsRandom(rowParam, colParam);
    };

});