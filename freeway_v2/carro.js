
// carro 1
let xCarro = 600;
let yCarro = 40;
// carro 2
let xCarro2 = 600;
let yCarro2 =96;
// carro 3 
// let xCarro3 = 600;
// let yCarro3 =;


function mostraCarro(){
  image(imagemCarro, xCarro,yCarro,50,40);
  image(imagemCarro2, xCarro,yCarro,50,40);

}

function movimentaCarro(){
  xCarro -= 2;
  xCarro2 -= 3;
}
