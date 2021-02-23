function ocorrencias(words, word) {
    return words.filter((v) => (v === word)).length;

}
$(function () {
    $("#button").click(function () {
        let texto= $("#texto").val();
        var words= texto.split(" ").map(function (word) {
            return word.toLocaleLowerCase();
        });
        var array= new Array;
        var i= 0;
        var j= 0;
        var foio= [];
        for (word of words) {
            if (foio.indexOf(word)== -1) {
                let ocorr= ocorrencias(words, word);
                foio.push(word);
                array[j]= ocorr;
            }
            else {
                j--;
            }
            i++;
            j++;
        }
        var empateobj= [];
        var maiorPalavra;
        var contador= 0;
        for (i= 0; i < foio.length; i++) {
            var maior= Math.max.apply(null, array); 
            if (array[i]== maior) {
                contador++;
                maiorPalavra= foio[i];
                empateobj[i]= foio[i];
            }
        }
        if(contador > 1) 
            $("#resultado").text(empateobj + "/ Essas palavras empataram ,  com " + array[0] + " ocorrências ");
        else 
            $("#resultado").text("A palavra mais ocorrida: " + maiorPalavra + ", com :  " + maior + " ocorrências.");
    })
})