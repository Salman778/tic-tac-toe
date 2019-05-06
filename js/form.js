$(document).ready(function() {
  $("input[type='button']").mouseover(function(){
    $(this).css({"background": "#ffffff", "color": "#355664"})
  });
  $("input[type='button']").mouseleave(function(){
    $(this).css({"background": "#355664", "color": "#ffffff"})
  });

})