<?php

  $Nom =$_POST['Nom']; 
  $Prenom =$_POST['Prenom']; 
  $email =$_POST['email']; 
  $Numero =$_POST['Numero'];
  $message =$_POST['message']; 
  if ( isset($_POST['Nom']) || isset($_POST['Prenom'])   ||  isset($_POST['Numero']) ) {
     $to = 'hooudabkz@gmail.com';
     $sujet = 'customors';
	 $msg=" Last Name: ". $Prenom .  " Email: ". $email . " Phone: ". $Numero . " Message: " . $message . "";
     $header='From:test@gmail.com';
   mail($to,$sujet,$msg,$header);}
   

  if(isset($_POST['submit'])) {
       header('Location: contact.html?message=Successfull');
    }
 
?>