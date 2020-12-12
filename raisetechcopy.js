$(function(){
  $(window).on('load resize', function(){
    var w = $(window).width();
    var x = 1200;
    if (w >= x) {
//画面サイズが1200px以上のときの処理
      $(".p-gnavi").removeClass("p-gnavi-ham");
    } else {
//それ以外のときの処理
      $(".p-gnavi").addClass("p-gnavi-ham");
    }
  });
  $('#ham').on('click', function(){
    $('#navi').slideToggle('p-gnavi-ham');
    if ($(this).hasClass('c-navi_toggle-close')){
      $(this).removeClass('c-navi_toggle-close');
  } else {
      $(this).addClass('c-navi_toggle-close');
  }
  });
  $(".p-gnavi__list__item").hover(
    function() {
      $(".p-gnavi__subList", this).stop().slideDown(200);
      $(this).addClass('p-gnavi__list__item-open');
    },
    function() {
      $(".p-gnavi__subList", this).stop().slideUp(100);
      $(this).removeClass('p-gnavi__list__item-open');
    }
  );
});