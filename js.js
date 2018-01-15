	document.addEventListener("touchmove", function (e) {
		e.preventDefault();
	}, false);
	var t = 0;
	var arr = ["images/3_3.png",
		"images/2_2.png",
		"images/1_1.png",
		"images/4.png"
	];
	var zonglock = false;
	var defen = 0;
	var lock = [true, true, true, true, true, true, true, true, true]
	var timer;
	var imgArr = [
		"url(images/fllower_1.png)",
		"url(images/fllower_2.png)",
		"url(images/fllower_3.png)",
		"url(images/fllower_4.png)"
	]

	function huaihua(i) {
		var suiji = Math.random() * 10 - 8;
		if (suiji > 0) {
			//坏花出现
			_this = this;
			$('<div class="up donghua1"></div>').appendTo($('li .wrap').eq(i)).css({
				"background-image": imgArr[2]
			})
			//此句话必须在上一句的后面，只有创建了元素之后，才能得到元素，并且修改元素属性，若放到上一句上一句的前面，会出现bug
			//$(".up").css({"background-image": imgArr[2]});   
			_this.kk = $('li .wrap').eq(i).find(".up").get(0);
			//随机定义花的种类，是好花还是坏花;		  
			_this.kk.addEventListener("touchstart", function () {
				if (lock[i]) {
					$(this).css({
						"background-image": imgArr[3]
					});
					defen--;
					$("#huaban").html(defen)
					lock[i] = false;
				}
			}, false);
			_this.kk.addEventListener("webkitAnimationEnd", function () {
				lock[i] = true;
				$(this).parents(".wrap").children(".up").remove();
			}, false)
		} else {
			//好花出现
			_this = this;
			$('<div class="up donghua1"></div>').appendTo($('li .wrap').eq(i)).css({
				"background-image": imgArr[0]
			});
			//此句话必须在上一句的后面，只有创建了元素之后，才能得到元素，并且修改元素属性，若放到上一句上一句的前面，会出现bug
			//$(".up").css({"background-image": imgArr[0]});   
			_this.kk = $('li .wrap').eq(i).find(".up").get(0);
			//随机定义花的种类，是好花还是坏花;
			_this.kk.addEventListener("touchstart", function () {

				if (lock[i]) {
					$(this).css({
						"background-image": imgArr[1]
					});
					defen++;
					$("#huaban").html(defen)
					$("li span").eq(i).addClass("xian")
					lock[i] = false;
				}
			}, false);
			_this.kk.addEventListener("webkitAnimationEnd", function () {
				lock[i] = true;
				$("li span").eq(i).removeClass("xian");
				$(this).parents(".wrap").children(".up").remove();
			}, false)

		}
	}



	$(function () {
		var gameovertimer = window.setTimeout(function () {
			$(".jingyoushu").html(parseInt(defen / 10, 10));
			$("#zhezhao2").show().bind("touchstart", function () {
				window.location.href = "game.html"
			});

		}, 41000)
		var zongtimer1 = window.setInterval(function () {
			t++;
			if (t > 3) {
				window.clearInterval(zongtimer1);
				$("#zhezhao1").hide();
			};
			$("#zhezhao1 img").attr("src", arr[t])
		}, 1000);
		var zongtimer = window.setTimeout(function () {
			$(".nei").addClass("donghua3");
			var t = 30
			time2 = window.setInterval(function () {
				t--;
				if (t <= 0) {
					window.clearInterval(time2);
					$(".up").remove();
					$("#zhezhao").show();
					window.clearInterval(time1);
				}
				$("#shijian span").html(t)
			}, 1000);
			$(".nei").bind("webkitAnimationEnd", function (e) {

				//alert($(".nei").length)
				//$(".nei")[0].style.display="none";
				//e.stopPropagation();
				//$(this).hide();
				//$(".nei").css("width","1px");


			})
			/*	window.setTimeout(function(){
					window.clearInterval(time1);
					$(".up").hide();
				},30000);*/
			var time1 = window.setInterval(function () {
				/*需要两个参数，1随机的个数，2，根据随机的个数得到一个数组，此数组用来生成花的随机位置，一共九个位置，根据查重算法，去掉重复的项，得到一个每项不会重复的数组，*/
				var ge = Math.floor(Math.random() * 4) + 1
				var arr = []
				for (var t = 0; t < ge; t++) {
					arr.push(Math.floor(Math.random() * 9))
				}
				// 查重算法
				//arr=[4,3,2,5,2,3,4,2,4,2,4,2,4]
				//alert(arr)
				for (var i = 0; i < arr.length - 1; i++) {

					for (var j = i + 1; j < arr.length; j++) {
						if (arr[i] == arr[j]) {
							arr.splice(j, 1)
							j--
						}
					}

				}

				for (var t = 0; t < arr.length; t++) {
					//new huaihua(t)
					//在这判断
					if ($('li .wrap').eq(arr[t]).find(".up").length == 0) {
						(function (n) {
							new huaihua(n)

						})(arr[t])
					}

				};
			}, 300)

		}, 4000)

	})