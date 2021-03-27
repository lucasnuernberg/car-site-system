<?php

header('Content-Type: application/json');

$conexao = new PDO('mysql:host=localhost;dbname=sistema_kbca', 'root', '');


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

echo json_encode('Bom dia');

$sql = 'INSERT INTO carros SET modelo=:modelo, preco=:preco, descricao=:descricao, url_foto=:url_foto';

$status = $conexao->prepare($sql)->execute($data);


