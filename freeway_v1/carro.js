let yCarros = [40,96,150];
let velocidadeCarros = [2,2.5,3.2];
let xCarros = [600,600,600];

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i= i + 1){
  	image(imagemCarros[i], xCarros[i] ,yCarros[i],50,40);
  }
}

function movimentaCarro(){
  for (let i = 0; i<  imagemCarros.length; i = i+1){
  xCarros[i]-= velocidadeCarros[i];  
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i = i+1){
      if(passouTodaTela(xCarros[i])){
	  xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro < - 50;
}
