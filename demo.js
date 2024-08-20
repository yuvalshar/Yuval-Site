const demo = document.getElementById("professional");
const button2 = document.getElementById("professionalInput");
button2.style.visibility = "hidden"
demo.addEventListener("mousedown", hide);
console.log("on the way");

function hide() {
    button2.style.visibility = "visible"
    console.log("succes");
}