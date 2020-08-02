const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var block1, block2;

function setup() {
  createCanvas(800,400);
  block1 = new Block(330, 235, 30, 40);
  block2 = new Block(360, 235, 30, 40);

}

function draw() {
  background(255,255,255);

  block1.display();
  block2.display();
}