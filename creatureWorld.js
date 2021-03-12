let width = 1000;
let height = 1000;
let c1;

function setup()
{
  createCanvas(width,height);
  c1 = new creature(30);
}

function draw()
{
  background(27);

}


function cartesianConversion(theta, radius)
{
  let x = radius*cos(theta);
  let y = radius*sin(theta);
  let pos = createVector(x,y);
  return pos;
}
