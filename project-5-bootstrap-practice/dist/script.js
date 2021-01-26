var s = skrollr.init()

$(window).scroll(function(evt){
	if($(window).scrollTop()>0){
		$(".navbar").addClass("bg-light")
		$(".navbar").addClass("navbar-light")
	}
	else{
		$(".navbar").removeClass("bg-light")
		$(".navbar").removeClass("navbar-light")
	}
})