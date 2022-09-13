//Var
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;

//canvas
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

//color and width of line
color="black";
widthLine=1;

//events
canvas.addEventListener ("mousedown",my_mousedown);
function my_mousedown(e) {
    color=document.getElementById("color").value;
    widthLine=document.getElementById("widthLine").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener ("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseEvent="mouseUP";
}

canvas.addEventListener ("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseEvent="mouseleave";
}
canvas.addEventListener ("mousemove",my_mousemove);
function my_mousemove(e) {
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;

if(mouseEvent=="mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthLine;

    //console
    console.log("last position of x and y=");
    console.log("x="+last_position_of_x +"y="+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);

    //copy paste
    console.log("cur position of x and y=");
    console.log("x="+current_position_of_mouse_x +"y="+current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke(); 
}
last_position_of_x=current_position_of_mouse_x;
last_position_of_y=current_position_of_mouse_y;
}

function clearArea() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}
