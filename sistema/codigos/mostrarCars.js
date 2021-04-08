
$(document).ready(function(){
    

    $.ajax({
        url: 'http://localhost/projeto-site/sistema/db/pegarCars.php',
        method: 'GET',
        type: 'get',
        dataType: 'json'
    }).done(function inserir(result){
        var carros = result;
        
        for(let i = 0; result.length > i; i++) {
            //creating a div
            let divCar = $("<div />");
            divCar.attr({
                id: `car${i}`,
                class: 'car'
            })
            //creating a img
            let imgCar = $('<img />')
            imgCar.attr({
                src: result[i]['url_foto'],
                onclick: `takeData(${i})`
            })
            divCar.append(imgCar);
            //creating a text
            let p1Car = `<p><strong>${result[i]['modelo']}`
            let p2Car = `<p>R$${result[i]['preco']},00`
            let p3Car = `<p><span>${result[i]['descricao']}`
            divCar.append(p1Car);
            divCar.append(p2Car);
            divCar.append(p3Car);
            //creating button
            let buttonCar = `<button class="btn btn-success" onclick="takeData(${i})">Saiba mais</button><br>`
            divCar.append(buttonCar);

            $('#Tcarros').append(divCar);
        }
        
        var urlRequest = "http://localhost/projeto-site/sistema/db/results.json";
        var request = new XMLHttpRequest();
        
        (async ()=>{
            request.open('GET', urlRequest);
            request.responseType = 'json';
            request.send();
            request.onload = ()=>{
                var carros =  request.response;
                console.log()
            }
        })()
        

    }).fail(function(err){

        console.log(err);
    })
})
