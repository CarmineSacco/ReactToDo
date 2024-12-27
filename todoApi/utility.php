<?php
function getRequest()
{
    $input = json_decode(file_get_contents('php://input'), true);
    return $input;
}
