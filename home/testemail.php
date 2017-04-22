<?php
define('GUSER', 'intellibizafricaboss@gmail.com'); // Gmail username

//2011agentzl
define('GPWD', 'josephkwatuha'); // Gmail password
require_once('../phpmailer/class.phpmailer.php');
include('../template/functions/menuLinks.php');


$from='kwatuha@yahoo.com';
				$prefferedemail='kwatuha@gmail.com';
				$from_name='Intellibiz Africa dev';
				$subject='System testtin';
				$body='Hi,

I hope this finds you well. On behalf of  Intellibiz Africa Limited, I would like to introduce to your organization a communication platform developed to simplify and expedite communication with your clients. The product was first implemented in one branch by  one of our clients in 2013  to communicate billing information to water consumers. The system positively impacted the revenue collection to the extent which they requested us to deploy the system in all of their branches. 

Based on the above outcome, we therefore saw the need as a company to introduce our product to other potential users. 

Should you have a test environment, Intellibiz Africa would be more than happy to install the communication system for further review and testing.

We would be glad to partner with your organization in enhancing service delivery.';
                $to='intellibizafrica@gmail.com';
                $attachedDocument='image/Bulk_sms_proposal.pdf';
            smtpMailBills($to, $from, $from_name, $subject, $body,$attachedDocument);    
function smtpMailBills($to, $from, $from_name, $subject, $body,$attachedDocument) {
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
             
 
  $mail->AddAttachment($attachedDocument); // attachment
   
       $mail->SetFrom(GUSER, $from_name);
       $mail->Subject = $subject;
       $mail->Body = $body;
       $mail->AddAddress($to);
       if(!$mail->Send()) {
               $error = 'Mail error: '.$mail->ErrorInfo;
               return  $error;
       } else {
               $error = 'Message sent!';
               return 1;
       }
}
?>
<?php
//require_once '../class.phpmailer.php';

//$mail = new PHPMailer(true); //defaults to using php "mail()"; the true param means it will throw exceptions on errors, which we need to catch
/*
try {
  //$mail->AddReplyTo('name@yourdomain.com', 'First Last');
  $mail->AddAddress('intellibizafrica@gmail.com', 'International Man');
  $mail->SetFrom(GUSER, $from_name);
   $mail->Username = GUSER;  
       $mail->Password = GPWD;  
  //$mail->AddReplyTo('name@yourdomain.com', 'First Last');
  $mail->Subject = 'PHPMailer Test Subject via mail(), advanced';
  $mail->AltBody = 'To view the message, please use an HTML compatible email viewer!'; // optional - MsgHTML will create an alternate automatically
  $mail->MsgHTML(file_get_contents('contents.html'));
  $mail->AddAttachment('image/phpmailer.gif');      // attachment
  $mail->AddAttachment('image/phpmailer_mini.gif'); // attachment
  $mail->Send();
  echo "Message Sent OK</p>\n";
} catch (phpmailerException $e) {
  echo $e->errorMessage(); //Pretty error messages from PHPMailer
} catch (Exception $e) {
  echo $e->getMessage(); //Boring error messages from anything else!
}*/
?>
