/**
 * p5js javalisson exemplos goioere
 * 
 * 
 */

var imgFloco;
var meuFloco;
var meuOutroFloco;
var listaFlocos = [];
var imgPapaiNoel;

var vento = 0, posMouseAnterior = 0, posMouseAtual = 0;

// utilizada para carregar imagens, sons e fontes
function preload() {
    imgFloco = loadImage('floco.png');
    imgPapaiNoel = loadImage('papai-noel.jpg');
}

// chamada no inicio do programa
function setup() {
	// usa graus ao inves de radianos
	angleMode(DEGREES);

    // cria o quadro, com dimensoes 900 x 400
    createCanvas(windowWidth, windowHeight);

    meuFloco = criaFloco(50, 50, 2);

    meuOutroFloco = criaFloco(150, 50, 1);

    for (var i = 0; i < 50; i++) {
    	listaFlocos.push(criaFloco(random(0, width), random(0, height), random(1, 3), random(0.5, 1.5), random(0.5, 1.5)));
    }
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	posMouseAtual = mouseX;

	if (posMouseAtual > posMouseAnterior) {
		vento = 1;
	} else if (posMouseAtual < posMouseAnterior) {
		vento = -1;
	} else {
		vento = 0;
	}

    // pinta o fundo de preto
    background(255, 255, 255);

    push();
    imageMode(CENTER);
    image(imgPapaiNoel, width/2, height/2);
    pop();

    image(imgFloco, meuFloco.x, meuFloco.y, 72, 82);
    moveFloco(meuFloco);

    image(imgFloco, meuOutroFloco.x, meuOutroFloco.y, 72, 82);
    moveFloco(meuOutroFloco);

    for (var i = 0; i < listaFlocos.length; i++) {
    	push();
    	translate(listaFlocos[i].x, listaFlocos[i].y);
    	rotate(listaFlocos[i].angulo);
    	image(imgFloco, -36, -41, 72, 82);
    	moveFloco(listaFlocos[i], vento);
    	giraFloco(listaFlocos[i]);
    	pop();
    }
    posMouseAnterior = mouseX;
}

function criaFloco(_x, _y, _velocidade, _velocidadeGiro, _sensibilidadeVento) {
	return {
		x: _x,
		y: _y,
		velocidade: _velocidade,
		angulo: 0,
		velocidadeGiro: _velocidadeGiro,
		sensibilidadeVento: _sensibilidadeVento
	};
}

function moveFloco(_floco, vento) {
	_floco.y = _floco.y + _floco.velocidade;
	if (_floco.y > height) _floco.y = -82;

	_floco.x = _floco.x + _floco.sensibilidadeVento * vento;
}

function giraFloco(_floco) {
	_floco.angulo = _floco.angulo + _floco.velocidadeGiro;
	if (_floco.angulo > 360) _floco.angulo = _floco.angulo - 360;
}