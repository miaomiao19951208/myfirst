$(document).ready(function () {
	
	$(".oheard-mid-title .oheard-slae-box").hover(function () {
		$(".ohead-mid-shop-box").stop(true).slideDown();
	},function () {
		$(".ohead-mid-shop-box").stop(true).slideUp();
		
	})
	function titleshow() {
		var　$hiidetite = $(".heard-fixed-tip");
		if($(".oheard-bottom-dea").add(".heard-bottom").offset().top<0){
			$hiidetite.stop(true).fadeIn();
		}
		else{
			$hiidetite.stop(true).fadeOut();
			
		}
	}
	titleshow();
	$(".oheard-bottom-dea .all-goods").hover(function () {
		$(this).find(".ohead-goods-list").stop(true).slideDown();
	},function () {
		$(this).find(".ohead-goods-list").stop(true).slideUp();
		
	})
	$(".heard-bottom-mian").hover(function () {
		$(".heard-bottom-mian-list").stop(true).fadeIn();
	},function () {
		$(".heard-bottom-mian-list").stop(true).fadeOut();
		
	})
})