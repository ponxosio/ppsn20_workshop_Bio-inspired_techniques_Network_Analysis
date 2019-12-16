$(function() {
		$('.carousel').carousel({
			pause: "none",
			interval: 3000
		});
		var i = 0;
		$(".carousel-inner").each(function() {
			//$(".carousel_content .item");
			$(".carousel_content .item").removeClass("active").eq(i).addClass("active");
			$(this).html($(".carousel_content").html());
			i++;
		});
		$(".navbar .social .menuItem").hover(function() {
			$(this).find("img").css({"transform": "rotateY(360deg)", "transition": "all 0.7s ease-in-out 0s"});
		}, function() {
			$(this).find("img").css({"transition": "all 0s ease-in-out 0s", "transform": "rotateY(0deg)"});
		});
		$(window).scroll(function(){
			var height = $(".header .content").css("padding-bottom");
			height = height.replace("px", "");
			if ($(this).scrollTop() > height){ 
				$('.navbar').addClass("navFixed");
				$("#top").css("margin-bottom", $(".navbar").height());
			}
			else{
				$('.navbar').removeClass("navFixed");
				$("#top").css("margin-bottom", "");
			}
		});
		$(".contactButton").click(function(e) {
			e.preventDefault();
			$(".contact").slideUp("fast");
			if($(this).hasClass("active")) {
				$(".contact").slideUp("fast");
				$(this).removeClass("active");
			}
			else {
				$(".contactButton").removeClass("active");
				$(this).parents('.box').append('<div class="contact"></div>');
				$(this).siblings(".contact").load($(this).attr('href')).slideDown("fast");
				$(this).addClass("active");
			}
		});
		$(".box, body, .body, .boxTitle, .boxBody, .content").click(function(e) {
			if(e.target == this){
				$(".contact").slideUp("fast", function() {
					$(this).remove();
					$(".contactButton").removeClass("active");
				});
			}
		});
		function scrollFunc(part) {
			var top = part.offset();
			top = top.top;
			$.scrollTo(top - $(".navbar").height(), 1000);
		}
	});