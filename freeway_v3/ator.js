let yAtor = 366;
let xAtor = 100;
let colisao = false;



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