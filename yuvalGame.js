const CANVAS = document.getElementById("canvas");
const CTX = CANVAS.getContext("2d");
const img = new Image(); 
img.src = "./images/background.jpeg";
img.onload = firstRestart;

const studies = document.getElementById("studiesButton");
// studies.addEventListener("mousedown", nextAspect);
studies.style.visibility = "hidden";

const KEYS = {
    "ArrowUp" : false,
    "ArrowDown": false,
    "ArrowRight": false,
    "ArrowLeft": false,
};

window.onresize = updateCanvasSize();
let time = 18;
let gameOn = true;
let score = 0;

let book1 = new Figure(CTX, "./images/kidBook.png", "lion", 0.1, 6);
let book2 = new Figure(CTX, "./images/kidBook1.png", "trip", 0.2, 5);
let book3 = new Figure(CTX, "./images/kidBook2.png", "garden", 0.1, 6);

let math1 = new Figure(CTX, "./images/math1Img.png", "math", 0.4, 6);
let math2 = new Figure(CTX, "./images/math2Img.png", "Balistic math", 0.45, 4);

let booksGroup = [book1, book2, book3];
let mathGroup = [math1, math2];

const PLAYER = {
    img: new Image(),
    x: 200,
    y: 200,
    width: 25,
    height: 45,
    enlarge: 2.5,
    face: {
        "up": "./images/Player/up.png",
        "down": "./images/Player/down.png",
        "left": "./images/Player/left.png",
        "right": "./images/Player/right.png",
    },
    speed: 10,
}
PLAYER.img.src = PLAYER.face["down"];

document.addEventListener("keydown", addKey);
document.addEventListener("keyup", removeKey);

function addKey(pEvent){
    KEYS[pEvent.key] = true;
}

function removeKey(pEvent){
    KEYS[pEvent.key] = false;
}

function updateCanvasSize() {
    CANVAS.width = CANVAS.clientWidth;
    CANVAS.height = CANVAS.clientWidth * 0.5;
}

function writeText(text, color = "black", size = "30", font = "Arial", style = "", x = CANVAS.width / 2, y = CANVAS.height / 2) {
    CTX.font = style + " " + size + "px " + font;
    CTX.fillStyle = color;
    CTX.fillText(text, x, y);
}

// function hideFigure(element) {
//     const element = document.getElementById(element);
//     if (element) {
//         element.style.visibility = 'hidden';
//     } else {
//         console.error('Element not found with ID:', element);
//     }
// }

// hideFigure(book1);
function firstRestart() {
    updateCanvasSize();
    userName = prompt("Hello, my name is Yuval. What's your name?");
    writeText("Time: " + time, "blue", 50, "Arial", "bold", 1000, 70);
    writeText("Hello " + userName, "aqua", 50, undefined, "bold", 24, 70);
    writeText("Score: " + score, "blue", 50, undefined, "bold", 1000, 120);
    gameLoop();
}

// let lastTime = 0;

function gameLoop() {
    if (gameOn) {
        // const deltaTime = (timestamp - lastTime) / 1000;
        // lastTime = timestamp;

        CTX.drawImage(img, 0, 0, CANVAS.width, CANVAS.height);
        writeText("Time: " + time, "blue", 50, "Arial", "bold", 1000, 70);
        writeText("Hello " + userName, "aqua", 50, undefined, "bold", 24, 70);
        writeText("Score: " + score, "blue", 50, undefined, "bold", 1000, 120);
        drawFigure(PLAYER);
        controlPlayerMove();

        for (let i = 0; i < booksGroup.length; i++) {
            booksGroup[i].draw();
            console.log("The figures are supposed to be drawn");
            booksGroup[i].moveToRandomLoc();

        if(checkCollision(PLAYER, booksGroup[i]) && booksGroup[i].isVisible) {
            resetKeys();
            booksGroup[i].isVisible = false;
            console.log("collision sucess");
            score++;
        }
    }

    for (let n = 0; n < mathGroup.length; n++) {
        mathGroup[n].draw();
        mathGroup[n].moveToRandomLoc();

        if (checkCollision(PLAYER, math1) && math1.isVisible) {
           let fQuest = prompt("How much is 3X4?");
           fQuest;
           if (fQuest == 12) {
            math1.isVisible = false;
            gameOn = true;
            score++;
            resetKeys();
            console.log("sucess true");
           } else {
            console.log("false");
            prompt ("Wrong answer, try agaim");
            resetKeys();
            fQuest;
           }
        }
        
        if (checkCollision(PLAYER, math2) && math2.isVisible) {
            let sQuest = prompt("How much is 3 out of 18?");
            sQuest;
            if (sQuest == 6) {
                math2.isVisible = false;
                gameOn = true;
                score++;
                resetKeys();
                console.log("sucess true");
            } else {
                console.log("false");
                prompt ("Worng answer, try again");
                resetKeys();
                sQuest;

        }
    }
}
requestAnimationFrame(gameLoop);
    }
}

setInterval(timer, 1000);

function timer() {
    if (time > 0) {
        time--;
    } else {
        gameOver();
        writeText("Your score is " + score, "Blue", 50, undefined, "bold", 420, 80);
        writeText("Press the button above to move to the next dimension", "Green", 46, undefined, "bold", 24, 590);
    }
}

function controlPlayerMove() {
    if(KEYS["ArrowUp"] == true && PLAYER.y > 0) {
        PLAYER.y = PLAYER.y - PLAYER.speed;
        PLAYER.img.src = PLAYER.face["up"];
    }

    if(KEYS["ArrowDown"] == true && PLAYER.y + PLAYER.height < CANVAS.height) {
        PLAYER.y = PLAYER.y + PLAYER.speed;
        PLAYER.img.src = PLAYER.face["down"];
    }

    if(KEYS["ArrowRight"] == true && PLAYER.x + PLAYER.width < CANVAS.width) {
        PLAYER.x = PLAYER.x + PLAYER.speed;
        PLAYER.img.src = PLAYER.face["right"];
    }

    if(KEYS["ArrowLeft"] == true && PLAYER.x > 0) {
        PLAYER.x = PLAYER.x - PLAYER.speed;
        PLAYER.img.src = PLAYER.face["left"];
    }
}

function resetKeys() {
    KEYS["ArrowUp"] = false;
    KEYS["ArrowDown"] = false;
    KEYS["ArrowRight"] = false;
    KEYS["ArrowLeft"] = false;
}

function gameOver() {
    clearInterval(timer, 1000);
    gameOn = false
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
    studies.style.visibility = "visible";
}


studies.addEventListener("mousedown", function() {
    studies.style.animation = "explode 0.8s ease-in-out";
    setTimeOut (function() {
        window.location.href = "secondPage.html";
    }, 800);
});

studies.addEventListener("click", function() {
    document.body.classList.add('fade-out');
    setTimeout(function() {
      window.location.href = "secondPage.html";
    }, 1000);
  });