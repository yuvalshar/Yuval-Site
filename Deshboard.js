const CANVAS = document.getElementById("canvas");
const CTX = CANVAS.getContext("2d");
const dimension = document.getElementById("gameTransition");
const img = new Image();
img.src = "./images/parisImg.JPEG";
img.onload = hello;

const button = document.getElementById("studies");
const button1 = document.getElementById("leisure");
const button2 = document.getElementById("professional");
const input = document.getElementById("studiesInput");
const input1 = document.getElementById("leisureInput");
const input2 = document.getElementById("professionalInput");

input.style.visibility = "hidden";
input1.style.visibility = "hidden";
input2.style.visibility = "hidden";

button.addEventListener("mousedown", showInput);
button1.addEventListener("mousedown", showInput1);
button2.addEventListener("mousedown", showInput2);
dimension.addEventListener("mousedown", movePage);
    
function movePage() {
    dimension.style.animation = "";
    setTimeout (function() {
        window.location.href = "firstPage.html";
    }, 800);
}

dimension.addEventListener("mousedown", function() {
    document.body.classList.add('fade-out');
    setTimeout(function() {
      window.location.href = "firstPage.html";
    }, 1000);
  });


function updateCanvasSize() {
    CANVAS.width = CANVAS.clientWidth * 2;
    CANVAS.height = CANVAS.clientHeight * 3.9;
}
updateCanvasSize();


function showInput() {
    input.style.visibility = "visible";
    input1.style.visibility = "hidden";
    input2.style.visibility = "hidden"; 
}

function showInput1() {
    input.style.visibility = "hidden";
    input1.style.visibility = "visible";
    input2.style.visibility = "hidden";
}

function showInput2() {
    input.style.visibility = "hidden";
    input1.style.visibility = "hidden";
    input2.style.visibility = "visible";
}


function writeText(text, color = "black", size = "30", font = "Arial", style = "", x = CANVAS.width / 2, y = CANVAS.height / 2) {
    CTX.font = style + " " + size + "px " + font;
    CTX.fillStyle = color;
    CTX.fillText(text, x, y);
}

function hello() {
    CTX.drawImage(img, 0, 0, CANVAS.width, CANVAS.height);
    writeText("Yuval Shar", "black", 60, "Ariel", 1000, x = 270, y = 100);
    writeText("Software Development", "black", 36, "Ariel", 1000, x = 235, y = 160);
}

document.querySelector('#arrow').addEventListener('mousedown', function() {
    this.classList.add('bounce');
});
