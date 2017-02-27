function addPerson(element){
  console.log(element);
  var list = document.getElementById('textList');
  var name = document.getElementById('name').value;
  list.innerHTML += "<p>" + name + "</p>";
}