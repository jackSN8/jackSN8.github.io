let t = 0;
var radiusArray = new Array(360);

// let theta = 0;

function setup()
{

  createCanvas(500,500);
  radiusArray = setRadius(radiusArray);
  console.log(radiusArray[360]);
}

function draw()
{
  t+=1;
  if(t%1 == 0)
  {
    radiusArray = setRadius(radiusArray);
  }
  background(27);
  translate(250,250);
  strokeWeight(0);
  fill(0,255,0,60);
  beginShape();
  for(let i = 0; i<360; i++)
  {
    let theta = map(i,0,360,0,TWO_PI);
    currentPos = cartesianConversion(radiusArray[i],theta);
    stroke(255);
    vertex(currentPos.x,currentPos.y);
  }
  endShape();
  fill(0,0,255,30);
  circle(20,15,35);
}

function cartesianConversion(r,theta)
{
  let y = r*sin(theta);
  let x = r*cos(theta);
  let pos = createVector(x,y);
  return pos;
}

function setRadius(radiusArray)
{
  let noiseX = t/200;
  for(let i=0; i<radiusArray.length; i++)
  {
    let noiseY = map(i,0,360,0,100);
    radiusArray[i] = (noise(noiseX,noiseY))*15+47;
  }
  return radiusArray;
}
