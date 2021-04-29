$(document).ready(function(){
    var caminho = localStorage.getItem("path");
    
    $("#subtmitBtn").click(function(e){        
        e.preventDefault();

        var validar = true;
        var nodeList = $("input");
        var inputElements = [...nodeList];

        
        var inputsVal = inputElements.map(function(element){return element.value});    
        var idCarSelected = $("#carsSelect option:selected").val();
        var textAreaVal = $("textarea#textContent").val()

        inputsVal.forEach(
            function verifica(item, index) {
                if (item == "") {
                    validar = false
                }
            }
        )

        var proposta = {
            inputs: inputsVal,
            idCar: idCarSelected,
            textArea: textAreaVal
        }

        if (validar) {
            console.log("Adiciona");
            $.ajax({
                url: `${caminho}/sistema/db/proposta.php`,
                data: {content: JSON.stringify(proposta)},
                dataType: "json",
                method: "POST",
                type: "post",
    
            }).done(function(result){
                console.log(result);
            }).fail(function(error){
                console.log(error)
            })

            
        }


        
    })
})
