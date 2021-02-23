  $(function () {
            $("#button").click(function () {
                if ($("#texto").val() != "") {
                    let search= $("#frase").val();
                    let substituir= $("#frase2").val();
                    let text= $("#texto").val();
                    let array= text.split(" ");
                    for (i= 0; i < array.length; i++) {
                        if (array[i] == search) {
                            array[i] = substituir;
                        }
                    }
                    let test = ""
                    test = array.join(" ");
                    $("#resultado").text(test);
                    $("#frase").val("");
                    $("#frase2").val("");
                    $("#texto").val("");
                }

                else {
                    $("#resultado").text("Insira um texto válido");
                }
            })
        })