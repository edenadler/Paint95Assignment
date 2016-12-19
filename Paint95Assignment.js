var colorChoice = "black";

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

var colorRedDiv = document.createElement("DIV");
colorRedDiv.setAttribute("id","colorRed");
colorRedDiv.setAttribute("class","colors");
colorMenuDiv.appendChild(colorRedDiv);

var colorBlueDiv = document.createElement("DIV");
colorBlueDiv.setAttribute("id","colorBlue");
colorRedDiv.setAttribute("class","colors");
colorMenuDiv.appendChild(colorBlueDiv);

var colorGreenDiv = document.createElement("DIV");
colorGreenDiv.setAttribute("id","colorGreen");
colorRedDiv.setAttribute("class","colors");
colorMenuDiv.appendChild(colorGreenDiv);

var colorOrangeDiv = document.createElement("DIV");
colorOrangeDiv.setAttribute("id","colorOrange");
colorRedDiv.setAttribute("class","colors");
colorMenuDiv.appendChild(colorOrangeDiv);

var colorPurpleDiv = document.createElement("DIV");
colorPurpleDiv.setAttribute("id","colorPurple");
colorRedDiv.setAttribute("class","colors");
colorMenuDiv.appendChild(colorPurpleDiv);

var allColors = document.getElementsByClassName("colors");
    for (var i = 0; i < allColors.length; i++){
        allColors[i].addEventListener("click",selectColor);
    }
var colorCanvas = document.getElementById("canvas");
colorCanvas.addEventListener("click",drawColor);
} //init function close

function selectColor(e){
	colorChoice = e.target.backgroundColor;
}

function drawColor(e){
    var colorCanvas = e.target;
    if (colorChoice == 0){
        alert("please choose a color first!");
        return;
    }
 //    var newSticker = document.createElement("img");
 //    newSticker.src = "./images/" + selectedSticker + ".png";
 //    newSticker.classList.add("sticker");
 //    stickersCanvas.appendChild(newSticker);
 //    var x = e.pageX;
 //    var y = e.pageY;
	// console.log(x,y)
 //    x -= stickersCanvas.offsetLeft + 50;
 //    y -= stickersCanvas.offsetTop + 50;
 //    newSticker.style.left = x +'px';
 //    newSticker.style.top = y +'px';
 //WORKING ON HOW TO DRAW THE COLOR ONCE IT IS SELECTED
}

