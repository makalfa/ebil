<?php
define('GUSER', 'intellibizafricaboss@gmail.com'); // Gmail username

//2011agentzl
define('GPWD', 'josephkwatuha'); // Gmail password
require_once('../phpmailer/class.phpmailer.php');
function smtpmailer($to, $from, $from_name, $subject, $body) {
    
       $attachedDocument='image/Bulk_sms_proposal.pdf';
       $from_name='Intellibiz Africa Ltd';
       $subject='Bulk SMS Proposal';
       $body='Hi,

I hope this finds you well. On behalf of  Intellibiz Africa Limited, I would like to introduce to your organization a communication platform developed to simplify and expedite communication with your clients. The product was first implemented in one branch by  one of our clients in 2013  to communicate billing information to water consumers. The system positively impacted the revenue collection to the extent which they requested us to deploy the system in all of their branches. 

Based on the above outcome, we therefore saw the need as a company to introduce our product to other potential users. 

Should you have a test environment, Intellibiz Africa would be more than happy to install the communication system for further review and testing.

We would be glad to partner with your organization in enhancing service delivery.';


                
                
                
       global $error;
       $mail = new PHPMailer();  // create a new object
       $mail->IsSMTP(); // enable SMTP
       $mail->SMTPDebug = 0;  // debugging: 1 = errors and messages, 2 = messages only
       $mail->SMTPAuth = true;  // authentication enabled
       $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
       $mail->Host = 'smtp.googlemail.com';
       $mail->Port = 465;
       $mail->Username = GUSER;  
       $mail->Password = GPWD;          
       $mail->SetFrom($from, $from_name);
       $mail->Subject = $subject;
       $mail->Body = $body;
       $mail->AddAttachment($attachedDocument); // attachment
       $mail->AddAddress($to);
       if(!$mail->Send()) {
               $error = 'Mail error: '.$mail->ErrorInfo;
               return false;
       } else {
               $error = 'Message sent!';
               return true;
       }
}
?><?php
/*$emailfrom=$_GET['emailfrom'];
$mailto=$_GET['mailto'];
$namefrom=$_GET['namefrom'];
$emailsubject=$_GET['emailsubject'];
$emailbody=$_GET['emailbody'];
if (smtpmailer($mailto, $emailfrom, $namefrom, $emailsubject, $emailbody)) {
       echo "Mail sent successfully. Confirm with your inbox";
}
if (!empty($error)) echo $error;*/
?>