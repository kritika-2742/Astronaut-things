var astronaut,bg,sleep,brush,gym,eat,drink,move,bath;

function preload()
{
	bgImg = loadImage("iss.png");
	sleepImg = loadAnimation("sleep.png");
	brush = loadAnimation("brush.png");
	gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
	eat = loadAnimation("eat1.png","eat2.png");
	drink = loadAnimation("drink1.png","drink2.png");
	move = loadAnimation("move.png","move1.png");
	bath = loadAnimation("bath1.png","bath2.png");
}

function setup() {
	createCanvas(1000, 1000);
	rectMode(CENTER);
	

	bg=createSprite(500,500);
	bg.addImage(bgImg);
	bg.scale = 0.2;

	astronaut = createSprite(250,250);
	astronaut.addAnimation(sleepImg);

}


function draw() {

	drawSprites(); 
}

