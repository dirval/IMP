function addPerson(){
	$('<p/>', {text: $("input").val()}).appendTo('#content');
}
