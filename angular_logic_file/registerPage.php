<?php
// ------------------------------------------------------------------------------------
// Getting error
//Access to XMLHttpRequest at 'http://localhost/angular_logic_file/registerPage.php' from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource
// ------------------------------------------------------------------------------------
header('Access-Control-Allow-Headers: accept, content-type');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Origin: *');
//----------------------------------------------------------------------------------------
$data = json_decode(file_get_contents("php://input"));
echo json_encode($data);
// ---------------------------------------------------------------------------------------
// After some time
// Request URL: http://localhost:4200/sockjs-node/info?t=1553577907265
// net::ERR_CONNECTION_REFUSED
// --------------------------------------------------------------------------------------

?>