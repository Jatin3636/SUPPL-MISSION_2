var helicopterIMG, helicopterSprite, packageSprite,packageIMG;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var redLine1,redLine2,redLine3;
var packageBody,ground,engine,world;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(0, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.velocityX = 2.5;

	helicopterSprite=createSprite(0, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.velocityX = 2.5;
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(0, 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	redLine1 = new redLine(width/2, height-65,220,20);
	redLine2 = new redLine(width/2 - 100, height-105,20,100);
	redLine3 = new redLine(width/2 + 100, height-105,20,100);
  
}

function keyPressed() {
	if(keyCode === DOWN_ARROW) {
	  packageSprite.velocityX = 0;
	  packageSprite.velocityY = 5;
	  Matter.Body.setStatic(packageBody, false);
	}
}

function draw() {
	if(packageBody.position.y < 201) {
		packageBody.position.x=packageSprite.x 
		packageBody.position.y=packageSprite.y 
	}

	if(packageBody.position.y > 201) {
		packageSprite.x= packageBody.position.x 
	packageSprite.y = packageBody.position.y 
	}

	packageSprite.x= packageBody.position.x 
	packageSprite.y = packageBody.position.y 
	console.log(packageBody.x);
	

	Engine.update(engine);
  	rectMode(CENTER);
  	background(0);
  	keyPressed();
  	drawSprites();

  	redLine1.display();
  	redLine2.display();
 	 redLine3.display();
}

