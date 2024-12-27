<?php

include 'config.php';
include 'utility.php';
$conn = connessione();

$request = getRequest();
$user = $request['user'];
$nome = $user['nome'];
$cognome = $user['cognome'];
$username = $user['username'];
$email = $user['email'];
$password = $user['password'];

$query_registrazione = mysqli_query($conn, "INSERT INTO utenti (nome, cognome , username , email , password) VALUES ('$nome', '$cognome', '$username', '$email', '$password')");

if ($query_registrazione) {
    echo json_encode(array('success' => true, 'message' => 'Registrazione effettuata con successo.'));
} else {
    echo json_encode(array('success' => false, 'message' => 'Registrazione fallita.'));
}
