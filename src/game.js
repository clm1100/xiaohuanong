	require('./css.css')
	document.addEventListener("touchmove", function (e) {
		e.preventDefault();
	}, false);
	var $ = require('jquery');
	var t = 0;
	var arr = [
		require("./images/3_3.png"),
		require("./images/2_2.png"),
		require("./images/1_1.png"),
		require("./images/4.png"),
	]
	var zonglock = false;
	var defen = 0;
	var lock = [true, true, true, true, true, true, true, true, true]
	var timer;
	var imgArr = [
		`url(${require("./images/fllower_1.png")})`,
		`url(${require("./images/fllower_2.png")})`,
		`url(${require("./images/fllower_3.png")})`,
		`url(${require("./images/fllower_4.png")})`,
	];

	function badflower(obj,img1,img2,i){
		$('<div class="up donghua1"></div>').appendTo($('li .wrap').eq(i)).css({
			"background-image": imgArr[2]
		})
		_this.kk = $('li .wrap').eq(i).find(".up").get(0);
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
	}

	function goodflower(obj,img1,img2,i){
		$('<div class="up donghua1"></div>').appendTo($('li .wrap').eq(i)).css({
			"background-image": img1
		});
		obj.kk = $('li .wrap').eq(i).find(".up").get(0);
		obj.kk.addEventListener("touchstart", function () {

			if (lock[i]) {
				$(this).css({
					"background-image": img2
				});
				defen++;
				$("#huaban").html(defen)
				$("li span").eq(i).addClass("xian")
				lock[i] = false;
			}
		}, false);
		obj.kk.addEventListener("webkitAnimationEnd", function () {
			lock[i] = true;
			$("li span").eq(i).removeClass("xian");
			$(this).parents(".wrap").children(".up").remove();
		}, false)
	}

	function huaihua(i) {
		var suiji = Math.random() * 10 - 8;
		_this = this;
		
		if (suiji > 0) {
			//坏花出现
			badflower(_this,imgArr[2],imgArr[3],i)
		} else {
			//好花出现
			goodflower(_this,imgArr[0],imgArr[1],i)
		}
	}

	$(function () {
		Promise.resolve(3).then(function(data){
			return new Promise(function(resolve,reject){
				resolve("22")
			})
		}).then(function(then){
			console.log("遮罩层关闭，启动游戏");
		}).then(function(then){
			console.log("遮罩层关闭，启动游戏");
		}).then(function(then){
			
		}).then(function(then){
			
		})
		var gameovertimer = window.setTimeout(function () {
			$(".jingyoushu").html(parseInt(defen / 10, 10));
			$("#zhezhao2").show().bind("touchstart", function () {
				window.location.reload()
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

			})
			var time1 = window.setInterval(function () {
				/*需要两个参数，1随机的个数，2，根据随机的个数得到一个数组，此数组用来生成花的随机位置，一共九个位置，根据查重算法，去掉重复的项，得到一个每项不会重复的数组，*/
				var ge = Math.floor(Math.random() * 4) + 1
				var arr = [];
				var arr2 = [];				
				for (var t = 0; t < ge; t++) {
					arr.push(Math.floor(Math.random() * 9))
				}
				arr.forEach((e)=>{
					if(arr2.indexOf(e)== -1){
						arr2.push(e)
					}
				})
				for (var t = 0; t < arr2.length; t++) {
					//new huaihua(t)
					if ($('li .wrap').eq(arr2[t]).find(".up").length == 0) {
						(function (n) {
							new huaihua(n)
						})(arr2[t])
					}
				}
			}, 300)
		}, 4000)
	})