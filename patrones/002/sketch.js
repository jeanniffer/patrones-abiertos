function setup() {
    createCanvas(windowWidth, windowHeight)
    background(200)
}

function draw() {
    const tamano = 200
    const sangria = 100
    noLoop()
    noFill()
    rect(sangria, sangria, tamano, tamano)
    line(300, 300, 600 , 200)
    ellipse(500, 500, 700, 200)
    triangle(20, 29, 20, 20, 80, 60)
    arc(200, 200, 400, 200, 0, 200)
    point(80, 80)
    square(20, 20, 10)
}