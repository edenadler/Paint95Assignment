//create drawing studio
function init(){

var canvasDiv = document.createElement("DIV");
document.body.appendChild(canvasDiv);
canvasDiv.setAttribute("id","canvas");
document.getElementById("canvas").style.overflowY= "hidden";

var menuDiv = document.createElement("DIV");
document.body.appendChild(menuDiv);
menuDiv.setAttribute("id","menu");

var buttonArray = ["colorPalatte","drawingUtensil","erasingUtensil","resetEverything"];
var backgroundImages = [1, 2, 3, 4];

for (var i = 0; i<buttonArray.length; i++){
	var menuOptions = document.createElement("DIV");
	menuOptions.setAttribute("id", buttonArray[i]);
	menuOptions.setAttribute("class","menuChoices");
	menuDiv.appendChild(menuOptions);

	document.getElementsByClassName("menuChoices")[i].setAttribute("style","height:50px; width: 50px; position: relative; display: block; margin: 5px; border-radius: 4px; border: 2px solid white; background-color: white;");
	document.getElementsByClassName("menuChoices")[i].style.backgroundImage = "url('./images/"+backgroundImages[i]+".png')";
	document.getElementsByClassName("menuChoices")[i].style.backgroundSize = "contain";
}

var popupToggle = document.createElement("DIV");
popupToggle.setAttribute("id","popupColor");
document.getElementById("colorPalatte").appendChild(popupToggle);

document.getElementById("colorPalatte").addEventListener("click", changeVisibility);


var allColors = document.getElementsByClassName("colors");
	for (var i = 0; i<allColors.length; i++){
		allColors[i].addEventListener("click",selectColor);
	}

//making event listener for each pixel in the canvas
	var mainCanvas = document.getElementById("canvas");
	var j = 0;
	for (var i = 0; i<100; i++){
		j = 0;
		while (j<100) {
			var pixel = document.createElement("DIV");
			mainCanvas.appendChild(pixel);
			pixel.setAttribute("class","pixels");
			pixel.style.height = "5px";
			pixel.style.width = "5px";
			pixel.style.display = "inline-block";
			pixel.style.position = "absolute";
			pixel.style.top = i*5 + "px";
			pixel.style.left = j*5 + "px";
			j++;
		}
	}
	var allPixels = document.getElementsByClassName("pixels");
	for (var i = 0; i<allPixels.length; i++){
		allPixels[i].addEventListener("mousedown", setPosition);
		allPixels[i].addEventListener("mouseover", draw);
		allPixels[i].addEventListener("mouseup", finishDrawing);
	}	

	document.getElementById("erasingUtensil").addEventListener("click",eraseSpot);

	document.getElementById("resetEverything").addEventListener("click",resetCanvas);

} //init function close

function changeVisibility(){
	var popup = document.getElementById("popupColor").style.visibility;
	if (popup == "visible"){
		popup = "hidden";
	}
	else if (popup == "hidden"){
		popup = "visible";
	}
}


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
