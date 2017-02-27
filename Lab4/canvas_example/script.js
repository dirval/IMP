function getRandomNumber(max){
  return Math.floor(Math.random() * max);
}

function startTheShow(){
  window.setInterval(drawSomething, 500);
}

function drawSomething(){
  var canvas = document.getElementById('drawCanvas');
  var drawingContext = canvas.getContext('2d');
  var x = getRandomNumber(200);
  var y = getRandomNumber(200);
  var size = getRandomNumber(60);

  console.log(x);

  drawingContext.rect(x,y,size,size );
  drawingContext.stroke();
}
