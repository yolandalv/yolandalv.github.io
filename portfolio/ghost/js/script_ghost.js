$(function(){

	$(".link .button").hover(function(){

		var title=$(this).attr("data");
		// document.title=title;
		$(".tip em").text(title);
		
		var pos=$(this).position().left+10;
		//document.title=pos;
		var dis=($(".tip").outerWidth()-$(this).outerWidth())/2;
		var l=pos-dis;
		$(".tip").css({"left":l+"px"}).animate({"top":155,"opacity":1},500);
        
	},function(){
         $(".tip").animate({"top":100,"opacity":0},500);
        
	})
})