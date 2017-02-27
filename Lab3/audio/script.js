function play(){
  var audio = document.getElementById('audio');
  var playb = document.getElementById('play');
  var pauseb = document.getElementById('pause');

  playb.style.backgroundColor = 'black';
  pauseb.style.backgroundColor = 'red';
  audio.play();
}

function pause(){
  var audio = document.getElementById('audio');
  var playb = document.getElementById('play');
  var pauseb = document.getElementById('pause');

  playb.style.backgroundColor = 'red';
  pauseb.style.backgroundColor = 'black';
  audio.pause();
}

function volume(){
  var volume = document.getElementById('volume').value;
  console.log(volume);
  audio.volume = volume;
}
