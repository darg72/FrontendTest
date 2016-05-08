$(document).ready(function(){
  // default content
  $('#main_content').load('parts/maincontent.html');
  // equlizza colonne
  setTimeout(function(){
    equalize();
  }, 150);
  /* -------------------------------
  SWICHT #main_content ON #top_menu a attr href
  -------------------------------*/
  $('#top_menu ul.nav > li').click(function () {
    $(this).removeClass('act');
    $(this).addClass('act');
  });
  $("#top_menu .navbar-collapse ul li a").on('click',function(e){
    var parts=$(this).attr('href');
      $(this).addClass('active');
    switch (parts) {
      case 'accedi':
      $('#main_content').load('parts/'+ parts +'.html');
      formsRequest();
      $('#header').slideUp(500);
      break;
      case 'come':
      $('#main_content').load('parts/'+ parts +'.html');
      $('#header').slideUp(500);
      break;
      case 'collabora':
      $('#main_content').load('parts/'+ parts +'.html');
      $('#header').slideUp(500);
      break;
      default:
      $('#header').slideDown(500);
    }
    return false;
  });
});
//dom elements ready
$(window).bind("load", function() {
  setTimeout(function(){
    $(".bgfull").lazyload({
      effect : "fadeIn"
    });
  }, 10);
});
$(window).resize(function() {
  removeHeights();
  equalize();
});
function equalize(){
  $(".eq_row").each(function() {
    var heights = $(this).find(".eq_col").map(function() {
      return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
    $(this).find(".eq_col").height(maxHeight);
    $('.eq_col').find("img").height(maxHeight);
  });
}
//rimuove le altezze
function removeHeights(){
  $(".eq_row").each(function() {
    $(this).find(".eq_col").height("auto");
    $('.eq_col').find("img").height("auto");
  });
}
