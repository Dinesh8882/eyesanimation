let box1 = document.querySelector(".inner-box")
let box2 = document.querySelector(".inner-box2")

window.addEventListener("mousemove", function (e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;


    let deltaX = mouseX - window.innerWidth / 2
    let deltaY = mouseY - window.innerHeight / 2

    var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
    box1.style.transform = `rotate(${angle - 180}deg)`
})

window.addEventListener("mousemove", function (e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;


    let deltaX = mouseX - window.innerWidth / 2
    let deltaY = mouseY - window.innerHeight / 2

    var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)

    box2.style.transform = `rotate(${angle - 180}deg)`



})