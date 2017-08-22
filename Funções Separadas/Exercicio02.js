function deveFazerAV3(valorAv1, valorAv2) {
	
	var media = parseFloat((valorAv1 + valorAv2) / 2);
	
	if(valorAv1 < 4 || valorAv2 < 4) {
		return true;
	} else if(media < 6.0) {
		
		return true;
	}
	
	return false;
	
	
	
}

console.log("Deverá fazer Av3? \n");
deveFazerAV3(4, 8);