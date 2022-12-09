$(".blue").click(function(){
  $(".text").css("color", "blue");
});
$(".red").click(function(){
  $(".text").css("color", "red");
});
$(".green").click(function(){
  $(".text").css("color", "green");
});
$(".haha").click(function(){
  $(".text").html("哈哈哈");
});
$(".back").click(function(){
  $(".text").html("要變色的文字");
  $(".text").css("color", "black");
});
$(".send").click(function(){
  if($(".inp").val().length > 0){
    $(".text").html($(".inp").val());
    $(".inp").val("");
  }
});
$(".text").hover(
  function(){
    $(this).css("font-size", "40px");
  }, function(){
    $(this).css("font-size", "");
  }
);