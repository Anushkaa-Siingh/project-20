var car
var wall
var weight
var speed
function setup() {

  createCanvas(800,400);
  car =  createSprite(105, 150, 50, 50);
wall = createSprite(400,129,35,100);
 weight=random(400,1500);
car.debug;
wall.debug;
car.shapeColor="blue";
wall.shapeColor="grey";
 speed=random(55,90);
car.velocityX=speed

}

function draw() {
  background(0); 
 

  
  if(wall.x-car.x<car.width/2+wall.width/2){
car.velocityX=0;
  
   
    
     deformation=0.5 *weight *speed *speed/22500
console.log(deformation)
        if( deformation<100 )  {
          car.shapeColor="green";
        }                  
         if( deformation>100 && deformation<180 ){
           car.shapeColor="yellow";
         }

         if(deformation>180){
           car.shapeColor="red";
         }

         




    } else{
      car.shapeColor="blue";
      wall.shapeColor="grey";





          
    }
     
  


  drawSprites();

}