const MovingObject = require("./moving_object.js");
const Utils = require("./utils.js");

//default color purple default radius 100
const mediumAsteroid = new MovingObject(100, 100, 80, 0, 2 * Math.PI);
// {pos: userinput}
function Asteroid(options){
  options.pos = options.pos; 
  options.vel = Utils.randomVec(DEFAULTS.LENGTH); 
  options.color = DEFAULTS.COLOR;
  options.radius = DEFAULTS.RADIUS;
  MovingObject.call(this, options);
}


const DEFAULTS = {
  COLOR: 'purple',
  RADIUS: 15,
  LENGTH: 3,
}
// function Asteroid() { }
// Asteroid.inherits(MovingObject);

Utils.inherits(Asteroid, MovingObject);



module.exports = Asteroid;
