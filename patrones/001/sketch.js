let cantidad;

function setup() {
    createCanvas(windowWidth, windowHeight, SVG);
    cantidad = createSlider(1, 20, 10);
    cantidad.position(10, 10);
    colorUno = createColorPicker('#ffcccc');
    colorUno.position(10, 40);
    colorDos = createColorPicker('#ff8c8c');
    colorDos.position(80, 40);
    colorTres = createColorPicker('#163b73');
    colorTres.position(150, 40);
    colorFondo = createColorPicker('#fff2f2');
    colorFondo.position(220, 40);
}

function draw() {
    background(colorFondo.color());
    patron();
    frameRate(0)
}

function patron() {
    for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
    let malla = width / cantidad.value();
    let angulo = int(random(4)) * HALF_PI;
        push();
        translate(i * malla + malla / 2, j * malla + malla / 2);
        rotate(angulo);
        noStroke();
        fill(colorUno.color());
        arc(0, -malla / 2, malla, malla, HALF_PI, PI);
        fill(colorDos.color());
        arc(-malla / 2, 0, malla, malla, 0, HALF_PI);
        fill(255);
        arc(0, malla / 2, malla, malla, PI + HALF_PI, TWO_PI);
        fill(colorTres.color());
        arc(malla / 2, 0, malla, malla, PI, PI + HALF_PI);
        pop();
        }
    }
}