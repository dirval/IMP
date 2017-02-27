function show() {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  //console.log(tag);
  $.getJSON( flickerAPI, {
    tags: $('#tagSearch').val(),
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $('.imgContainer').empty();
      //console.log(data);
      $.each( data.items, function( i, item ) {
        $('<div/>', {id: i, class:'img'}).appendTo(".imgContainer");
        $( "<img/>", {src: item.media.m}).appendTo( "#" + i );
        if ( i === 20 ) {
          return false;
        }
      });
    });
};
