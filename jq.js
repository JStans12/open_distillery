$(document).ready(function(){
	$('#weightVol').keypress(function(key){
		if( key.which === 13){
			calcVol();
		}
	});
	$('#startingVolumeDP').keypress(function(key){
		if( key.which === 13){
			calcDP();
		}
	});
	$('#thermometerTP').keypress(function(key){
		if( key.which === 13){
			calcTP();
		}
	});
});

$(document).ready(function(){
	$('#tabProof').addClass('tabActive');
	$('#aboutDilute').hide();
	$('#aboutConvert').hide();
});

$(document).ready(function(){
	$('.tab').mouseenter(function(){
		$(this).addClass('tabHover');
	});
	$('.tab').mouseleave(function(){
		$(this).removeClass('tabHover');
	});
	$('.tab').click(function(){
		$('.tab').removeClass('tabActive');
		$(this).addClass('tabActive');
	});
});

$(document).ready(function(){
	$('#tabProof').click(function(){
		$('#aboutDilute').hide();
		$('#aboutConvert').hide();
		$('#aboutProof').show();
	});
	$('#tabDilute').click(function(){
		$('#aboutProof').hide();
		$('#aboutConvert').hide();
		$('#aboutDilute').show();
	});
	$('#tabConvert').click(function(){
		$('#aboutProof').hide();
		$('#aboutDilute').hide();
		$('#aboutConvert').show();
	});
});