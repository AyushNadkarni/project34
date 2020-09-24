//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload(){
dog = loadImage("Dog.png");

happyDog =loadImage("happydog.png")
}

function setup() {
  createCanvas(500,500);
  
  database = firebase.database();

  dog = createSprite(120,120,20,20)
  


  foodStock = database.ref('food')
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);


  drawSprites();
  Text("NOTE:PRESS UP ARROW TO FEED YOUR PET DOG",250,100)
  //add styles here

 // ADDING FUNCTION
keyWentDown();
}

if(keyWentDown(UP_ARROW)){
  readStock(foodS);

  dog.addImage(happyDog);
}

function readStock(x){
  if(x<=0){
    x = 0;
  }else{
    x = x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



