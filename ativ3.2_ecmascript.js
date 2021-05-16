var triangulo = () =>{
    
    let l1 = parseFloat(document.getElementById("l1").value);
    let l2 = parseFloat(document.getElementById("l2").value);
    let l3 = parseFloat(document.getElementById("l3").value);

    if ((l2 + l3 <= l1) || (l1 + l3 <= l2) || (l1 + l2 <= l3)){
        var result = "Erro";
    }
    else{
        if(l1 == l2 && l1 == l3 && l2 == l3){
                var result = "Equilátero";
            }
        if(l1 == l2 && l1 != l3 && l2 != l3 || l1 == l3 && l1 != l2 && l3 != l2 || l2 == l3 && l2 != l1 && l3 != l1){
                var result = "Isósceles";       
            }
        if(l1 != l2 && l1 != l3 && l2 != l3 ){
                var result = "Escaleno";          
            }
        if(l1 <= 0 || l2 <= 0 || l3 <= 0){
                var result = "Erro";
            }
    }
    document.getElementById("result").innerHTML = result;
}
