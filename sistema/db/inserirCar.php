<?php

header('Content-Type: application/json');
require_once "conexao.php";

$modelo = $_POST['modelo'];
$preco = $_POST['preco'];
$descricao = $_POST['descricao'];

if(isset($_FILES['pic']))
{
   $ext = strtolower(substr($_FILES['pic']['name'],-4)); //Pegando extensão do arquivo
   $new_name = date("Y.m.d-H.i.s") . $ext; //Definindo um novo nome para o arquivo
   $dir = './imagens/'; //Diretório para uploads 
   move_uploaded_file($_FILES['pic']['tmp_name'], $dir.$new_name); //Fazer upload do arquivo
   echo("Imagen enviada com sucesso!");
}

$data = [
    'modelo'=> $modelo,
    'preco'=> $preco,
    'descricao'=> $descricao
];


echo json_encode("");

$sql = 'INSERT INTO carros SET modelo=:modelo, preco=:preco, descricao=:descricao';

$status = $conexao->prepare($sql)->execute($data);


