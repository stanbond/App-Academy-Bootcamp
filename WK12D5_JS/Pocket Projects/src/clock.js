// import 'warmup.js';
import { htmlGenerator } from "./warmup.js";

export default class Clock {
  constructor(element) {
    // 1. Create a Date object.
    const currentTime = new Date();

    // 2. Store the hour, minute, and second.
    this.hours = currentTime.getHours();
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();

    this.clockEl = element;
    // 3. Call printTime.
    this.printTime();
    
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    const timeString = [this.hours, this.minutes, this.seconds].join(":");

    // Use console.log to print it.
    htmlGenerator(timeString, this.clockEl);
  }

  _tick() {
    // 1. Increment the time by one second.
    this._incrementSeconds();

    // 2. Call printTime.
    this.printTime();
  }

  _incrementSeconds() {
    // 1. Increment the time by one second.
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this._incrementMinutes();
    }
  }

  _incrementMinutes() {
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0;
      this._incrementHours();
    }
  }

  _incrementHours() {
    this.hours = (this.hours + 1) % 24;
  }
}

document.addEventListener("DOMContentLoaded", () => {
    const clockEl = document.getElementById("clock");
    console.log(clockEl);
    const clock = new Clock(clockEl);
})


// const clock = new Clock();
// const clockHolder = document.getElementsByClassName("clock-holder");
// clockHolder.appendChild(clock.printTime());

/*
class Clock {
    constructor(params) {

    }
}

let clock = new Clock();
let clockElement =

module.exports = Clock;
*/