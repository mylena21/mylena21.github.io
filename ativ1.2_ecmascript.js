var calculadora = () =>{
    
    let n = parseFloat(document.getElementById("n").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let select = document.getElementById("select").value;
      
    if(select == 1){
            var result = n + n2;
        }
    else if(select == 2){
            if(n > n2)
                var result = n - n2;
            
            else
                var result = n2 - n;
        }
    else if(select == 3){
            var result = n * n2;
        }
    else{
            var result = n/n2;
        }

    document.getElementById("result").innerHTML=result;
}