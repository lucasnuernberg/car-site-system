$(document).ready(function(){
    var carPlace = $('#Tcarros');

    $.ajax({
        url: 'http://localhost/projeto-site/sistema/db/pegarCars.php',
        method: 'GET',
        type: 'get',
        dataType: 'json'
    }).done(function(result){

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
            let p1Car = `<p>${result[i]['modelo']}<p/>`
            let p2Car = `<p>R$${result[i]['preco']},00<p/>`            
            divCar.append(p1Car);
            divCar.append(p2Car);
            //creating button
            let buttonCar = `<button onclick="takeData(${i})">Saiba mais</button><br>`
            divCar.append(buttonCar);
            


            
            $('#Tcarros').append(divCar);

        }

        
        

    }).fail(function(err){

        console.log(err);
    })
})
