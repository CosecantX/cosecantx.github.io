const width = 1200;
const height = 800;
const lag = 8;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

c.setAttribute("width", width);
c.setAttribute("height", height);

var counter = 10;
var posLog = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var length = 100;

var gradient = ctx.createRadialGradient((width / 2), (height / 2), 0, (width / 2), (height / 2), (width / 2));
gradient.addColorStop("0", "blue");
gradient.addColorStop("1", "red");
var black = "#000000";

ctx.strokeStyle = black;

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

c.addEventListener("mousemove", function (evt) {
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    var mousePos = getMousePos(c, evt);

    posLog[counter] = mousePos;
    counter++;
    if (counter > 20) counter == 0;

    for (var i = 0; i < 50; i++) {
        circ = {
            x: length * Math.cos(i/7),
            y: length * Math.sin(i/7)
        };

        if (counter < lag) {
            ctx.moveTo(mousePos.x, mousePos.y);
            ctx.lineTo(circ.x + posLog[20 - counter].x, circ.y + posLog[20 - counter].y);
            ctx.stroke();
        }

        ctx.moveTo(mousePos.x, mousePos.y);
        ctx.lineTo(circ.x + posLog[counter - lag].x, circ.y + posLog[counter - lag].y);
        ctx.stroke();
    }
}, false);

c.addEventListener("click", function () {
    if (ctx.strokeStyle == black) ctx.strokeStyle = gradient;
    else ctx.strokeStyle = black;
    
});