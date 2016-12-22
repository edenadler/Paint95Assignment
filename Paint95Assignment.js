//create drawing studio
function init(){

var canvasDiv = document.createElement("DIV");
document.body.appendChild(canvasDiv);
canvasDiv.setAttribute("id","canvas");
document.getElementById("canvas").style.overflowY= "hidden";

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

var colorYellowDiv = document.createElement("BUTTON");
colorYellowDiv.setAttribute("id","colorYellow");
colorYellowDiv.setAttribute("class","colors");
colorMenuDiv.appendChild(colorYellowDiv);
document.getElementById("colorYellow").style.backgroundColor = "yellow";

var eraserDiv = document.createElement("BUTTON");
eraserDiv.setAttribute("id","eraser");
menuDiv.appendChild(eraserDiv);

var resetDiv = document.createElement("BUTTON");
resetDiv.setAttribute("id","reset");
menuDiv.appendChild(resetDiv);

var allColors = document.getElementsByClassName("colors");
	for (var i = 0; i<allColors.length; i++){
		allColors[i].addEventListener("click",selectColor);
	}

//making event listener for each pixel in the canvas
	var mainCanvas = document.getElementById("canvas");
	var j = 0;
	for (var i = 0; i<500; i++){
		j = 0;
		while (j<500) {
			var pixel = document.createElement("DIV");
			mainCanvas.appendChild(pixel);
			pixel.setAttribute("class","pixels");
			pixel.style.height = "10px";
			pixel.style.width = "10px";
			pixel.style.display = "inline-block";
			pixel.style.position = "absolute";
			pixel.style.top = i + "px";
			pixel.style.left = j + "px";
			j++;
		}
	}
	var allPixels = document.getElementsByClassName("pixels");
	for (var i = 0; i<allPixels.length; i++){
		allPixels[i].addEventListener("mousedown", setPosition);
		allPixels[i].addEventListener("mousemove", draw);
		allPixels[i].addEventListener("mouseup", finishDrawing);
	}	

	document.getElementById("eraser").addEventListener("click",eraseSpot);

	document.getElementById("reset").addEventListener("click",resetCanvas);

} //init function close

var paint = false;
var erasing = false;
var colorChoice = "black";
var mouse = {x: "", y: ""};


//Choosing the color
function selectColor(e){
	colorChoice = e.target.style.backgroundColor;
	erasing = false;
}

function setPosition(e){
	mouse = {x: e.pageX , y: e.pageY};
	paint = true;
}

function draw(e){
 	if (paint){
 		this.style.backgroundColor = colorChoice;
 	}
 	if (erasing){
 		this.style.backgroundColor = "white";
 	}
}

function finishDrawing(){
	paint = false;
}

function eraseSpot(){
	erasing = true;
	paint = false;
}

function resetCanvas(){
	for (var i = 0; i<document.getElementsByClassName("pixels").length; i++){
		document.getElementsByClassName("pixels")[i].style.backgroundColor = "white";
	}
}
