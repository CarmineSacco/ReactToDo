<?php
include 'config.php';
include 'utility.php';
$conn = connessione();
$request = getRequest();

$password = $request['password'];
$usernameEmail = $request['usernameEmail'];

$checkEmail = str_contains($usernameEmail, '@');

if ($checkEmail) {
    $query = mysqli_query($conn, "SELECT * FROM utenti WHERE email = '$usernameEmail' AND password = '$password'");
} else {
    $query = mysqli_query($conn, "SELECT * FROM utenti WHERE username = '$usernameEmail' AND password = '$password'");
}

$checkLogin = mysqli_num_rows($query);
if ($checkLogin > 0) {
    $row = mysqli_fetch_assoc($query);
    echo json_encode(array('nome' => $row['nome'], 'cognome' => $row['cognome'], 'username' => $row['username'], 'permesso' => $row['permesso'], "id_utente" => $row['id_utente'],  'success' => true, 'message' => 'Login effettuato con successo.'));
} else {
    echo json_encode(array('success' => false, 'message' => 'Credenziali errate.'));
}
