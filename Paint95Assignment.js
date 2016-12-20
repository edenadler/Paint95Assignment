
//create drawing studio
function init(){
var canvasDiv = document.createElement("CANVAS");
document.body.appendChild(canvasDiv);
canvasDiv.setAttribute("id","canvas");

var menuDiv = document.createElement("DIV");
document.body.appendChild(menuDiv);
menuDiv.setAttribute("id","menu");

//color menu
var colorMenuDiv = document.createElement("DIV");
colorMenuDiv.setAttribute("id", "colorMenu");
menuDiv.appendChild(colorMenuDiv);

var colorRedDiv = document.createElement("BUTTON");
colorRedDiv.setAttribute("id","colorRed");
colorRedDiv.setAttribute("class","colors");
colorMenuDiv.appendChild(colorRedDiv);

var colorBlueDiv = document.createElement("BUTTON");
colorBlueDiv.setAttribute("id","colorBlue");
colorRedDiv.setAttribute("class","colors");
colorMenuDiv.appendChild(colorBlueDiv);

var colorGreenDiv = document.createElement("BUTTON");
colorGreenDiv.setAttribute("id","colorGreen");
colorRedDiv.setAttribute("class","colors");
colorMenuDiv.appendChild(colorGreenDiv);

var colorOrangeDiv = document.createElement("BUTTON");
colorOrangeDiv.setAttribute("id","colorOrange");
colorRedDiv.setAttribute("class","colors");
colorMenuDiv.appendChild(colorOrangeDiv);

var colorPurpleDiv = document.createElement("BUTTON");
colorPurpleDiv.setAttribute("id","colorPurple");
colorRedDiv.setAttribute("class","colors");
colorMenuDiv.appendChild(colorPurpleDiv);

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var pos = { x: 0, y: 0};
var paint = false;
var colorChoice = "black";

//Choosing the color
function selectColor(e){
	colorChoice = e.target.backgroundColor;
}

function drawColor(e){
    var colorCanvas = e.target;
    if (colorChoice == 0){
        alert("please choose a color first!");
        return;
    }
}

//DRAWING
function mouseDown(e){
	pos.x = e.pageX-this.offsetLeft;
    pos.y = e.pageY-this.offsetTop;
    ctx.beginPath();
    ctx.moveTo(pos.x,pos.y);
    paint = true;
}

function mouseMove(e){
	if (paint){
		ctx.lineTo(pos.x,pos.y);
		ctx.strokeStyle = colorChoice;
		ctx.stroke();
	}
}

function mouseUp(e){
	paint = false;
}

var allColors = document.getElementsByClassName("colors");
    for (var i = 0; i < allColors.length; i++){
        allColors[i].addEventListener("click",selectColor);
    }
var colorCanvas = document.getElementById("canvas");
colorCanvas.addEventListener("click",drawColor);

//DRAWING - EVENT LISTENER
document.getElementById("canvas").addEventListener("mousedown",mouseDown);
document.getElementById("canvas").addEventListener("mousemove",mouseMove);
document.getElementById("canvas").addEventListener("mouseup",mouseUp);

} //init function close

