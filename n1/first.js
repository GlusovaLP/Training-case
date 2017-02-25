$(document).ready(function(){
	i=1;
	$(".vipad_menu").hide();
	$("#menu li.blabla").hover(function(){
		$(".vipad_menu").show(100);
		$(this).addClass("new");
	});
	$("#menu li.blabla").mouseleave(function(){
		$(".vipad_menu").hide(100);
		$(this).removeClass("new");
	});
	function slider(i){
		$('#paginator li').removeClass('active');
		$('.sl').hide();
		$('#paginator li:nth-child('+i+')').addClass('active');
		$('.sl' + i).show();
	};
	$("#paginator li").click(function () {
		i = $(this).text();
		slider(i);
	});
	setInterval(function(){
	if (i<=5) {
		slider(i);
		i++;
		}
	else{
		i=1;
		slider(i);
		i++;
		};
	},3000);
	$('.center .hh1, .hh2, .hh3, .hh4').hide();
	$(".center input.cm1").click(function () {
		$('.center .hh1').show();
		$(".center input.cm1").addClass('hide');
	});
	$(".center input.cm2").click(function () {
		$('.center .hh2').show();
		$(".center input.cm2").addClass('hide');
	});
	$(".center input.cm3").click(function () {
		$('.center .hh3').show();
		$(".center input.cm3").addClass('hide');
	});
	$(".center input.cm4").click(function () {
		$('.center .hh4').show();
		$(".center input.cm4").addClass('hide');
	});
	$('.sl').hide();
	$('.sl1').show(400);
	$('#paginator li:nth-child(1)').addClass('active');
	i=1;
});
