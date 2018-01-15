document.addEventListener("touchmove", function(e){ e.preventDefault(); }, false);
$(function() {
	var t=0;
	var arr = [ "images/3_3.png",
				"images/2_2.png",
				"images/1_1.png",
				"images/4.png"
			];
	$("#wrap").bind("touchstart",function(){
/*		$(".timer").css("display","block")
		var timer1 = window.setInterval(function(){
					t++;
					if (t>3) {
						window.location.href="game.html"
					};
			$(".timer img").attr("src",arr[t])
		},1000)*/
	window.location.href="game.html"
	});
})
