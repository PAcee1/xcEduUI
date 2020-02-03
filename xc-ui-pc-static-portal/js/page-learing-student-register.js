/*最小高度*/
function minHeight(){
	var h = $(window).height();
	var body = parseInt(h) -400;
	var min = 495;
	if(body > min){
		$('.register-body').css('min-height',body + 'px');
	}else{
		$('.register-body').css('min-height',min + 'px');
	}
}
minHeight();	
$(window).resize(function() {
  minHeight();
});
/*发送验证码*/
$('.send').click(function(){
    var time;
    var num = 60;
    if($(this).text() == "发送验证码"){
        time = setInterval(function(){
            $('.send').removeClass('btn-default').addClass('btn-success');
            num--;
            $('.send').text( num + '秒后重发');
            if(num == 0){
                $('.send').removeClass('btn-success').addClass('btn-default')
                $('.send').text('发送验证码');
                clearInterval(time);
            }
        },1000)
    }
})

/*注册按钮*/
$('[name=register]').click(function(){
	var phone = $('[name=phone]');
	var verif = $('[name=verif]');
	var password = $('[name=password]');
	var confirm = $('[name=confirm]');
	/*var ret = /^1[34578]\d{9}$/;
	alert(ret.test(phone.val()));*/
	if(phone.val() == ""){
		phone.siblings('.verif-span').show().text('手机号不能为空');
	}else{
		phone.siblings('.verif-span').hide();
	}
	if(verif.val() == ""){
		verif.siblings('.verif-span').show().text('验证码不能为空');;
	}else{
		verif.siblings('.verif-span').hide();
	}
	if(password.val() == ""){
		password.siblings('.verif-span').show().text('密码不能为空');;
	}else{
		password.siblings('.verif-span').hide();
	}
	if(confirm.val() == ""){
		confirm.siblings('.verif-span').show().text('确认密码不能为空');;
	}else{
		confirm.siblings('.verif-span').hide();
	}
});
