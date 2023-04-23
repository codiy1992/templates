$(function() {
	//导航动画
	$(window).scroll(function() {
		var ST = 0;
		ST = $(window).scrollTop();
		if(ST < 1) {
			$(".top").removeClass('on');
		} else {
			$(".top").addClass('on');
		};

	})

	//input		
	$('input[type=text]').bind({
		focus: function() {
			if(this.value == this.defaultValue) {
				this.value = "";
			}
		},
		blur: function() {
			if(this.value == "") {
				this.value = this.defaultValue;
			}
		}
	});

	$('.navbar li').hover(function() {
		var leftP = $(this).position();
		$('.scroll-nav').stop().animate({
			'left': leftP.left + 30
		}, 300);
	}, function() {
		$('.scroll-nav').stop().animate({
			'left': '30px'
		}, 300);
	});

	$('.searchbtn').click(function() {
		$('.sousuo').toggleClass('on')
	})

	$('.codebtn').click(function() {
		$('.topcode').toggleClass('on')
	})

	$('.product .tab-hd li').hover(function() {
		var index = $(this).index();
		$(this).addClass('on').siblings().removeClass('on')
		$('.product .pal').eq(index).addClass('on').siblings('.pal').removeClass('on');
	})

	jQuery(".index-sec4").slide({
		titCell: ".hd ul",
		mainCell: ".bd ul",
		autoPage: true,
		effect: "fade"
	});

	jQuery(".txtMarquee-left").slide({
		mainCell: ".bd ul",
		autoPlay: true,
		effect: "leftMarquee",
		interTime: 50,
		trigger: "click",
		vis: 8
	});

	$('.case-fen dt').click(function() {
		$(this).next('dd').slideToggle().parents('dl').siblings().find('dd').slideUp();

	})

})