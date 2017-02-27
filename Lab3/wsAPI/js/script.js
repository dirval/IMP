
/*var bg = document.getElementById('bgcolor').value;
var fs = document.getElementById('font').value;

console.log(bg);
console.log(fs);*/
function wsApi(){
	if(!localStorage.getItem('bgcolor')) {
  		dataStorage();
	} else {
  		setStyles();
	}
}

function setStyles() {
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;
  console.log(currentColor);

  document.querySelector('html').style.backgroundColor = currentColor;
  document.querySelector('p').style.fontFamily = currentFont;
}

function dataStorage(){
	localStorage.setItem('bgcolor' , document.getElementById('bgcolor').value);
	localStorage.setItem('font' , document.getElementById('font').value);

	setStyles();

}

/*document.getElementById('bgcolor').onchange = dataStorage;
document.getElementById('font').onchange = dataStorage;*/

/*function saveWs(bgcolor, fontStyle){


}*/


