var can, ctx, canX = [], canY = [], time = 10, score = 0, mouseIsDown = 0, start = 0;



function init() {
    can = document.getElementById("can");
    ctx = can.getContext("2d");

    can.addEventListener("mousedown", mouseDown, false);
    can.addEventListener("mousemove", mouseXY, false);

    document.body.addEventListener("mouseup", mouseUp, false);

    if (start == 0) {
      draw();
      decompte();
      start = 1;
    }

}

function mouseDown() {
    mouseIsDown = 1;
    mouseXY();
    catchSquare();
}

function mouseUp(){
  mouseIsDown = 0;
  mouseXY();
}

function mouseXY(e) {
    if (!e)
      e = event;
    canX[0] = e.pageX - can.offsetLeft;
    canY[0] = e.pageY - can.offsetTop;
    len = 1;
}

function decompte(){
  if (time >= 0) {
    if (time > 1) {
      var sec = " seconde.";
    }
    else {
      var sec = " seconde.";
    }
    document.getElementById('timer').innerHTML = 'Time: ' + time + sec;
    time--;
    draw();
    x = setTimeout("decompte()", 1000);
    j = setTimeout("draw()", 500);
  }
  else {
    clearTimeout(x);
    stopGame();
  }
}

function stopGame(){
  alert('Your score is: ' + score);
  location.reload();
}

function catchSquare(){
  if (canX >= randX && canY >= randY && canX <= randX + 50 && canY <= randY + 50) {
    score ++;
    var showScore = document.getElementById('score');
    showScore.innerHTML = "";
    showScore.innerHTML = "Score: " + score;
    draw();
  }
}

function draw() {
  ctx.clearRect(0,0, can.width, can.height);
  ctx.beginPath();
  randX = Math.floor(Math.random()*450);
  randY = Math.floor(Math.random()*450);
  ctx.rect(randX, randY, 50, 50);
  ctx.fillStyle = '#ff0000';
  ctx.fill();
  ctx.closePath();
  ctx.stroke();
}
