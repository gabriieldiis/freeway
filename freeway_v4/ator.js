let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
  image(imagemAtor, xAtor, yAtor,30,30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3
  }
    if (keyIsDown(DOWN_ARROW)){
    yAtor += 3
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor,15)
    if(colisao){
      colidiu();
      }
    }
}

function colidiu(){
  yAtor = 366
}

function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255,240,60))
  text(meusPontos, width / 5, 27)
}

function marcaPonto(){
  if(yAtor < 15 ){
    meusPontos += 1;
    colidiu()
  }
}