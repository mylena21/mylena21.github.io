$(function(){ 
    $("#button").click(function(){
        let frase =$("#frase").val();
        var arrayFrase= frase.split('');
        var resultado= new Array();
        var tamanho= frase.length;
        for(var i=0;i<=tamanho;i++){
            resultado.push(arrayFrase[tamanho-i]);
        }
    result2= resultado.join('');
    $("#resultado").append($("<p>").text(result2));
    })
})