/**
 * p5js javalisson exemplos goioere
 * 
 * 
 */

var imgFloco;
var meuFloco;
var meuOutroFloco;
var listaFlocos = [];

// utilizada para carregar imagens, sons e fontes
function preload() {
    imgFloco = loadImage('floco.png');
}

// chamada no inicio do programa
function setup() {
    // cria o quadro, com dimensoes 900 x 400
    createCanvas(windowWidth, windowHeight);

    meuFloco = criaFloco(50, 50, 2);

    meuOutroFloco = criaFloco(150, 50, 1);

    for (var i = 0; i < 50; i++) {
    	listaFlocos.push(criaFloco(random(0, width), random(0, height), random(1, 3)));
    }
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
    // pinta o fundo de preto
    background(255, 255, 255);

    image(imgFloco, meuFloco.x, meuFloco.y, 72, 82);
    moveFloco(meuFloco);

    image(imgFloco, meuOutroFloco.x, meuOutroFloco.y, 72, 82);
    moveFloco(meuOutroFloco);

    for (var i = 0; i < listaFlocos.length; i++) {
    	image(imgFloco, listaFlocos[i].x, listaFlocos[i].y, 72, 82);
    	moveFloco(listaFlocos[i]);
    }

}

function criaFloco(_x, _y, _velocidade) {
	return {
		x: _x,
		y: _y,
		velocidade: _velocidade
	};
}

function moveFloco(_floco) {
	_floco.y = _floco.y + _floco.velocidade;
	if (_floco.y > height) _floco.y = -82;
}