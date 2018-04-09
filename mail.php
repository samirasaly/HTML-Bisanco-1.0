<?php
if(isset($_POST['full_name'])) {
	$to .= 'info@bisangroupco.com';
	
	// subject
	$subject = $_POST['subject'];
	
	// message
	$message = '<p><strong>Hi <span style="color:#667A79;">BisanCo</span> this message is from your website contact us section</strong><br /><br />
				<b>Full Name</b>: ' . $_POST['full_name'] . '<br /><br />
				<b>Email Address</b>: ' . $_POST['email'] . '<br /><br />
				<b>Phone Number</b>: ' . $_POST['phone'] . '<br /><br />
				<b>Subject</b>: ' . $_POST['subject'] . '<br /><br />
				<b>Message</b>: ' . $_POST['message'] . '</p> <br />';
	
	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	
	// Additional headers
	$headers .= 'From: ' . $_POST['full_name'] . ' <noreply@bisangroupco.com>' . "\r\n";
	$headers .= 'Reply-To: ' .$_POST['email'] . "\r\n";
	
	// Mail it
	mail($to, $subject, $message, $headers);
}
?>
