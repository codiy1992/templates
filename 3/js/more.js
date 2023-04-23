$(function() {	

	jQuery(".banner").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"fold",  autoPlay:true, autoPage:true, trigger:"click" });
	
	$('.sidebar dd').click(function(){		
			var index=$(this).index();	
			$('.barbox .box').eq(index).addClass('on').siblings().removeClass('on');
		}	
	 )
		
	 $('.mingshi .tab-hd li').hover(function(){			
		var index=$(this).index();
		$(this).addClass('on').siblings().removeClass('on')
		$('.mingshi .box').eq(index).addClass('on').siblings().removeClass('on');
	})

})