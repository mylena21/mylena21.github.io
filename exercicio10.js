function chamaFuncao(){
	var qtd = document.getElementById("entrada1").value;
	qtd= parseInt(qtd);
	var resultado = calccustotal(qtd);
	alert("O custo total é " + resultado);
}
function calccustotal(qtd){
	if(qtd<12)
		return qtd*1.3;
	else
		return qtd;
	
}

