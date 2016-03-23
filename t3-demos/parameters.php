<?php
require_once("../../includes/ShoppingEngine/Core/CartAbandonmentCore.php");

$site_url = "http://" . $_SERVER["SERVER_NAME"];
$email = $_POST['email'];
$password = $_POST['password'];

$accountCore = new AccountLoginCore();
$isCurrentMember = $accountCore->isCurrentMemberByEmail($email);

if ($isCurrentMember){
    $customerId = $accountCore->getCustomerIdByEmail($email);
}

?>
<!DOCTYPE html>
<html>
    <head>
        <title>T3 parameters demo</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
    <h1>T3 Demo Parameters</h1>
    
    <div class="" data-module="parameters-module">
        
        <script type="text/x-config">{"customerId":"<?= $customerId ?>" ,"message":"welcome"}</script>
        
      <form name="myForm" method="post" action="<?= $site_url ?>/T3_demos/t3-demos/parameters.php">
        
          <p>Email: <input type="email" name="email" value=""> </p>
          <p>Password: <input type="password" name="password" value=""></p>
          <p><input type="button" name="btnSubmit" value="Submit" data-type="submit-btn"></p>
        
      </form>
      <span class="message"></span>
    </div>
    
    <div id="target_div"></div>
  
    
    <script src="//code.jquery.com/jquery-1.11.3.min.js" type="text/javascript"></script>
    <script src="js/t3-dev-build.js" type="text/javascript"></script>
    <script src="js/app.js" type="text/javascript"></script>
    <script src="js/services/common-service.js" type="text/javascript"></script>
    <script src="js/behaviors/parameters-behavior.js" type="text/javascript"></script>
    <script src="js/modules/parameters-module.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/json2html/json2html.js"></script>
    
    
        
    <script>
      $( document ).ready(function() {
        Box.Application.init({
          debug: true
        });
      });
    </script>
  </body>
</html>

