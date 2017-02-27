var can, ctx, canX, canY, mouseIsDown = 0;

function init(){
  can = document.getElementById('can');
  ctx = can.getContext("2d");

  can.addEventListener("mousedown", mouseDown, false);
  can.addEventListener("mousemove", mouseXY, false);

  document.body.addEventListener("mouseup", mouseUp, false);
}

function mouseUp(){
  mouseIsDown = 0;
  mouseXY();
}

function mouseDown(){
  mousIsDown = 1;
  mouseXY();
}

function mouseXY(e){
  if (!e) {
    var e = event;
  }
  canX = e.pageX - can.offsetLeft;
  canY = e.pageY - can.offsetTop;
  showPos();
}

function showPos(){
  ctx.font = "24pt Helvetica";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "rgb(64, 255, 64)";
  var str = canX + ", " + canY;

  if (mouseIsDown) {
    str += " down";
  }
  if (!mouseIsDown) {
    str += " up";
  }
  ctx.clearRect(0, 0, can.width, can.height);

  ctx.fillText(str, can.width / 2, can.height / 2, can.width - 10);

  ctx.fillStyle = "white";
  ctx.fillRect(canX -5, canY -5, 10, 10);
}
