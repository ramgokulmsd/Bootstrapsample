$(document).ready(function(){
	$('#owl-demo').owlCarousel({
    	nav:false,
    	dots: true,
    	autoplay: true,
    	autoPlay: 3000,
    	loop: true,
    	responsive:{
        	0:{
            	items:1
        	}
    	}
	})

    $(".toggle-password").click(function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $("#password-field").attr("type");
        if(input == 'password') {
            $(this).siblings().attr("type", "text");
        } else {
            $(this).siblings().attr("type", "password");
        }
    });
});
