this.t = 0;
this.radiusArray = new Array(360);


class creature
{
  //This.dot
  constructor(radius)
  {
    this.r = radius;
    this.setRadius(this.radiusArray);
  }

  //Function that takes in an array
  setRadius(radiusArray)
  {
    this.noiseX = t/200;
    for(this.i=0; this.i<radiusArray.length; this.i++)
    {
      this.noiseY = map(i,0,360,0,100);
      radiusArray[i] = (noise(this.this.noiseX,this.noiseY))*15+47;
    }
    return this.radiusArray;
  }
}
