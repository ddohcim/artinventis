$(document).foundation();


$(document).ready(function(){
  $(".admin__info").text(Foundation.MediaQuery.current);
});
window.addEventListener('resize', function(event){
  $(".admin__info").text(Foundation.MediaQuery.current);
});
