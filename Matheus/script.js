/**
 * p5js boilerplate
 *
 *
 */

// utilizada para carregar imagens, sons e fontes
function preload() {

}

// chamada no inicio do programa
function setup() {
    // cria o quadro, com dimensoes 900 x 400
    createCanvas(screen.width, screen.height);
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {

    // pinta o fundo de preto
//    background(255,255,255);

    // rect(50,150,25,25);
    fill(255,0,0);
    push();
    rotate(random(0,360))
    pop();
    fill(random(0,255),random(0,255),random(0,255));
    ellipse(mouseX, mouseY, random(0,width), random(0,height));
    stroke(random(0,255),random(0,255),random(0,255));
    line(mouseX, mouseY, random(0,width), random(0,height));
    line(mouseX, mouseY, random(0,width), random(0,height));
    line(mouseX, mouseY, random(0,width), random(0,height));
    line(mouseX, mouseY, random(0,width), random(0,height));
    line(mouseX, mouseY, random(0,width), random(0,height));
    line(mouseX, mouseY, random(0,width), random(0,height));

}
