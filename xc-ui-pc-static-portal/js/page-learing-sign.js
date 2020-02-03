/*最小高度*/
function minHeight(){
	var h = $(window).height();
	var body = parseInt(h) -250;
	var min = 260;
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
// 登录注册切换
$('.sign,.reg').click(function(){
	$(this).addClass('activ').siblings().removeClass('activ')
	if($(this)[0].className[0] === 's'){
		$('.signItem').addClass('show')
    $('.regItem').removeClass('show')
	}else{
    $('.signItem').removeClass('show')
    $('.regItem').addClass('show')
	}
})
/* 登录验证 */
$('.submitBut').click(function(){
	var username = $('[name=username]');
	var password = $('[name=password]');
	if(username.val() == ""){
		username.siblings('.proof').show().text('登录名不能为空');;
	}else{
		username.siblings('.proof').hide();
	}
	if(password.val() == ""){
		password.siblings('.proof').show().text('密码不能为空');;
	}else{
		password.siblings('.proof').hide();
	}
})

/* 注册验证 */
$('.registerBut').click(function(){
  var phone = $('[name=phone]');
  var phoneCode = $('[name=phoneCode]');
  var setPassword = $('[name=setPassword]');
  var conPassword = $('[name=conPassword]');
  var agreement = $('[name=agreement]');

  if(phone.val() == ""){
    phone.siblings('.proof').show().text('您输入的手机号有误');
  }else{
    phone.siblings('.proof').hide();
  }
  if(phoneCode.val() == ""){
    phoneCode.siblings('.proof').show().text('请输入验证码');
  }else{
    phoneCode.siblings('.proof').hide();
  }
  if(setPassword.val() == ""){
    setPassword.siblings('.proof').show().text('请输入密码');
  }else{
    setPassword.siblings('.proof').hide();
  }
  if(conPassword.val() == ""){
    conPassword.siblings('.proof').show().text('请输入确认密码');
  }else if(setPassword.val() !== conPassword.val()){
    conPassword.siblings('.proof').show().text('密码不一致请重新输入');
	}else{
    conPassword.siblings('.proof').hide();
  }
	if(agreement.is(':checked')){
    agreement.parent().siblings('.proof').hide();
	}else{
    agreement.parent().siblings('.proof').show().text('请先阅读并勾选《学成网注册协议》');
	}
});
// 验证码
function phoCde(){
  var mis = 10;
  var _this = $(this);
  _this.unbind('click')
	_this.attr('disabled','true')
  var time = setInterval(function(){
	if(mis == 0){
		_this.val('重新发送')
    $('.codeSub').bind('click',phoCde)
    _this.removeAttr('disabled')
    clearInterval(time)
    console.log(mis)
	}else{
    _this.val(mis +' s')
    mis--
	}
  },500)
}
$('.codeSub').bind('click',phoCde)