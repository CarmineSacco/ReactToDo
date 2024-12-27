<?php
include 'config.php';
include 'utility.php';

$conn = connessione();
$request = getRequest();

$id_utente = $request['id_utente'];
$titolo = $request['titolo'];
$argomento = $request['argomento'];
//TODO aggiungere task in data base
$query_task = mysqli_query($conn, "INSERT INTO tasks (titolo, argomento, id_utente , stato) VALUES ('$titolo', '$argomento', '$id_utente' , '0')");
if ($query_task) {
    echo json_encode(array('success' => true, 'message' => 'Task aggiunto con successo.'));
} else {
    echo json_encode(array('success' => false, 'message' => 'Task non aggiunto.'));
}
