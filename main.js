const canvas=document.getElementById("myCanvas");
const ctx=canvas.getContext("2d");


ctx.beginPath();
ctx.moveTo(20,20);
ctx.bezierCurveTo(20,100,200,100,200,20);
ctx.stroke();

