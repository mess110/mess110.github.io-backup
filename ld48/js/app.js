window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
  window.webkitRequestAnimationFrame || 
  window.mozRequestAnimationFrame    || 
  window.oRequestAnimationFrame      || 
  window.msRequestAnimationFrame     || 
  function(/* function */ callback, /* DOMElement */ element){
    window.setTimeout(callback, 1000 / 60);
  };
})();

var canvas, context, toggle;
var WIDTH = 640;
var HEIGHT = 480;

init();
animate();

function init() {
  canvas = document.getElementById('game');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  context = canvas.getContext('2d');
}

function animate() {
  requestAnimFrame( animate );
  clear();
  draw();
}

function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  var time = new Date().getTime() * 0.002;
  var x = Math.sin( time ) * 192 + 256;
  var y = Math.cos( time * 0.9 ) * 192 + 256;
  toggle = !toggle;

  context.fillStyle = toggle ? 'rgb(200,200,20)' :  'rgb(20,20,200)';
  context.beginPath();
  context.arc( x, y, 10, 0, Math.PI * 2, true );
  context.closePath();
  context.fill();
}
