/**
 * p5js boilerplate
 * 
 * 
 */

// utilizada para carregar imagens, sons e fontes
var listaFlocos = [];
var listaPosicoes = [];
var listaVelocidades = [];

var quantiaFlocos = 50;
var tamanhoFlocos;

function preload() {
    tamanhoFlocos = createVector(20, 20);

	for (var i = 0; i < quantiaFlocos; i++) {
    	listaFlocos.push(loadImage("assets/floco.jpg"));
    	listaPosicoes.push(createVector(random(0, 900), random(0, 400)));
    	listaVelocidades.push(random(1, 5));
    }
}

// chamada no inicio do programa
function setup() {
    // cria o quadro, com dimensoes 900 x 400
    createCanvas(900, 400); //, WEBGL);
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
    // pinta o fundo de preto
    background(200);

    for (var i = 0; i < quantiaFlocos; i++) {
    	image(listaFlocos[i], listaPosicoes[i].x, listaPosicoes[i].y, tamanhoFlocos.x, tamanhoFlocos.y);

    	listaPosicoes[i].y = listaPosicoes[i].y + listaVelocidades[i];

    	if (listaPosicoes[i].y >= 400 ) {
    		listaPosicoes[i].y = 0;
    		listaPosicoes[i].x = random(0, 900);
    		listaVelocidades[i] = random(1, 5);
    	}
    }

}
