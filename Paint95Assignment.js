var paint = false;
var erasing = false;
var colorChoice = "black";
var mouse = {x: "", y: ""};
var brushSize = 5;
var brushMarginAdjustFactor = 100;
var menuButtonArray = ["colorButton","eraserButton","resetButton","brushButton"];
var backgroundImages = [1, 2, 3, 4];
var colorInput = ["R","G","B"];
var brushSizeArray = ["small","medium","large"];
var brushSizeValueArray = [5,10,20];


function initCanvas(){

	var canvasDiv = document.createElement("DIV");
	document.body.appendChild(canvasDiv);
	canvasDiv.setAttribute("id","canvas");

	initPixels();
	initMenu();
	initMenuToggles();
	initColorPicker();
	initBrushSizePicker();

}


function initPixels(){
	console.log("init pixels");
	var mainCanvas = document.getElementById("canvas");
		
		var j = 0;
		for (var i = 0; i<brushMarginAdjustFactor; i++){
			
			j = 0;
			while (j<brushMarginAdjustFactor) {
				var pixel = document.createElement("DIV");
				mainCanvas.appendChild(pixel);
				pixel.setAttribute("class","pixels");

				pixel.style.cssText += 'height: '+brushSize+'px; width: '+brushSize+'px; top: '+i*brushSize+'px; left: '+j*brushSize+'px;';
				j++;
			}
		}
	setPixelEventListeners();
}


function setPixelEventListeners(){

	var allPixels = document.getElementsByClassName("pixels");

		for (var i = 0; i<allPixels.length; i++){
			allPixels[i].addEventListener("mousedown", setPosition);
			allPixels[i].addEventListener("mouseover", draw);
			allPixels[i].addEventListener("mouseup", finishDrawing);
		}
}

function initMenu(){

	var menuDiv = document.createElement("DIV");
	document.body.appendChild(menuDiv);
	menuDiv.setAttribute("id","menu");

	for (var i = 0; i<menuButtonArray.length; i++){

		var menuOptions = document.createElement("DIV");
		menuOptions.setAttribute("id", menuButtonArray[i]);
		menuOptions.setAttribute("class","menuChoices");
		menuDiv.appendChild(menuOptions);

		document.getElementsByClassName("menuChoices")[i].style.backgroundImage = "url('./images/"+backgroundImages[i]+".png')";
	}
}

function initMenuToggles(){
	var menu = document.getElementById("menu");

	var colorToggle = document.createElement("DIV");
	colorToggle.setAttribute("id","colorPicker");
	menu.appendChild(colorToggle);
	document.getElementById("colorPicker").style.display = "none";

	var brushSizeToggle = document.createElement("DIV");
	brushSizeToggle.setAttribute("id","brushSizePicker");
	menu.appendChild(brushSizeToggle);
	document.getElementById("brushSizePicker").style.display = "none";

	document.getElementById("colorButton").addEventListener("click", changeVisibility);
	document.getElementById("brushButton").addEventListener("click", changeVisibility);
	document.getElementById("eraserButton").addEventListener("click",eraseSpot);
	document.getElementById("resetButton").addEventListener("click",resetCanvas);

}

function initColorPicker(){


	var colorForm = document.createElement("FORM");
	document.getElementById("colorPicker").appendChild(colorForm);
	
	var formLabel = document.createElement("P");
	formLabel.setAttribute("id","colorForm");
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
}


function initBrushSizePicker(){

	for (var i = 0; i<brushSizeArray.length; i++){
		var sizeDiv = document.createElement("DIV");
		sizeDiv.setAttribute("class","sizeForm");
		document.getElementById("brushSizePicker").appendChild(sizeDiv);
		
		var sizeOptions = document.createElement("INPUT");
		sizeOptions.setAttribute("type","radio");
		sizeOptions.setAttribute("name","radio");
		sizeOptions.setAttribute("value",brushSizeValueArray[i]);
		sizeOptions.setAttribute("id", brushSizeArray[i]);
		sizeOptions.setAttribute("class","brushSizes");
		document.getElementsByClassName("sizeForm")[i].appendChild(sizeOptions);

		var sizeText= document.createElement("LABEL");
		sizeText.setAttribute("for", brushSizeArray[i]);
		var node = document.createTextNode(brushSizeArray[i]);
		sizeText.appendChild(node);
		document.getElementsByClassName("sizeForm")[i].appendChild(sizeText);

		document.getElementsByClassName("brushSizes")[i].addEventListener("click", changeBrushSize);
	}
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
	erasing = false;
}

function eraseSpot(){
	erasing = true;
	paint = false;
}

function resetCanvas(e){
	for (var i = 0; i<document.getElementsByClassName("pixels").length; i++){
		document.getElementsByClassName("pixels")[i].style.backgroundColor = "white";
	}
}

function showBackgroundColor(){
	var r = document.getElementById("R").value || 0;
	var g = document.getElementById("G").value || 0;
	var b = document.getElementById("B").value || 0;

	document.getElementById("showColor").style.backgroundColor = "rgb("+r+","+g+","+b+")";
	colorChoice = "rgb("+r+","+g+","+b+")";
}

function changeVisibility(e){
    e.stopPropagation();
    e.preventDefault();
		if (e.target.id === "colorButton"){
			document.getElementById("colorPicker").style.display = "block";
			document.getElementById("brushSizePicker").style.display = "none";
		}
		else{
			document.getElementById("brushSizePicker").style.display = "block";
			document.getElementById("colorPicker").style.display = "none";
		}
}

function changeBrushSize(e){
	console.log("changing size");
	if (e.target.id === "small"){
		brushSize = parseInt(e.target.value);
		brushMarginAdjustFactor = 100;
	}
	else if (e.target.id === "medium"){
		brushSize = parseInt(e.target.value);
		brushMarginAdjustFactor = 50;
	}
	else if (e.target.id === "large"){
		brushSize = parseInt(e.target.value);
		brushMarginAdjustFactor = 25;
	}

	initPixels();
}