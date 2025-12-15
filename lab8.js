document.getElementById("colorBtn").addEventListener("click", function () {
    document.getElementById("colorBox").style.background = "mediumseagreen";
});

document.getElementById("resizeBtn").addEventListener("click", function () {
    const circle = document.getElementById("circleShape");
    circle.style.width = "150px";
    circle.style.height = "150px";
    this.innerHTML = "Circle Resized!";
});

document.getElementById("moveBtn").addEventListener("mouseover", function () {
    const oval = document.getElementById("ovalShape");
    oval.style.transform = "translateX(200px)";
});

document.getElementById("message").addEventListener("dblclick", function () {
    this.innerHTML = "Nice! You double-clicked the message!";
});