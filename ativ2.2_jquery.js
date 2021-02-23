function eVogal(caracter){
    caracter= caracter.toUpperCase();
    if(caracter == "A" || caracter == "E" || caracter == "I" || caracter == "O" || caracter == "U" || caracter == "Ã" || caracter == "Á" || caracter == "À" || caracter == "Â" || caracter == "Ê" || caracter == "É"|| caracter == "Í" || caracter == "Ó" || caracter == "Õ" || caracter == "Ô"){
        return true;
    }
}
function negritoVogal(caracter){
    return caracter.bold();
}
$(function(){ 
    $("#button").click(function(){
        let frase =$("#frase").val();
        let frase2="";
        for(var i=0; i<frase.length; i++){
            let caracter = frase[i];
            if(eVogal(caracter)== true){
               var vogal= negritoVogal(caracter);
               frase2 += vogal;
            }
            else
            frase2 += caracter;
        }
    $("#resultado").append($("<p>").html(frase2));
    })
})