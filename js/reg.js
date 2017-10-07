/*
* @Author: Administrator
* @Date:   2017-07-14 15:04:44
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-14 16:07:27
*/

'use strict';
	function result(){
		var num=true;
		if($('.user').val()==''){
			num=num&&false;
			$('.user-h6').show();
		}else{
			num=num&&true;
			$('.user-h6').hide();
		}		

		if($('.pass').val()==''){
			num=num&&false;
			$('.pass-h6').show();
		}else{
			num=num&&true;
			$('.pass-h6').hide();
		}	

		if($('.email').val()==''){
			num=num&&false;
			$('.email-h6').show();
		}else{
			num=num&&true;
			$('.email-h6').hide();
		}		
		if($('.agree-inp:checked').val()==undefined){
			num=num&&false;
			$('.agree-h6').show();
		}else{
			num=num&&true;
			$('.agree-h6').hide();
		}

		return num;
	}

	$('.user').blur(function(event) {
		if($('.user').val()==''){
			$('.user-h6').show();
		}else{
			$('.user-h6').hide();
		}
	});	

	$('.pass').blur(function(event) {
		if($('.pass').val()==''){
			$('.pass-h6').show();
		}else{
			$('.pass-h6').hide();
		}
	});	

	$('.email').blur(function(event) {
		if($('.email').val()==''){
			$('.email-h6').show();
		}else{
			$('.email-h6').hide();
		}
	});	

	$('.agree-inp').click(function(event) {
		if($('.agree-inp:checked').val()==undefined){
			$('.agree-h6').show();
		}else{
			$('.agree-h6').hide();
		}
	});	










