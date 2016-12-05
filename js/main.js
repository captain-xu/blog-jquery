$(document).ready(function() {
	$('.banner').unslider({ nav: false, arrows: false });
	changeIndex = function(num,dom){
		$('.banner').unslider('animate:' + num);
		$(dom.target).addClass('active').siblings().removeClass('active');
	};
});