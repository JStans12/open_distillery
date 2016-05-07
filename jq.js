// press enter to trigger fucntions

$(document).ready(function(){
	$('#weightVol').keypress(function(key){
		if( key.which === 13){
			calcVol();
		}
	});
	$('#finalProofDP').keypress(function(key){
		if( key.which === 13){
			calcDP();
		}
	});
	$('#thermometerTP').keypress(function(key){
		if( key.which === 13){
			calcTP();
		}
	});
	$('#mingleFinal').keypress(function(key){
		if( key.which === 13){
			calcMing();
		}
	});
	$('#mingA').keypress(function(key){
		if( key.which === 13){
			calcMingA();
		}
	});
	$('#mingB').keypress(function(key){
		if( key.which === 13){
			calcMingB();
		}
	});
	$('#vConVal').keypress(function(key){
		if( key.which === 13){
			calcVCon();
		}
	});
	$('#wConVal').keypress(function(key){
		if( key.which === 13){
			calcWCon();
		}
	});
	$('#volumePGs').keypress(function(key){
		if( key.which === 13){
			calcProofGallons();
		}
	});
});

// starting position

$(document).ready(function(){
	$('#tabProof').addClass('tabActive');
	$('#aboutDilute').hide();
	$('#aboutConvert').hide();
	$('#dilute').hide();
	$('#convert').hide();
});

// hover over tabs

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

// click tabs

$(document).ready(function(){
	$('#tabProof').click(function(){
		$('#aboutDilute').hide();
		$('#aboutConvert').hide();
		$('#aboutProof').show();
		$('#dilute').hide();
		$('#convert').hide();
		$('#proof').show();
		$('#errorsDilute').hide();
		$('#errorsConvert').hide();
		$('#errorsProof').show();
	});
	$('#tabDilute').click(function(){
		$('#aboutProof').hide();
		$('#aboutConvert').hide();
		$('#aboutDilute').show();
		$('#proof').hide();
		$('#convert').hide();
		$('#dilute').show();
		$('#errorsProof').hide();
		$('#errorsConvert').hide();
		$('#errorsDilute').show();
	});
	$('#tabConvert').click(function(){
		$('#aboutProof').hide();
		$('#aboutDilute').hide();
		$('#aboutConvert').show();
		$('#proof').hide();
		$('#dilute').hide();
		$('#convert').show();
		$('#errorsProof').hide();
		$('#errorsDilute').hide();
		$('#errorsConvert').show();
	});
});