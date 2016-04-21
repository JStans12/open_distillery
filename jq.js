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