// Inicial Data
let currentColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

// Events
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});
canvas.addEventListener('mousedown', mouseDownEvent);
canvas.addEventListener('mousemove', mouseMoveEvent);
canvas.addEventListener('mouseup', mouseUpEvent);
document.querySelector('.clear').addEventListener('click', clearCanvas);

// Functions
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    console.log(color);
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');

    e.target.classList.add('active');
}
function mouseDownEvent(e) {
    canDraw = true;
    mouseX = e.pageX - canvas.offsetLeft;
    mouseY = e.pageY - canvas.offsetTop;
}
function mouseMoveEvent(e) {
    if (canDraw) {
        draw(e.pageX, e.pageY);
    }
}
function mouseUpEvent() {
    canDraw = false;
}
function draw(x, y) {
    let pointX = x - canvas.offsetLeft;
    let pointY = y - canvas.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;
}
function clearCanvas() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}