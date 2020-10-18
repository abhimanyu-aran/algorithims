var fixedRec,movingRec



function setup() {
  createCanvas(800,400);
 fixedRec = createSprite(400, 200, 100, 50);
 fixedRec.shapeColor = "lightgreen"
 fixedRec.debug = true

movingRec = createSprite(100,100,50,100)
movingRec.shapeColor = "lightblue"
movingRec.debug = true


}

function draw() {
  background("black");
  console.log(movingRec.x - fixedRec.x)
  movingRec.x = mouseX
  movingRec.y = mouseY  
  if(movingRec.x - fixedRec.x <= movingRec.width/2 + fixedRec.width/2 && fixedRec.x - movingRec.x <= movingRec.width/2 + fixedRec.width/2 && movingRec.y - fixedRec.y <= movingRec.height/2 + fixedRec.height/2 && fixedRec.y - movingRec.y <= movingRec.height/2 + fixedRec.height/2){
    movingRec.shapeColor = "red"
    fixedRec.shapecolor = "yellow"
  }
  else{
movingRec.shapeColor = "lightblue"
fixedRec.shapeColor = "lightgreen"
  }

  drawSprites();
}