$(function(){

	$.ajax({
		url: app.api + '/user/queryUser',
		type:'get',
		data:{
			page:1,
			pageSize:10
		},
		success:function(result){

			console.log(result)

			$('#userBox').html(template('userTpl',{data:result}));

		}
	});


	$('body').on('click','#deleteBtn',function(){

		var id = $(this).attr('data-id');
		var isDelete = Number($(this).attr('data-isDelete')) ? 0 : 1;

		$.ajax({
			url:app.api + '/user/updateUser',
			type:'post',
			data:{
				id:id,
				isDelete:isDelete
			},
			success:function(result){

				if(result.success){

					location.reload()

				}else{

					if(result.error){

						alert(result.message);

					}

				}

			}
		})

	});


});