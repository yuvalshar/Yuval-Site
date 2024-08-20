const CANVAS = document.getElementById("canvas");
const CTX = CANVAS.getContext("2d");
const dimension = document.getElementById("gameTransition");
const fadeAnimation = document.getElementById("fadeAnimation");

const img = new Image();
img.src = "./images/parisImg.JPEG";
img.onload = hello;

const button = document.getElementById("studies");
const button1 = document.getElementById("leisure");
const button2 = document.getElementById("professional");
// const input = document.getElementById(null);
// const input1 = document.getElementById(null);
const input2 = document.getElementById("professionalInput");
// input.style.visibility = "hidden";
// input1.style.visibiilty = "hidden";
input2.style.visibility = "hidden";
button2.addEventListener("mousedown", hideInput2);
button.addEventListener("mousedown", transitionPage);
    
function transitionPage() {
    dimension.style.animation = "";
    setTimeout (function() {
        window.location.href = "firstPage.html";
    }, 800);
}

dimension.addEventListener("mousedown", function() {
    document.body.classList.add('fade-out');
    fadeAnimation.classList.add('active');
    setTimeout(function() {
    document.getElementById('fade-container').classList.add('explode');
    document.querySelector('.space-ship').classList.add('space-ship');
    setTimeout(function() {
        document.querySelector('.moon-transition').classList.add('moon-transition');
        window.location.href = "firstPage.html";
    }, 2000); // אפשר לשנות לפי הצורך
}, 2000);
}, );


function updateCanvasSize() {
    CANVAS.width = CANVAS.clientWidth * 2;
    CANVAS.height = CANVAS.clientHeight * 3.9;
}
updateCanvasSize();


function hideInput() {
    input2.style.visibility = "hidden";
    // input1.style.visibility = "hidden";
    // input.style.visibility = "visible";    
}

function hideInput1() {
    input2.style.visibility = "hidden";
    // input1.style.visibility = "visible";
    // input.style.visibility = "hidden";    
}

function hideInput2() {
    input2.style.visibility = "visible";
    // input1.style.visibility = "hidden";
    // input.style.visibility = "hidden";    
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