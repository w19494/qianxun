/*
* @Author: Administrator
* @Date:   2017-07-08 15:00:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-10 22:03:32
*/
$(function(){

	$('.classify li').click(function(event) {
		$(this).addClass('spe').siblings().removeClass('spe');
		var index=$(this).index();
		$('.tab>div').eq(index).css('display', 'block').siblings().css('display', 'none');
	});

	var num=0;
	var timer=null;
	function go(){

		timer=setInterval(function(){
			num++;
			if(num>3){
				num=0;							
			}
			$('.lunbo ul').animate({'left':-400*num+'px'},1000);
			$('.crol li').eq(num).css('border-color', '#f7a21e').siblings().css('border-color', '#fff');
			$('.crol li').eq(num).stop().fadeTo(500,1).siblings().stop().fadeTo(500,0.5);

		},3000)		
	}	
	go();

	$('.lunbo').hover(function() {
		clearInterval(timer);
	}, function() {
		go();
	});	


	$('.crol li').fadeTo(1,0.5);
	$('.crol li').eq(0).fadeTo(1,1);
	$('.crol li').click(function(event) {
		$(this).css('border-color', '#f7a21e').siblings().css('border-color', '#fff');
		$(this).stop().fadeTo(500,1).siblings().stop().fadeTo(500,0.5);
		var index=$(this).index();
		num=index;
		$('.lunbo ul').stop().animate({'left':-400*index+'px'},800)
	});




})
