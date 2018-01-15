	var defen = 0;
	var lock = true;
	var timer;
	var imgArr = ["fllower_1.png","fllower_2.png","fllower_3.png","fllower_4.png"]
/*	$(function(){
		$(".div2")[0].addEventListener("webkitAnimationEnd",animationend,false)	
	})
function animationend(){
			$(".div2")[0].className = $(".div2")[0].className.replace(/ donghua1/g, "").replace(/ donghua2/g, "");
			$(".div2")[0].removeEventListener("webkitAnimationEnd",animationend,false);
			$(".div2").addClass("donghua2");
}*/
$(function(){
	$(".up")[0].addEventListener("click",function(){if(lock){
		$(this).css({"background-image":"url(images/fllower_2.png)"});
		defen++;
		$("#fenshu").html(defen)
		lock = false;
	}},false);
	$(".up")[0].addEventListener("webkitAnimationEnd",function(){
		lock = true;
		$(this).css({"background-image":"url(images/fllower_1.png)"});
		console.log($(this).attr('class').indexOf("donghua1"));
		if($(this).attr('class').indexOf("1")>0){
			$(this).removeClass("donghua1").addClass("donghua2");
		}else{
			$(this).removeClass("donghua2").addClass("donghua1");
		}
		
	},false)
/*	window.setInterval(function(){
		$(".up").hide();
		
		},3000)*/
})