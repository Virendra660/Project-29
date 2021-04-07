const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine,world;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var box1=new BlueBox(500,360,20,30);
  var box2=new YellowBox(520,360,20,30);
  var box3=new GreenBox(540,360,20,30);
  var box4=new RedBox(560,360,20,30);
  var box5=new GreenBox(580,360,20,30);
  var box6=new YellowBox(600,360,20,30);

  var box7=new RedBox(510,330,20,30);
  var box8=new YellowBox(530,330,20,30);
  var box9=new BlueBox(550,330,20,30);
  var box10=new GreenBox(570,330,20,30);
  var box11=new RedBox(590,330,20,30);

  var box12=new YellowBox(520,310,20,30);
  var box13=new BlueBox(540,310,20,30);
  var box14=new RedBox(560,310,20,30);
  var box15=new GreenBox(580,310,20,30);

  var box16=new YellowBox(530,280,20,30);
  var box17=new RedBox(550,280,20,30);
  var box18=new GreenBox(570,280,20,30);

  var box19=new BlueBox(540,250,20,30);
  var box20=new RedBox(560,250,20,30);

  var box21=new GreenBox(550,220,20,30);

  var box22=new GreenBox(500,135,20,30);
  var box23=new BlueBox(520,135,20,30);
  var box24=new YellowBox(540,135,20,30);
  var box25=new RedBox(560,135,20,30);
  var box26=new GreenBox(580,135,20,30);
  var box27=new YellowBox(600,135,20,30);

  var box28=new BlueBox(510,105,20,30);
  var box29=new RedBox(530,105,20,30);
  var box30=new YellowBox(550,105,20,30);
  var box31=new GreenBox(570,105,20,30);
  var box32=new RedBox(590,105,20,30);

  var box33=new YellowBox(520,75,20,30);
  var box34=new BlueBox(540,75,20,30);
  var box35=new RedBox(560,75,20,30);
  var box36=new GreenBox(580,75,20,30);

  var box37=new YellowBox(530,45,20,30);
  var box38=new BlueBox(550,45,20,30);
  var box39=new GreenBox(570,45,20,30);

  ball=new Ball(0,0,50);

  spring=new Projectile(ball.body,{x:200,x:200});

  ground=new Platform(400,390,800,20);

  groundHovering=new Platform(550,160,200,20);

  Engine.run(engine)
}

function draw() {
  background(247,223,178);
  Engine.update(engine);
  
  debug:true;
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();

  box21.display();

  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();

  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();

  box33.display();
  box34.display();
  box35.display();
  box36.display();

  box37.display();
  box38.display();
  box39.display();

  ball.display();
  spring.display();
  ground.display();
  groundHovering.display();

}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
spring.fly();
}