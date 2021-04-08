$(document).ready(function(){
    var urlReq = "http://localhost/projeto-site/sistema/db/results.json";
    var request = new XMLHttpRequest();
    request.open('GET', urlReq);
    request.responseType = 'json'
    request.send();
    request.onload = function(){
        var carData = request.response;
        
        var selectElement = $('#carsSelect');
        for(let i = 0; carData.length > i; i++){
            selectElement.append(`<option value="${carData[i].id}">${carData[i].modelo}</option>`);
        }  
        
    }
}
)
$("#subtmitBtn").click(function(e){
    e.preventDefault();
    var nodeList = $("input");
    var inputElements = [...nodeList];
    
    var inputsVal = inputElements.map(function(element){return element.value});    
    var idCarSelected = $("#carsSelect option:selected").val(); 
    var textAreaVal = $("textarea#textContent").val()

    var proposta = {
        inputs: inputsVal,
        idCar: idCarSelected,
        textArea: textAreaVal
    }

    $.ajax({
        url: "http://localhost/projeto-site/sistema/db/proposta.php",
        data: {content: JSON.stringify(proposta)},
        dataType: "json",
        method: "POST",
        type: "post",

    }).done(function(result){
        console.log(result);
    }).fail(function(error){
        console.log(error)
    })

    
})
