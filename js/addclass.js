$(document).ready(function(){
  $('.class-options li > a').click(function(e){
    // $('.status').text(this.innerHTML);
    // alert(this.innerHTML);
    $("#added-classes").prepend('<li><a href="#">'+this.innerHTML+'</a></li>');
    $(".close-modal").click();
});
});
