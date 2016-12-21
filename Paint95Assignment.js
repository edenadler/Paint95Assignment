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

var allColors = document.getElementsByClassName("colors");
	for (var i = 0; i<allColors.length; i++){
		allColors[i].addEventListener("click",selectColor);
	}

// document.getElementById("canvas").addEventListener("mousedown", setPosition);
// document.getElementById("canvas").addEventListener("mousemove", draw);
// document.getElementById("canvas").addEventListener("mouseup", finishDrawing);


//making event listener for each pixel in the canvas
	var mainCanvas = document.getElementById("canvas");
	var j = 0;
	for (var i = 0; i<500; i++){
		j = 0;
		while (j<500) {
			var pixel = document.createElement("DIV");
			mainCanvas.appendChild(pixel);
			pixel.setAttribute("class","pixels");
			pixel.style.height = "1px";
			pixel.style.width = "1px";
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
		allPixels[i].addEventListener("mouseover", draw);
		allPixels[i].addEventListener("mouseup", finishDrawing);
	}	

} //init function close

var paint = false;
var colorChoice = "black";
var mouse = {x: "", y: ""};


//Choosing the color
function selectColor(e){
	colorChoice = e.target.style.backgroundColor;
}

function setPosition(e){
	mouse = {x: e.pageX , y: e.pageY};
	paint = true;
}

function draw(e){
	var canvasSpace = e.target;
	if (colorChoice == 0){
        alert("please choose a color first!");
        return;
	}
 	if (paint){
 		this.style.backgroundColor = colorChoice;
 	}
}

function finishDrawing(){
	paint = false;
}