$(function(){
   /*↓TOP BTN↓*/
	$(".btn_box01 li").mouseover(function(){
      $(this).find(".btn_box02").fadeIn("fast");
    });
	$(".btn_box01 li").mouseleave(function(){
      $(this).find(".btn_box02").fadeOut("fast");
    });
	
   /*↓TOP BTN↓*/
	$(".faq_box01").click(function(){
      $(this).find(".faq_box01a").slideToggle("fast");
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