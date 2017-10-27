$(document).ready(function() {
	var $sliderbarboxp = $(".sliderbar-bottom-box p");
	console.log($sliderbarboxp)
	$(".oheard-mid-title .oheard-slae-box").hover(function() {
		$(".ohead-mid-shop-box").stop(true).slideDown();
	}, function() {
		$(".ohead-mid-shop-box").stop(true).slideUp();

	})

	function titleshow() {
		var　 $hiidetite = $(".heard-fixed-tip");
		if($(".oheard-bottom-dea").add(".heard-bottom").offset().top < 0) {
			$hiidetite.stop(true).fadeIn();
		} else {
			$hiidetite.stop(true).fadeOut();

		}
	}
	titleshow();
	$(document).mousemove(function(e) {
		var width = e.clientX;
		var xx = $(window).width() -120;
		if(width >= xx) {
			$(".slidebar-fixed-right").stop(true,true).animate({
				right:0
			},200);
		}else{
			$(".slidebar-fixed-right").stop(true,true).animate({
				right:"-40px"
				},200);
		}
	});
	$(".oheard-bottom-dea .all-goods").hover(function() {
		$(this).find(".ohead-goods-list").stop(true).slideDown();
	}, function() {
		$(this).find(".ohead-goods-list").stop(true).slideUp();

	})
	$(".heard-bottom-mian").hover(function() {
		$(".heard-bottom-mian-list").stop(true).fadeIn();
	}, function() {
		$(".heard-bottom-mian-list").stop(true).fadeOut();

	})
	$.each($sliderbarboxp, function(i) {
		$sliderbarboxp.eq(i).hover(function() {
			$(this).find(".sliderbar-small-box").stop(true).fadeIn();
		}, function() {
			$(this).find(".sliderbar-small-box").stop(true).fadeOut();

		})
	});
	$(".heard-user-mark").hover(function () {
		$(".my-center").stop().slideDown();
	},function () {
		$(".my-center").stop().slideUp();
		
	})
	var allnum=0 ;
	allnum=$.cookie("allnum");
	if(allnum==0){
		$("#goto-tollery").attr("href","html/emptytollery.html")
	}
    else{
    	$("#trolley-num").text(allnum);
		$("#goto-tollery").attr("href","html/fulltollery.html")
    	
    }
})