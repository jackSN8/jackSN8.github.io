let pointList = [];
const totalPoints = 3;


function setup()
{
  createCanvas(800,500);
  background(27);
  for(let i=0; i<totalPoints; i++)
  {
    pointList.push(new controlPoint(createVector(random(300,500),random(200,400))));
  }
}

function draw()
{
  stroke(255);
  beginShape()
  vertex(pointList[0].pos.x,pointList[0].pos.y);
  drawNext(drawNext(0));  
  endShape();
}

function drawNext(start)
{
  let id = pointList[start].findClosest(pointList);
  vertex(pointList[id].pos.x,pointList[id].pos.y);
  return id;
}
