function Ocorrencia(objeto, word) {
    return objeto.filter((v) => (v === word)).length;

}
$(function () {
    $("#button").click(function () {
        $("#palavras").empty();
        let frase= $("#texto").val();
        var words= frase.split(" ").map(function (word) {
            return word.toLocaleLowerCase();
        });
        var i= 0;
        var array= [];
        var array2= [];
        var j= 0;
        for (word of words) {
            if (array2.indexOf(word)== -1) {
                let ocorren= (Ocorrencia(words, word));
                array2.push(word);
                array[j]= ocorren;
            }
            else
                j--;
            i++; j++;
        }
        for(i= 0; i <array2.length; i++) {
            let tr= $("<tr>");
            $("#palavras").append(tr);
            let td= $("<td>");
            let td2= $("<td>");
            td.text(array2[i]);
            td2.text(array[i]);
            tr.append(td);
            tr.append(td2);
        }; 

    })
})