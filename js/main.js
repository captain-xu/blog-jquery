$(document).ready(function() {
	$('.banner').unslider({ nav: false, arrows: false });
	changeIndex = function(num,dom){
		$('.banner').unslider('animate:' + num);
		$(dom.target).addClass('active').siblings().removeClass('active');
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
});