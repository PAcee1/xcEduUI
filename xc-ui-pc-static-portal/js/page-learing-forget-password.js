/*最小高度*/
function minHeight(){
    var h = $(window).height();
    var body = parseInt(h) -370;
    $('.register-body').css('min-height',body + 'px');
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