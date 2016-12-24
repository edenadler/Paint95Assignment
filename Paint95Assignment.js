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

	document.getElementsByClassName("menuChoices")[i].setAttribute("style","height:60px; width: 60px; cursor: pointer; position: relative; display: block; margin: 5px; background-repeat: no-repeat; padding-top: 25px; ");
	document.getElementsByClassName("menuChoices")[i].style.backgroundImage = "url('./images/"+backgroundImages[i]+".png')";
	document.getElementsByClassName("menuChoices")[i].style.backgroundSize = "contain";
}

var popupToggle = document.createElement("DIV");
popupToggle.setAttribute("id","popupColor");
menuOptions.appendChild(popupToggle);
document.getElementById("popupColor").style.display = "none";
document.getElementById("colorPalatte").addEventListener("click", changeVisibility);

var colorInput = ["R","G","B"];

var colorForm = document.createElement("FORM");
document.getElementById("popupColor").appendChild(colorForm);
var formLabel = document.createElement("P");
formLabel.style.marginBottom  = "10px";
formLabel.style.marginTop = "5px";
formLabel.style.color = "white";
formLabel.style.fontFamily = "Tahoma, Geneva, sans-serif";
colorForm.appendChild(formLabel);
var node = document.createTextNode("Choose your RGB color:");
formLabel.appendChild(node);

for (var i = 0; i<colorInput.length; i++){
	var inputNum = document.createElement("INPUT");
	inputNum.setAttribute("id", colorInput[i]);
	inputNum.setAttribute("type","number");
	inputNum.setAttribute("min","0");
	inputNum.setAttribute("max","255");
	inputNum.setAttribute("placeholder","0");
	inputNum.setAttribute("class","RGB");
	colorForm.appendChild(inputNum);

document.getElementsByClassName("RGB")[i].addEventListener("click", showBackgroundColor);
}

var showRGB = document.createElement("DIV");
	showRGB.setAttribute("id", "showColor");
	colorForm.appendChild(showRGB);

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


var paint = false;
var erasing = false;
var colorChoice = "black";
var mouse = {x: "", y: ""};


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
	erasing = false;
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
function showBackgroundColor(){
	var r = document.getElementById("R").value;
	var g = document.getElementById("G").value;
	var b = document.getElementById("B").value;

	document.getElementById("showColor").style.backgroundColor = "rgb("+r+","+g+","+b+")";
	colorChoice = "rgb("+r+","+g+","+b+")";
}

var popupDiv = document.getElementById("popupColor");
var show = false;

function changeVisibility(e){
    e.stopPropagation();
    e.preventDefault();
	if (show){
		document.getElementById("popupColor").style.display = "none";
		show = false;
	}
	else {
		document.getElementById("popupColor").style.display = "block";
		show = true;
	}
}