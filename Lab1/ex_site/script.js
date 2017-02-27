function showList(){
  var select = document.getElementById("firstList");
  var options = select.getElementsByTagName("option");
  var opt_selected = select.options[select.selectedIndex];

  //console.log(opt_selected.value);

  if (opt_selected.value == "phone") {
    document.getElementById("phoneList").style.display = 'block';
    document.getElementById("computerList").style.display = 'none';
  }
  else if (opt_selected.value == "computer") {
    document.getElementById("computerList").style.display = 'block';
    document.getElementById("phoneList").style.display = 'none';
  }
  else {
    document.getElementById("computerList").style.display = 'none';
    document.getElementById("phoneList").style.display = 'none';
  }
}
