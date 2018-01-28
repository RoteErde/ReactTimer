
export class Timer{


  constructor(parentFunc){
    this.ancestor = parentFunc;
    this.seconds=0;
    this.isPaused=false;
    this.hhmmss="00:00:00";
  
  }
  
  timeLoop(){

    {
        if(this.isPaused===false){
          this.seconds++;
          this.ancestor({seconds:this.getFormattedTime(this.seconds)});
          //console.log(this.isPaused);
        }
      }
  }

  getFormattedTime(seconds){
    var date = new Date(null);
    date.setSeconds(seconds); // specify value for SECONDS here
    return date.toISOString().substr(11, 8);
  }
   
  onMessage(msg) {
    
    switch(msg){
      case 'start':
        this.startUpdate();
        break;
      case 'pause':
        this.pauseUpdate();
        break;
      case 'clear':
        this.resetTimer();
        break
    }
  }


  startUpdate(){
    this.isPaused=false;
    if(this.timer===undefined){
      this.seconds=0;
      this.timer= setInterval(()=>{this.timeLoop()},1000)
    }
  }

  pauseUpdate(){
    if(this.isPaused===false){
      this.isPaused=true;
    }else{
      this.isPaused=false;
    }
  }

  resetTimer(){
    clearInterval(this.timer);
    this.timer=undefined;
    this.seconds=0;

  }
  stopUpdate(){

  }

  reset(){
    
  }
}