function screen(id, pSize, w, h) {

    var pixelSize;
    var screenWidth;
    var screenHeight;
    var canvas;
    var context;
    var palette = new Array(16);

    palette = [
        "#000000", "#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777",
        "#888888", "#999999", "#AAAAAA", "#BBBBBB", "#CCCCCC", "#DDDDDD", "#EEEEEE", "#FFFFFF"
   ];

    this.setScreenAttributes = function(pSize, w, h) {
        pixelSize = pSize;
        screenWidth = w;
        screenHeight = h;
        canvas.setAttribute("width", screenWidth * pixelSize);
        canvas.setAttribute("height", screenHeight * pixelSize);
        console.log("set screen attributes to " + screenWidth * pixelSize + "x" + screenHeight * pixelSize);
    };

    this.buildScreen = function(id, pSize, w, h) {
        canvas = document.getElementById(id);
        context = canvas.getContext("2d");
        this.setScreenAttributes(pSize, w, h);
        console.log("built screen " + id);
    };

    this.setPalette = function(pal) {
        if(pal.length == 16) {
            for(var i = 0; i < 16; i++)
                palette[i] = pal[i];
        }
        else
            console.log("error, palettes must contain 16 colors");
    };

    this.returnWidth = function () { return screenWidth; };

    this.returnHeight = function () { return screenHeight; };

    this.draw16 = function (str) {
        if (str.length == screenWidth * screenHeight) {
            context.clearRect(0, 0, screenWidth * pixelSize, screenHeight * pixelSize);
            //context.beginPath(); Does this make a difference?
            for (var y = 0; y < screenHeight; y++) {
                for (var x = 0; x < screenWidth; x++) {
                    switch (str.charAt((y * screenWidth) + x)) {
                        case '0': context.fillStyle = palette[0]; break;
                        case '1': context.fillStyle = palette[1]; break;
                        case '2': context.fillStyle = palette[2]; break;
                        case '3': context.fillStyle = palette[3]; break;
                        case '4': context.fillStyle = palette[4]; break;
                        case '5': context.fillStyle = palette[5]; break;
                        case '6': context.fillStyle = palette[6]; break;
                        case '7': context.fillStyle = palette[7]; break;
                        case '8': context.fillStyle = palette[8]; break;
                        case '9': context.fillStyle = palette[9]; break;
                        case 'a':
                        case 'A': context.fillStyle = palette[10]; break;
                        case 'b':
                        case 'B': context.fillStyle = palette[11]; break;
                        case 'c':
                        case 'C': context.fillStyle = palette[12]; break;
                        case 'd':
                        case 'D': context.fillStyle = palette[13]; break;
                        case 'e':
                        case 'E': context.fillStyle = palette[14]; break;
                        case 'f':
                        case 'F': context.fillStyle = palette[15]; break;
                        default: rgba(255, 0, 0, 0); console.log("error, wrong character in string passed to draw16!"); break;
                    }
                    context.fillRect(0 + pixelSize * x, 0 + pixelSize * y, pixelSize, pixelSize);
                }
            }
            //console.log("drew to screen");
        }
        else {
            console.log("incorrect length of string passed into draw16!");
            console.log("length is " + str.length + ", but should be " + (screenWidth * screenHeight) + "!");
        }
    };

    this.buildScreen(id, pSize, w, h); // constructor
}