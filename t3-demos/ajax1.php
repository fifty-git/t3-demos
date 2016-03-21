<?php

if($_POST['formValues']) {

  $postArray = json_decode(stripslashes($_POST['formValues']), true);

  $firstName = $postArray['firstName'];
  $lastName = $postArray['lastName'];
  $userEmail = $postArray['userEmail'];

  $response = "<p><strong>First:</strong> $firstName - <strong>Last:</strong> $lastName - <strong>Email:</strong> $userEmail</p>";
  echo $response;
}
else {
  error_log("FAIL");
}
die();
