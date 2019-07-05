charset="UTF-8";

/*----garallyのliをスクロールに合わせてフェードイン*/
$(function(){
　$('ul.fade li').css("opacity","0");
    $(window).scroll(function (){
    $('ul.fade li').each(function(){

       var elemPos = $(this).offset().top;
       var scroll = $(window).scrollTop();
       var windowHeight = $(window).height();

    /*発動条件：画面の高さが1/4までスクロールしたら順番に表示*/
   if (scroll > elemPos - windowHeight + windowHeight/4){
    $(function(){
    $('ul.fade li')
        .each(function(i){
         $(this).delay(100*i).animate({opacity:1}, 1500);
        });
       });
       }
    });
  });
});

/*----フェードイン*/
$(function(){
　$('.flex').css("opacity","0");
    $(window).scroll(function (){
    $('.flex').each(function(){

       var elemPos = $(this).offset().top;
       var scroll = $(window).scrollTop();
       var windowHeight = $(window).height();

    /*発動条件：画面の高さが1/4までスクロールしたら順番に表示*/
   if (scroll > elemPos - windowHeight + windowHeight/5){
    $(function(){
    $('.flex')
        .each(function(i){
         $(this).delay(100*i).animate({opacity:1}, 1500);
        });
       });
       }
    });
  });
});

/*----wave*/
$('#wave').wavify({
  height: 20,
  bones: 2,
  amplitude: 50,
  color: '#e84733',
  speed: .1
});

/*--navがスクロールされたタイミングで固定--*/
$(function() {
  var $win = $(window),
      $main = $('main'),
      $nav = $('nav'),
      navHeight = $nav.outerHeight(),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });
});

/*----ページ内リンク*/
$(function(){
var headerHight = 60;
	$('a[href^="#"]').click(function(){
		var href= jQuery(this).attr("href");
		var target = jQuery(href == "#" || href == "" ? 'body' : href);
		var position = target.offset().top-headerHight;
		$("html, body").animate({scrollTop:position}, 550, "swing");
		return false;
	});
});
