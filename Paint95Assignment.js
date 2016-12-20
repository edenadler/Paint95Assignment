//create drawing studio
function init(){

var canvasDiv = document.createElement("DIV");
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
document.getElementById("colorRed").style.backgroundColor = "red";

var colorBlueDiv = document.createElement("BUTTON");
colorBlueDiv.setAttribute("id","colorBlue");
colorBlueDiv.setAttribute("class","colors");
colorMenuDiv.appendChild(colorBlueDiv);
document.getElementById("colorBlue").style.backgroundColor = "blue";

var colorGreenDiv = document.createElement("BUTTON");
colorGreenDiv.setAttribute("id","colorGreen");
colorGreenDiv.setAttribute("class","colors");
colorMenuDiv.appendChild(colorGreenDiv);
document.getElementById("colorGreen").style.backgroundColor = "green";

var colorOrangeDiv = document.createElement("BUTTON");
colorOrangeDiv.setAttribute("id","colorOrange");
colorOrangeDiv.setAttribute("class","colors");
colorMenuDiv.appendChild(colorOrangeDiv);
document.getElementById("colorOrange").style.backgroundColor = "orange";

var colorPurpleDiv = document.createElement("BUTTON");
colorPurpleDiv.setAttribute("id","colorPurple");
colorPurpleDiv.setAttribute("class","colors");
colorMenuDiv.appendChild(colorPurpleDiv);
document.getElementById("colorPurple").style.backgroundColor = "purple";

var allColors = document.getElementsByClassName("colors");
	for (var i = 0; i<allColors.length; i++){
		allColors[i].addEventListener("click",selectColor);
	}

document.getElementById("canvas").addEventListener("mousedown", setPosition);
document.getElementById("canvas").addEventListener("mousemove", draw);
document.getElementById("canvas").addEventListener("mouseup", finishDrawing);

} //init function close
var paint = false;
var colorChoice = "black";
var pos;

//Choosing the color
function selectColor(e){
	colorChoice = e.target.style.backgroundColor;
	paint = true;
}

function setPosition(e){
	pos = {x: e.pageX , y: e.pageY};
}

function draw(e){
	var canvasSpace = e.target;
	if (colorChoice == 0){
        alert("please choose a color first!");
        return;
	}
	var newPixel = document.createElement("DIV");
	newPixel.setAttribute("class","pixels");
	newPixel.setAttribute("id","pixel");
	newPixel.setAttribute("style","height: 5px; width: 5px; display: block; position: absolute;");
	newPixel.style.left = pos.x +'px';
  	newPixel.style.top = pos.y +'px';
    newPixel.style.backgroundColor = colorChoice;
	canvasSpace.appendChild(newPixel);
	pos = {x: e.pageX , y: e.pageY};
    console.log(pos.x,pos.y);
    pos.x -= canvasSpace.offsetLeft;
    pos.y -= canvasSpace.offsetTop;
}

function finishDrawing(){
	paint = false;
}