$(function(){

	$.ajax({
		url: app.api + '/employee/checkRootLogin',
		type:'get',
		success:function(result){

			if(result.success){

				location.href = "user.html";

			}

		}
	})


	$('#loginBtn').on('click',function(){

		var data = {
			username:$.trim($('#username').val()),
			password:$.trim($('#password').val())
		}

		if(!data.username){

			alert('请填写用户名');

			return;

		}

		if(!data.password){

			alert('请填写密码');

			return;

		}

		$.ajax({
			type:'post',
			url:app.api + '/employee/employeeLogin',
			data:data,
			success:function(result){

				if(result.success){

					location.href = "user.html";

				}else{

					if(result.error){

						alert(result.message)

					}

				}

			}
		})

	});

});
