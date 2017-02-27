function wsApi(){
	if(!localStorage.getItem('nameList')) {
  		addPerson();
	} else {
  		setList();
	}
}

function setList() {
	if (localStorage.getItem('nameList')) {
		var nameData = localStorage.getItem('nameList');
	  	var list = document.getElementById('content');
	  	var listName = JSON.parse(nameData);

		//console.log(listName);
		list.innerHTML = "";

	  	for (var i = 0; i < listName.length; i++) {
	    	list.innerHTML += "<p>" + listName[i] + "</p>";
		}
  }
}

function addPerson(name){
  	if (!name) {
		if (!localStorage.getItem('nameList')) {
			localStorage.clickcount = 0;
			names = [];
		}
		else {
			alert("You can't add a empty name!");
		}

  	} else {
    	names = JSON.parse(localStorage.getItem('nameList'));
		names[localStorage.clickcount] = document.getElementById('name').value;
		localStorage.clickcount = Number(localStorage.clickcount)+1;
  	}

  	localStorage.setItem("nameList", JSON.stringify(names));

	setList();

}

function nameErase(){
  localStorage.removeItem('nameList');
  location.reload(true);
}
