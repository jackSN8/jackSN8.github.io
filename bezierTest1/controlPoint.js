class controlPoint
{
  constructor(tPos)
  {
    this.pos = tPos;
  }


  //Function to find closest object of the same type, returns position in array
  findClosest(inputArray)//takes array of controlPoint objects
  {
    this.lowestDif = 50000;
    this.lowestID = null;
    for(let i=0; i<inputArray.length; i++)
    {
      this.inputPos = inputArray[i].pos;

      this.xDif = abs(this.inputPos.x - this.pos.x);

      this.yDif = abs(this.inputPos.y - this.pos.y);
      this.totalDif = (createVector(this.xDif,this.yDif)).mag();
      console.log(this.totalDif);
      if(this.totalDif<this.lowestDif && this.totalDif != 0)
      {
        //console.log(this.xDif);
        this.lowestDif=this.totalDif;
        this.lowestID = i;
      }
      else
      {
      }
    }
    return this.lowestID;
  }


}
