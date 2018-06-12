$(function(){


	$.ajax({
		url:app.api + '/employee/checkRootLogin',
		type:'get',
		success:function(result){

			if(result.error && result.error == 400){

				location.href = "login.html";

			}

		}
	})


	// 登出
	$('#loginOut').on('click',function(){

		$.ajax({
			type:'get',
			url:app.api + '/employee/employeeLogout',
			success:function(result){
				console.log(result)
				if(result.success){
					location.href = "login.html";
				}else{
					alert('登出失败');
				}
			}
		})

	});

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

});


var app = {
	api: 'http://localhost:3000'
}

$.ajaxSetup({crossDomain: true, xhrFields: {withCredentials: true}});