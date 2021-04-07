
function trocar() {
    $('#img-pai').attr('src',"imagens/pai-juju.png" )
    $('#img-pai').animate({"width": "550px"})
}

function trocarDnv() {
    $('#img-pai').attr("src", "imagens/pai.png");
}

$('li').click(function(){
    var conteudo = $('div.content')
    conteudo.html('')
    let pag = $(this)[0].id;
    

    switch (pag) {
        case 'home':
            window.location.href = 'index.html'
        case 'sobre':
            conteudo.html(
                '<div class="m-auto text-center" style="width:80%"> <h1> Sobre a empresa</h1> <p>Fundada em 1994, KBÇA Automóveis comercializa veículos novos e semi-novos com garantia de qualidade e procedência. Bem estabelecida, no coração da cidade, atende seus clientes com muita atenção e carinho, conseguindo estabelecer-se como padrão de excelência nos produtos e serviços. O sucesso pode ser comprovado não apenas entre seus clientes, mas também por toda a comunidade e seus colaboradores. KBÇA Automóveis, sem dúvida a melhor opção para um bom negócio.')
            break;
        case 'contato':
            conteudo.html('<div class="text-center"> <p>Whats: number')

            break    
        default:
            break;
    }

})