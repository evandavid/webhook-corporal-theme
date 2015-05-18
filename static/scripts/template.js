//Contact Form

$('#submit').click(function(){

$.post("assets/php/send.php", $(".contact-form").serialize(),  function(response) {   
 $('#success').html(response);
});
return false;

});

$(document).ready(function(){
    $("#home").css('min-height', window.innerHeight+"px");
    $("#vacancies").css('min-height', window.innerHeight+"px");
    $("#download").css('min-height', window.innerHeight+"px");
})