$(document).ready(function() {
	$(".dg").remove();
	animation();
});


	function animation(){
		setTimeout(function(){
			$(".worldofwar span").fadeIn(300);
		},2000)
	};
	$(".worldofwar span").on('click', function(event) {
		$(".worldofwar").addClass('remove');
	});
	$('.banner').unslider({ nav: false, arrows: false });
	function changeIndex(num,dom){
		$('.banner').unslider('animate:' + num);
		$(dom.target).addClass('active').siblings().removeClass('active');
		if (num == 1) {
			$(".blog-container").addClass("active");
		} else {
			$(".blog-container").removeClass("active");
		}
		if (num == 2) {
			$(".photo-wrap").show();
		}
	};
	$(".img img").on('click', function(event) {
		event.preventDefault();
		var imgPath = event.target.src;
		$(".img-preview img").attr('src', imgPath);
		$(".img-preview").addClass('active');
	});
	$(".img-preview").on('click', function(event) {
		event.preventDefault();
		$(this).removeClass('active');
	});