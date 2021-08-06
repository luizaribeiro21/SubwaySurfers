//declara as variáveis 
var jake, jakeRunning;
var path, pathImage; 
var bomb, bomb2, bomb3, bomb4, bomb5, bombImage; 
var coin, coinImage; 
var energy, energyImage; 
var finish, finishImage; 


function preload(){
  //carregas tudo antes do jogo iniciar 
  
  jakeRunning = loadAnimation("Jake1.png","Jake1.png",
                            "Jake2.png","Jake2.png");
  pathImage = loadImage ("path.png"); 
  
  bombImage = loadImage ("bomb.png");
  
  coinImage = loadImage ("coin.png"); 
  
  energyImage = loadImage ("energyDrink.png");
  
  finishImage = loadImage ("finish.png"); 
}
 

function setup(){
  createCanvas(400,400);
  
   //criar e edita o sprite do path 
  path = createSprite (195,200,400,400); 
  path.addImage ("ground", pathImage); 
  path.scale = 1.4; 
  path.y = path.y/3; 
  path.velocityY = 4;
  
  
   //criar e edita o sprite do finish line  
  finish = createSprite (200,-200,800,800); 
  finish.addImage ("ground", finishImage); 
  finish.scale = 1.8; 
  
  //cria e edita o sprite do jake  
  jake = createSprite(200,200,20,50);
  jake.addAnimation("running", jakeRunning);
  jake.scale = 0.8; 
  
  
   //criar e edita o sprite do coin 
  coin = createSprite (200,-25,20,20); 
  coin.addImage ("object", coinImage);
  coin.scale = 0.4; 
  
  
   //criar e edita o sprite do energy 
  energy = createSprite (70,-25,20,20); 
  energy.addImage ("object", energyImage); 
  energy.scale = 0.1; 
   
  
  //cria e edita o sprite das bombas
  bomb = createSprite (200,-25,20,20); 
  bomb.addImage ("object", bombImage); 
  bomb.scale = 0.1; 
  
  bomb2 = createSprite (60,-25,20,20); 
  bomb2.addImage ("object", bombImage); 
  bomb2.scale = 0.1; 
  
  bomb3 = createSprite (330,-25,20,20); 
  bomb3.addImage ("object", bombImage); 
  bomb3.scale = 0.1; 
  
  bomb4 = createSprite (200,-25,20,20); 
  bomb4.addImage ("object", bombImage); 
  bomb4.scale = 0.1; 
  
  bomb5 = createSprite (290,-25,20,20); 
  bomb5.addImage ("object", bombImage); 
  bomb5.scale = 0.1; 
  
 //cria as edges  
 edges = createEdgeSprites (); 
  
 
}

function draw(){
  
  background ("black"); 
  
  console.log (bomb.y);
  
  
  //quando clicar na tecla a o jake movera para a esquerda 
    if (keyDown("a")) {
      jake.x = jake.x -10;
    } 
  
  //quando clicar na tecla a o jake movera para a esquerda 
    if (keyDown("d")) {
      jake.x = jake.x + 10;
    } 
  
  //quando o path chegar a 400 ele recebe o terço dele de novo
    if (path.y > 400){
      path.y = path.y/3;
      bomb.velocityY = 8; 
    } 
  
  //quando as bombas estiverem maior que 400 no y outras bombas vão cair
    if (bomb.y > 400){
    bomb2.velocityY = 8; 
    }
    
   if (bomb2.y > 400){
    bomb3.velocityY = 8; 
    }
  
   if (bomb3.y > 400){
    bomb4.velocityY = 8; 
    }
  
   if (bomb4.y > 400){
    bomb5.velocityY = 8; 
    }
    
  if (bomb5.y > 400){
    coin.velocityY = 8; 
  }
  
  //se o coin estiver mais do que 400 no y o energy drink irá cair
  if (coin.y > 400){
    energy.velocityY = 8; 
  }
  
  if (energy.y >400){
    sacar (); 
  }
  
  //se jake encostar no coin o energy drink irá cair 
  if (jake.isTouching (coin)){
   coin.x = 500; 
   energy.velocityY = 8; 
  }
  
  //se jake encostar na enery o path vai desaparecer e o finish line vai aparecer 
  if (jake.isTouching (energy)){
    energy.x = 500; 
    path.x = 1000; 
    finish.y = 200; 
    finish.x = 200; 
  }
  
  //se jake encostar na bomba todas as bombas vão deseaparecer e o jogo vai redefinir
   if (jake.isTouching(bomb) || jake.isTouching (bomb2) ||            jake.isTouching (bomb3) || jake.isTouching (bomb4) ||            jake.isTouching (bomb5)) { 
      bomb.x  = 500; 
      bomb2.x = 500; 
      bomb3.x = 500; 
      bomb4.x = 500; 
      bomb5.x = 500; 
      redefinir();
  } 
  
  //quando clicar no espaço o jogo vai estar no modo 'sacar'
  if (keyDown("space")) {
    sacar(); 
  }
  
  //quando jake chegar nas bordas ele vai parar 
  jake.collide (edges); 

  //desenha todas as sprites
  drawSprites();

}


//se o jogo estiver no modo sacar o path moverá de novo e as bombas, coin, energy e finish retornarão para suas posições originais com velocidade 0 
function sacar() {
  path.velocityY = 4;
  path.x = 195; 
  path.y = 200; 
  bomb.x = 200; 
  bomb.y = -25; 
  bomb.velocityY = 8; 
  bomb2.x = 60; 
  bomb2.y = -25; 
  bomb2.velocityY = 0;
  bomb3.x = 330; 
  bomb3.y = -25; 
  bomb3.velocityY = 0;  
  bomb4.x = 200; 
  bomb4.y = -25; 
  bomb4.velocityY = 0; 
  bomb5.x = 290; 
  bomb5.y = -25; 
  bomb5.velocityY = 0;
  coin.x = 200;
  coin.y = -25; 
  coin.velocityY = 0; 
  energy.x = 70; 
  energy.y = -25; 
  energy.velocityY = 0;
  finish.x = 1500; 
}

//quando o jogo estiver no modo redefinir o jake e o path estarão em suas posições originais e os outros objetos estarão com velocidade 0 
function redefinir() {
  jake.x = 200;
  jake.y = 200;
  path.y = 195; 
  path.x = 197;
  path.velocityY   = 0; 
  bomb.velocityY   = 0; 
  bomb2.velocityY  = 0; 
  bomb3.velocityY  = 0; 
  bomb4.velocityY  = 0; 
  bomb5.velocityY  = 0; 
  coin.velocityY   = 0; 
  energy.velocityY = 0; 
}
