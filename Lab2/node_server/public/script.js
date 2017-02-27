function border(){
  /*showBorder();
  window.addEventListener('resize', showBorder, false);*/


  //function showBorder(){
  //  console.log("resize");
    if (document.body.clientWidth <= 480){
      var menu = document.getElementById('menu');
      menu.innerHTML += "<hr>";
    }
  //}
}
