var posy= 10;
var posx=5
var diry=2;
var dirx=10

var posa= 20;
var posb=10
var dira=5;
var dirb=20

var posc= 10;
var posd=8
var dirc=2;
var dird=12

function setup() {
  createCanvas(600, 400);
background(3,14,80);
}


function draw() 
  {

background(3,14,80);

		fill(0,10);
		rect(0,0,width,height);
		fill(255);
		noStroke();
		ellipse(random(width),random(height),5,30);
	
		
	
noStroke()
fill(129,6,67)
ellipse(posx, posy, 40, 40)
posx = posx +dirx;
if(posx>width-10 ||posx<10)
{
  dirx=dirx*-1;
}
  
posy = posy + diry;
if(posy >height-10 ||posy<10)
{
  diry=diry*-1;
}
		
{
	fill(242,218,153)
	noStroke();
point(30, 20);
point(80, 20);
point(80, 75);
point(30, 75);

noStroke();
point(50, 80);
point(60, 25);
point(30, 20);

noStroke();
strokeWeight(1);
beginShape();
vertex(30, 20);
bezierVertex(80, 20, 80, 75, 30, 75);
bezierVertex(50, 80, 60, 25, 30, 20);
endShape();
}
		
		{
noStroke()
fill(14,232,223)
ellipse(posb, posa, 50, 50)
posb = posb +dirb;
if(posb>width-10 ||posb<10)
{
  dirb=dirb*-1;
}
  
posa = posa + dira;
if(posa >height-10 ||posa<10)
{
  dira=dira*-1;
}
}
		
		noStroke()
fill(3,247,46)
ellipse(posd, posc, 40, 40)
posd = posd +dird;
if(posd>width-10 ||posd<10)
{
  dird=dird*-1;
}
  
posc = posc + dirc;
if(posc >height-10 ||posc<10)
{
  dirc=dirc*-1;
		
}
		{
			fill(250,182,22)
ellipse(300,200,130,130)
		}

		fill(155,4,253)
		ellipse(120, 70, 40 + (sin(frameCount / 30) * 50), 80)
		
}
