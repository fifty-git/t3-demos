<?php

require_once($_SERVER['DOCUMENT_ROOT']."/includes/ShoppingEngine/Model/CustomerModel.php");

if($_POST['formValues']) {

  $postArray = json_decode(stripslashes($_POST['formValues']), true);
  
  $customerModel = new CustomerModel();
  $customerId = $postArray['data'];
  
  $response = $customerModel->getCustomer($customerId);

  echo json_encode($response);
  
}
else {
  error_log("FAIL");
}
die();
