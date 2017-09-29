$(document).ready(function(){
	$('.fa').click(function(){
		$('.side-menu').toggleClass('active');
		$('i.fa').toggleClass('fa-bars').toggleClass('fa-times');
		open = false;
	});

});
	