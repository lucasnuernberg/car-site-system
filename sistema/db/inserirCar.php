<?php

header('Content-Type: application/json');
require_once "conexao.php";

$modelo = $_POST['modelo'];
$preco = $_POST['preco'];
$descricao = $_POST['descricao'];

if(isset($_FILES['arquivoFoto']))
{   
    $arquivo = $_FILES['arquivoFoto']['name'];
    $extensao = strtolower(pathinfo($arquivo, PATHINFO_EXTENSION)); //Pegando extensão do arquivo
    $newName = md5(time()).".".$extensao;
    $diretorio = 'imagens/'; //Diretório para uploads 
    move_uploaded_file($_FILES['arquivoFoto']['tmp_name'], $dir.$newName); //Fazer upload do arquivo
    echo("Imagen enviada com sucesso!");
    
} else {
    echo json_encode("Não entrou");
}

$data = [
    'modelo'=> $modelo,
    'preco'=> $preco,
    'descricao'=> $descricao
];



$sql = 'INSERT INTO carros SET modelo=:modelo, preco=:preco, descricao=:descricao';

$status = $conexao->prepare($sql)->execute($data);

?>


