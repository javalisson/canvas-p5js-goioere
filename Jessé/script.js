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
    createCanvas(900, 400);
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
    // pinta o fundo de preto
    background(255, 255, 255);

    rect(50, 150, 25, 25);

    ellipse(width / 2, height / 2, 150, 150);
}
