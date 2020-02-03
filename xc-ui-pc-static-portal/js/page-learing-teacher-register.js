/*最小高度*/
function minHeight(){
	var h = $(window).height();
	var body = parseInt(h) -400;
	var min = 740;
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

/*注册按钮*/
$('[name=register]').click(function(){
	var realname = $('[name=realname]');

	if(realname.val() == ""){
		realname.siblings('.verif-span').show().text('手机号不能为空');
	}else{
		realname.siblings('.verif-span').hide();
	}
});