function calcTP(){
	var hydrometerTP = +document.getElementById("hydrometerTP").value;
	if(isNaN(hydrometerTP)){
		document.getElementById("errors").innerHTML = "Input is not a number.";
		document.getElementById("outTP").innerHTML = " ";
	}
	if(hydrometerTP > 203 || hydrometerTP < 0){
		document.getElementById("errors").innerHTML = "Your readings are outside the working range of table_1.";
		document.getElementById("outTP").innerHTML = " ";
	}
	var iHydrometerTP = Math.trunc(hydrometerTP);
	var fHydrometerTP = (hydrometerTP%1).toFixed(1);
	var thermometerTP = +document.getElementById("thermometerTP").value;
	var iThermometerTP = Math.trunc(thermometerTP);
	var fThermometerTP = (thermometerTP%1).toFixed(1);
	var PT = twoDT[iHydrometerTP][iThermometerTP-1];
	var PoT = twoDT[iHydrometerTP+1][iThermometerTP-1];
	var PTo = twoDT[iHydrometerTP][iThermometerTP];
	if(thermometerTP > 99 || thermometerTP < 1){
		document.getElementById("errors").innerHTML = "Thermometer must be between 1-99.";
		document.getElementById("outTP").innerHTML = " ";
	} else if(isNaN(thermometerTP) || document.getElementById("hydrometerTP").value === '' || document.getElementById("thermometerTP").value === ''){
		document.getElementById("errors").innerHTML = "Input is not a number.";
		document.getElementById("outTP").innerHTML = " ";
	} else if(PT === 0 || PoT === 0 || PTo === 0){
		document.getElementById("errors").innerHTML = "Your readings are outside the working range of table_1.";
		document.getElementById("outTP").innerHTML = " ";
	} else {
		document.getElementById("outTP").innerHTML = (PT+(fHydrometerTP*(PoT-PT))-(fThermometerTP*Math.abs(PTo-PT))).toFixed(1);
		document.getElementById("errors").innerHTML = " ";
	}
}
	
function calcVol(){
	var proofVol = +document.getElementById("proofVol").value;
	var weightVol = +document.getElementById("weightVol").value;
	var outVol = weightVol/(((((proofVol/2)/100)*789)+(((100-(proofVol/2))/100)*1000))*0.00220462262);
	if(proofVol < 0 || weightVol < 0){
		document.getElementById("errors").innerHTML = "Proof and Weight must be positive.";
		document.getElementById("outVol").innerHTML = " ";
	} else if(proofVol > 200){
		document.getElementById("errors").innerHTML = "Proof must be between 0-200.";
		document.getElementById("outVol").innerHTML = " ";
	} else if(isNaN(proofVol) || isNaN(weightVol) || document.getElementById("proofVol").value === '' || document.getElementById("weightVol").value === ''){
		document.getElementById("errors").innerHTML = "Input is not a number.";
		document.getElementById("outVol").innerHTML = " ";
	} else {
		document.getElementById("outVol").innerHTML = outVol.toFixed(2);
		document.getElementById("errors").innerHTML = " ";
	}
}
	
function calcDP(){
	var startingProofDP = +document.getElementById("startingProofDP").value;
	var finalProofDP = +document.getElementById("finalProofDP").value;
	var startingVolumeDP = +document.getElementById("startingVolumeDP").value;
	var outPGs = 2*((startingVolumeDP*0.264172)*((startingProofDP/2)/100));
	var outWater = startingVolumeDP*((startingProofDP/finalProofDP)-1);
	var outFinal = startingVolumeDP + outWater;
	if(startingProofDP < 0 || finalProofDP < 0 || startingVolumeDP <0){
		document.getElementById("errors").innerHTML = "Proof and Volume must be positive.";
		document.getElementById("outPGs").innerHTML = " ";
		document.getElementById("outWater").innerHTML = " ";
		document.getElementById("outFinal").innerHTML = " ";
	} else if(startingProofDP > 200 || finalProofDP > 200){
		document.getElementById("errors").innerHTML = "Proof must be between 0-200.";
		document.getElementById("outPGs").innerHTML = " ";
		document.getElementById("outWater").innerHTML = " ";
		document.getElementById("outFinal").innerHTML = " ";
	} else if(startingProofDP < finalProofDP){
		document.getElementById("errors").innerHTML = "Starting Proof must be greater than Final Proof.";
		document.getElementById("outPGs").innerHTML = " ";
		document.getElementById("outWater").innerHTML = " ";
		document.getElementById("outFinal").innerHTML = " ";
	} else if(isNaN(startingProofDP) || isNaN(finalProofDP) || isNaN(startingVolumeDP) || document.getElementById("startingProofDP").value === '' || document.getElementById("finalProofDP").value === '' || document.getElementById("startingVolumeDP").value === ''){
		document.getElementById("errors").innerHTML = "Input is not a number.";
		document.getElementById("outPGs").innerHTML = " ";
		document.getElementById("outWater").innerHTML = " ";
		document.getElementById("outFinal").innerHTML = " ";
	} else {
		document.getElementById("outPGs").innerHTML = outPGs.toFixed(2);
		document.getElementById("outWater").innerHTML = outWater.toFixed(2);
		document.getElementById("outFinal").innerHTML = outFinal.toFixed(2);
		document.getElementById("errors").innerHTML = " ";
	}
}