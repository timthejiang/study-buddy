$(document).ready(function(){
  $('.class-options li > a').click(function(e){
    // $('.status').text(this.innerHTML);
    // alert(this.innerHTML);
    $("#added-classes").prepend('<li><a href="empty_class_page.html">'+this.innerHTML+'</a></li>');
    $(".sel-class").text(this.innerHTML);
    $(".sel-class").attr("href","./empty_class_page.html");
    $(".close-modal").click();
});
});
