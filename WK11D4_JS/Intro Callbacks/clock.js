function Clock () {
  let date = new Date();

  this.hours = date.getHours();
  this.minutes = date.getMinutes();
  this.seconds = date.getSeconds();

  this.printTime();

  setInterval(this._tick.bind(this), 1000);

}


Clock.prototype.printTime = function () {
  console.log(`${this.hours} : ${this.minutes} : ${this.seconds}`);
}

Clock.prototype._tick = function () {
  this.seconds++;
  
  if (this.seconds === 60) {
    this.seconds = 0;
    this.minutes++;
  }
  if (this.minutes === 60) {
    this.minutes = 0;
    this.hours++;
  }
  if (this.hours === 24) {
    this.hours = 0;
  }    
  this.printTime();
};


var clock = new Clock();