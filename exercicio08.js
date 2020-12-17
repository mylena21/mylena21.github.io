function chamaFuncao(){
	var temp = document.getElementById("entrada1").value;
	temp= parseFloat(temp);
	var resultado = calccelsius(temp);
	alert("A temperatura é " + resultado + "°C");
}
function calccelsius(temp){
	return ((temp -32)/9) *5;

	
	
	
}

