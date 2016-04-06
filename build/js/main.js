

$(document).ready(function(){

  $('#submit-btn').on('click', function(){
    console.log('Clicked!');
    console.log(
    $('#name-field').val(),
    $('#email-field').val(),
    $('#message-field').val());
    $.post('/api/v1/contact', {
      name: $('#name-field').val(),
      email: $('#email-field').val(),
      message: $('#message-field').val()
    }).done(function(){
      console.log("Post successful");
    }).fail(function(){
      console.log("Post failed");
    })
  })

});
