var can, ctx, flag, dot_flag = false;
var prevX, prevY, currX, currY = 0;
var x = 'red';
var y = 2;

function init(){
  can = document.getElementById('can');
  ctx = can.getContext("2d");
  w = can.width;
  h = can.height;

  can.addEventListener("mousemove", function (e){ findxy('move', e) }, false);
  can.addEventListener("mousedown", function (e){ findxy('down', e)}, false);
  can.addEventListener("mouseup", function (e){ findxy('up', e)}, false);
  can.addEventListener("mouseout", function (e){ findxy('out', e)}, false);
}

function draw(){
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(currX, currY);
  ctx.strokeStyle = x;
  ctx.lineWidth = y;
  ctx.stroke();
  ctx.closePath();
}

function erase(){
  ctx.clearRect(0,0,w,h);
}

function findxy(res, e){
  if (res == 'down') {
    prevX = currX;
    prevY = currY;

    currX = e.clientX - can.offsetLeft;
    currY = e.clientY - can.offsetTop;

    flag = true;
    dot_flag = true;
    if (dot_flag) {
      ctx.beginPath();
      ctx.fillStyle = x;
      ctx.fillRect(currX, currY, 2, 3);
      ctx.closePath();
      dot_flag = false;
    }
  }

  if (res == 'up') {
    if (flag) {
      prevX = currX;
      prevY = currY;
      currX = e.clientX - can.offsetLeft;
      currY = e.clientY - can.offsetTop;
      draw();
    }
  }
}
