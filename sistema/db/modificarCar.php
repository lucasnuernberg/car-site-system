<?php

header('Content-Type: application/json');


$conexao = new PDO('mysql:host=localhost;dbname=sistema_kbca', 'root', '');

$id = $_POST['id'];
$modelo = $_POST['modelo'];
$preco = $_POST['preco'];
$url_foto = $_POST['foto'];
$descricao = $_POST['descricao'];

$data = [
    'id'=> $id,
    'modelo'=> $modelo,
    'preco'=> $preco,
    'descricao'=> $descricao,
    'url_foto'=> $url_foto
];


$sql = 'UPDATE carros SET modelo=:modelo, preco=:preco, descricao=:descricao, url_foto=:url_foto WHERE id=:id';

if (1==1) {
    $conexao->prepare($sql)->execute($data);
    echo json_encode('Dados atualizados');

}
//back-end