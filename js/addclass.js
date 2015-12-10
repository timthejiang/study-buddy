$(document).ready(function(){
  $('.class-options li > a').click(function(e){
    // $('.status').text(this.innerHTML);
    // alert(this.innerHTML);
    $("#added-classes").prepend('<li><a href="empty_class_page.html">'+this.innerHTML+'</a></li>');
    $(".close-modal").click();
});
});
