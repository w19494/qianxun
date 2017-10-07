/*
* @Author: Administrator
* @Date:   2017-07-04 13:31:39
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-06 13:55:17
*/

$(function(){
	var num=0;
	var timer;
	function aa(){
		timer=setInterval(function(){
			num+=2;
			if(num>150){
				num=0;
			}
			$('.new>ul').stop().css('top',-num);
		},230)
		
	}
	$('.new').hover(function() {
		clearInterval(timer)
	}, function() {
		clearInterval(timer);
		aa();
	});
	aa();


	$('.dingbu').hide();
	$(window).scroll(function(event) {
       	if($(window).scrollTop()>300){
       		$('.dingbu').fadeIn();
       	}else{
       		$('.dingbu').fadeOut();
       	}
    });

})