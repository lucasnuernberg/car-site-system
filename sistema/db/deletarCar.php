<?php

require_once "conexao.php";

header('Content-Type: application/json');

$id = $_POST['id'];

echo json_encode($id);

$data = [
    'id' => $id
];

$sql = 'DELETE FROM carros WHERE id=:id';

$conexao->prepare($sql)->execute($data);

?>


