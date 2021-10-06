var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,300,30)
    block1.shapeColor = "red";

    block2 = createSprite(270,580,200,30)
    block2.shapeColor = "blue";

    block3 = createSprite(490,580,200,30)
    block3.shapeColor = "green";

    block4 = createSprite(760,580,300,30)
    block4.shapeColor = "orange";

    //create box sprite and give velocity
    ball=createSprite(random(20,770),100,40,40);
    ball.shapeColor="white";
    ball.velocityX=4;
    ball.velocityY=9;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if(block1.isTouching(ball)&&ball.bounceOff(block1)){
        ball.shapeColor="red";
    }
    if(block2.isTouching(ball)&&ball.bounceOff(block2)){
        ball.shapeColor="blue";
    }
    if(block3.isTouching(ball)&&ball.bounceOff(block3)){
        ball.shapeColor="green";
    }
    if(block4.isTouching(ball)&&ball.bounceOff(block4)){
        ball.shapeColor="orange";
    }


    //add condition to check if box touching surface and make it box
    drawSprites();
}
