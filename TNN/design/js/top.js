$(function(){
   /*↓TOP BTN↓*/
	$(".btn li").mouseover(function(){
      $(this).find("ol").fadeIn("fast");
    });
	$(".btn li").mouseleave(function(){
      $(this).find("ol").fadeOut("fast");
    });
	
	
	$(".page_b01").mouseover(function(){
      $(this).addClass("shake");
    });
	$(".page_b01").mouseleave(function(){
      $(this).removeClass("shake");
    });
	
	
   /*↓TOP BTN - MOBILE↓*/
	$(".main_b01").click(function(){
      $(".m_bg").fadeIn(30);
      $(".m_left").fadeIn(30);
    });
	$(".m_box01 li").click(function(){
      $(this).find(".m_box01b").slideToggle(300);
    });
	$(".m_bg").click(function(){
      $(".m_bg").fadeOut(30);
      $(".m_left").fadeOut(30);
    });
});