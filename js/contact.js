// VALIDATION


// var mail = $(".input-email");
//
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
// mail.on('input', function() {
//   if( !validateEmail(mail.val())) {
//     mail.addClass("input-error");
//     errors.text("Wygląda na to, że pole email nie jest wypełnione prawidłowo.");
//   }
//   else{
//     $(".contact__form").children().find(".input-error").removeClass("input-error");
//   }
// });



$(document).ready(function(){

  var name = $(".input-name");
  var send = $(".btn-send");
  var mail = $(".input-email");
  var content = $(".input-content");
  var errors = $(".form__errors");

  send.click(function(){
  $(".contact__form").children().find(".input-error").removeClass("input-error");
  errors.text("");

  if( name.val() === "" || mail.val() === "" || content.val() === ""){
    if(name.val() === ""){
      console.log("name empty");
      name.addClass("input-error");
      errors.text("Zaznaczone pola nie mogą być puste");
    }
    if( mail.val() === "" ){
      console.log("empty mail");
      mail.addClass("input-error");
      errors.text("Zaznaczone pola nie mogą być puste");
    }
    if(content.val() === ""){
      console.log("content empty");
      content.addClass("input-error");
      errors.text("Zaznaczone pola nie mogą być puste");
    }
  }
  else if( !validateEmail(mail.val())) {
    mail.addClass("input-error");
    console.log("mail wrong");
    errors.text("Wygląda na to, że pole email nie jest wypełnione prawidłowo.");
  }
  else{
      console.log("Wyslij");
      $.ajax({
        url: "https://formspree.io/kmita69@gmail.com",
        method: "POST",
        data: {message: content.val(), name: name.val(), _replyto: mail.val(), _cc: "pkmita@invinsys.com, wozimek@invinsys.com"},
        dataType: "json"
      });
      $('#msgModal').foundation('open');
      console.log("wiadomość wysłana");
    }


  });



});
