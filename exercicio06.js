function chamaFuncao(){
	var preco = document.getElementById("entrada1").value;
	preco= parseFloat(preco);
	var resultado = calccusto(preco);
	alert("O custo final é " + resultado);
}
function calccusto(custo){
	return custo + (0.45*custo) + (0.28*custo);
}

