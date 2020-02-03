$(function() {
	$('.citylistbox > .listbox').hover(function() {
		//父类分类列表容器的高度

		$(this).addClass('hover');
		$(this).children('.box').css('display', 'block');
	}, function() {
		$(this).removeClass('hover');
		$(this).children('.box').css('display', 'none');
	});

});
