/**
 * p5js boilerplate
 *
 *
 */

// utilizada para carregar imagens, sons e fontes
function preload() {
  imgFloco = loadImage("floco.png");
}

// chamada no inicio do programa
function setup() {
    // cria o quadro, com dimensoes 900 x 400
    createCanvas(windowWidth, windowHeight);
    posFloco = createVector(200,500);
    vet = [];
    for(i = 0; i < 15000; i++){
      vet.push([image(imgFloco, 1, 1, 50,50), 0, random(0,10), random(0,windowWidth)]);
    }
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao

function draw() {

    // pinta o fundo de preto
    // rect(50,150,25,25);
    // fill(255,0,0);
    // push();
    // rotate(random(0,360))
    // pop();
    // fill(random(0,255),random(0,255),random(0,255));
    // ellipse(mouseX, mouseY, random(0,width), random(0,height));
    // stroke(random(0,255),random(0,255),random(0,255));
    // line(mouseX, mouseY, random(0,width), random(0,height));
    // line(mouseX, mouseY, random(0,width), random(0,height));
    // line(mouseX, mouseY, random(0,width), random(0,height));
    // line(mouseX, mouseY, random(0,width), random(0,height));
    // line(mouseX, mouseY, random(0,width), random(0,height));
    // line(mouseX, mouseY, random(0,width), random(0,height));

    background(255,255,255);
    for(i = 0; i < vet.length; i++){
      vet[i][1] += vet[i][2];
      vet[i][0] = image(imgFloco, vet[i][3], vet[i][1], 50,50);
    }
}
