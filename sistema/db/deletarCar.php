<?php


header('Content-Type: application/json');


$id = $_POST['id'];

echo json_encode($id);

$conexao = new PDO('mysql:host=localhost;dbname=sistema_kbca', 'root', '');

$data = [
    'id' => $id
];

$sql = 'DELETE FROM carros WHERE id=:id';

$conexao->prepare($sql)->execute($data);


