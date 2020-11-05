//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogImg;

function preload()
{
  dogImg = loadImage("Dog.png");
  happyDog=loadImage("happydog.png");



	//load images here
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,350,30,30);
  dog.addImage(dogImg);
  dog.scale=0.2;
  database=firebase.database();
 foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

  fill("white");
  stroke("black");
  strokeWeight(2);
  textSize(22);
  text("PRESS UP ARROW TO FEED THE DOG",50,100);
 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
   dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
Food:x
  })
}