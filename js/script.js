const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".trail");

const colors = [
"#ef70fa",
"#db5cf4",
"#c54aeb",
"#ac3ae2",
"#922cd6",
"#772dba",
"#602f9f",
"#4e2e85",
"#3e2d6d",
"#322956",
"#582f94",
"#4c2e83",
"#422d73",
"#3a2b64",
"#322956",

];

circles.forEach(function (circle, index) {
circle.x = 0;
circle.y = 0;
circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
coords.x = e.clientX;
coords.y = e.clientY;

});

function animateCircles() {

let x = coords.x;
let y = coords.y;

circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.4;
    y += (nextCircle.y - y) * 0.4;
});

requestAnimationFrame(animateCircles);
}

animateCircles();