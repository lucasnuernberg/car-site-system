
function trocar() {
    $('#img-pai').attr('src',"imagens/pai-juju.png" );
    $('#img-pai').animate({"width": "550px"});
}

function trocarDnv() {
    $('#img-pai').attr("src", "imagens/pai.png");
}

$('li').click(function(){
    var conteudo = $('div.content');
    let pag = $(this)[0].id;    

    switch (pag) {
        case 'home':
            window.location.href = 'index.html';
        case 'sobre':
            conteudo.html(
                '<div class="m-auto text-center" style="width:80%"> <h1> Sobre a empresa</h1> <p>Fundada em 1994, KBÇA Automóveis comercializa veículos novos e semi-novos com garantia de qualidade e procedência. Bem estabelecida, no coração da cidade, atende seus clientes com muita atenção e carinho, conseguindo estabelecer-se como padrão de excelência nos produtos e serviços. O sucesso pode ser comprovado não apenas entre seus clientes, mas também por toda a comunidade e seus colaboradores. KBÇA Automóveis, sem dúvida a melhor opção para um bom negócio.')
            break;
        case 'contato':
            conteudo.load('contato.html');
            break;
        case 'loc':
            conteudo.html('<div class="d-flex justify-content-center"><iframe class="border border-danger rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3187467362663!2d-49.3681116853949!3d-28.6801102761202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9521827ff27bbddd%3A0x650588a702168e21!2zS0LDh0EgQXV0b23Ds3ZlaXM!5e0!3m2!1spt-BR!2sbr!4v1617915197686!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>')
            break;
        default:
            break;
    };

});

$('li#maiores').click(function() {

    var limpar = $('div#Tcarros.carros');
    limpar.html('');
    var caminho = localStorage.getItem("path");

    $.ajax({
        url: `${caminho}/sistema/db/pegarMaiores.php`,
        method: 'GET',
        type: 'get',
        dataType: 'json'
    }).done(function inserir(result){   

        for(let i = 0; result.length > i; i++) {
            //creating a div
            let divCar = $("<div />");
            divCar.attr({
                id: `car${i}`,
                class: 'car'
            })
            //creating a img
            let imgCar = $('<img />')
            let urlCarro = 'http://localhost/projeto-site/sistema/' + result[i]['url_foto'];
            imgCar.attr({
                src: urlCarro,
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

    }).fail(function(err){
        console.log(err);
    })    
});

$('ul.navbar-nav li a').click(function(){
    var elemento = $('a.nav-link.active')[0];
    elemento.classList.value = "nav-link";
    $(this).removeClass().addClass("nav-link active");
    
})



