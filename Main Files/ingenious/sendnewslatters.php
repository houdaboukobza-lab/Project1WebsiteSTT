<?php if(isset($_POST["email"])){
	// Read the form values
	$success = false;
	$senderEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";
	
	//Headers
	$to = "yourmail@mail.com"; // Please insert your email here
    $subject = 'Newslatters';
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
	
	//body message
	$message = "Email: ". $senderEmail . "";
	
	//Email Send Function
    $send_email = mail($to, $subject, $message, $headers);
      
    echo ($send_email) ? '<div class="success">Email has been sent successfully.</div>' : 'Error: Email has not been sent.';
} else {
	echo '<div class="failed">Failed sending your email.</div>';
}
?>