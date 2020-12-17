function chamaFuncao(){
	var cat1 = document.getElementById("entrada1").value;
	var cat2 = document.getElementById("entrada2").value;
	cat1= parseInt(cat1);
	cat2= parseInt(cat2);
	var resultado = calchipotenusa(cat1, cat2);
	alert("A hipotenusa é " + resultado);
}

function calchipotenusa(cate1,cate2){
	var result= (cate1*cate1)+(cate2*cate2);
	return Math.sqrt(result);


}