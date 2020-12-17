function chamaFuncao(){
	var qtdcar = document.getElementById("entrada1").value;
	var vendtotal = document.getElementById("entrada2").value;
	var sal = document.getElementById("entrada3").value;
	var valcar = document.getElementById("entrada4").value;
	qtdcar= parseInt(qtdcar);
	vendtotal= parseFloat(vendtotal);
	sal= parseFloat(sal);
	valcar= parseFloat(valcar);
	var resultado = calcsalario(qtdcar, vendtotal, sal, valcar);
	alert("O salário final é " + resultado);
}
function calcsalario(qtdcar, vendtotal, sal, valcar){
	result= sal + (valcar*qtdcar);
	result2= result + (0.05*vendtotal);
	return result2;
	
	
	
}

