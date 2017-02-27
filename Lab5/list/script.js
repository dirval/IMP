function loadList(){
  $.ajax({
    dataType: 'jsonp',
    url: 'https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp'
  });
}

function jsonCallback(json){
  // console.log(json);
  // console.log(json[1].address);
  $.each(json, function(i, json){
    // console.log(json);
    $('<p/>', {text: json.name + ': ', id: i}).appendTo('#listPerson');
    $('<a/>', {text: json.email, href: '#'}).appendTo('#' + i);
  });
}
