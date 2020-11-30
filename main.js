var canvas=document.getElementById("my_canvas");
x=canvas.getContext("2d");

color="red";

x.beginPath();
x.strokeStyle=color;
x.lineWidth=2;
x.arc(200, 200, 40, 0, 2*Math.PI);
x.stroke();

canvas.addEventListener("mousedown", mymouse_down);
function mymouse_down(e) {
   mouse_x=e.clientX-canvas.offsetLeft;
   mouse_y=e.clientY-canvas.offsetTop;
   console.log("x= "+mouse_x+", y= "+mouse_y);

   circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y) {
    x.beginPath();
    x.strokeStyle=color;
    x.lineWidth=2;
    x.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    x.stroke();
}