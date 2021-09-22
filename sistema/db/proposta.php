<?php

require_once "conexao.php";
header('Content-Type: application/json');


$sql = 'INSERT INTO propostas
        SET nome=:nome, email=:email,
        celular_num=:num_cel,
        proposta=:preco_prop,
        id_car=:id_car,
         detalhe=:detalhe';

$proposta = $_POST['content'];

$dada = json_decode($proposta, true);

$inserir = [
    "nome" => $dada["inputs"][0],
    "email" => $dada["inputs"][1],
    "num_cel" => $dada["inputs"][2],
    "preco_prop" => $dada["inputs"][3],
    "id_car" => $dada["idCar"],
    "detalhe" => "",
];

echo json_encode(".");

if (true) {
    $status = $conexao->prepare($sql)->execute($inserir);
}

?>