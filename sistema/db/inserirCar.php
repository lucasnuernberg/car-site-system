<?php

header('Content-Type: application/json');

require_once "conexao.php";


$modelo = $_POST['modelo'];
$preco = $_POST['preco'];
$descricao = $_POST['descricao'];
$url_foto = $_POST['url_foto'];


$data = [
    'modelo'=> $modelo,
    'preco'=> $preco,
    'descricao'=> $descricao,
    'url_foto'=> $url_foto
];


echo json_encode("Bom dia");

$sql = 'INSERT INTO carros SET modelo=:modelo, preco=:preco, descricao=:descricao, url_foto=:url_foto';

$status = $conexao->prepare($sql)->execute($data);


