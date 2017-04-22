<?php
restrictaccessMenu();
function restrictaccessMenu(){
if (!isset($_SESSION)) {
  session_start();
}
$MM_authorizedUsers = "";
$MM_donotCheckaccess = "true";

// *** Restrict Access To Page: Grant or deny access to this page
function isAuthorized_menu($strUsers, $strGroups, $UserName, $UserGroup) { 
  // For security, start by assuming the visitor is NOT authorized. 
  $isValid = False; 

  // When a visitor has logged into this site, the Session variable MM_Username set equal to their username. 
  // Therefore, we know that a user is NOT logged in if that Session variable is blank. 
  if (!empty($UserName)) { 
    // Besides being logged in, you may restrict access to only certain users based on an ID established when they login. 
    // Parse the strings into arrays. 
    $arrUsers = Explode(",", $strUsers); 
    $arrGroups = Explode(",", $strGroups); 
    if (in_array($UserName, $arrUsers)) { 
      $isValid = true; 
    } 
    // Or, you may restrict access to only certain users based on their username. 
    if (in_array($UserGroup, $arrGroups)) { 
      $isValid = true; 
    } 
    if (($strUsers == "") && true) { 
      $isValid = true; 
    } 
  } 
  return $isValid; 
}

$MM_restrictGoTo = "../index.php";
if (!((isset($_SESSION['MM_Username'])) && (isAuthorized_menu("",$MM_authorizedUsers, $_SESSION['MM_Username'], $_SESSION['MM_UserGroup'])))) {   
  $MM_qsChar = "?";
  $MM_referrer = $_SERVER['PHP_SELF'];
  if (strpos($MM_restrictGoTo, "?")) $MM_qsChar = "&";
  if (isset($QUERY_STRING) && strlen($QUERY_STRING) > 0) 
  $MM_referrer .= "?" . $QUERY_STRING;
  $MM_restrictGoTo = $MM_restrictGoTo. $MM_qsChar . "accesscheck=" . urlencode($MM_referrer);
  header("Location: ". $MM_restrictGoTo); 
  exit;
}
}
require_once('../Connections/cf4_HH.php');
?><?php
define('GUSER', 'intellibiz.africa.limited@gmail.com'); // Gmail username

//2011agentzl
define('GPWD', 'josephkwatuha'); // Gmail password
require_once('../phpmailer/class.phpmailer.php');
include('../template/functions/menuLinks.php');
//$to='kwatuha@gmail.com';
//smtpMailBills($to, $from, $from_name, $subject, $body,$attachedDocument);
function smtpMailBills($to, $from, $from_name, $subject, $body,$attachedDocument) {
    
    //============================
     $attachedDocument='image/Bulk_sms_proposal.pdf';
       $from_name='Intellibiz Africa Ltd';
       $subject='Bulk SMS Proposal';
$body='Hi,

I hope this finds you well. On behalf of  Intellibiz Africa Limited, I would like to introduce to your organization a communication platform developed to simplify and expedite communication with your clients. The product was first implemented in one branch by  one of our clients in 2013  to communicate billing information to water consumers. The system positively impacted the revenue collection to the extent which they requested us to deploy the system in all of their branches. 

Based on the above outcome, we therefore saw the need as a company to introduce our product to other potential users. 

Intellibiz Africa would be more than happy to to demonstrate the communication system/or install trial version for further review or testing.

We would be glad to partner with your organization in enhancing service delivery.

Your positive response will highly appreciated.

For further details, please contact:
Alfayo Kwatuha 0701-353-976
Ben Koech      0722-747-774

Regards,

Intellibiz Africa Team.';


    
    //=======================
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
       $mail->SetFrom(GUSER, $from_name);
       $mail->AddAttachment($attachedDocument);
       $mail->Subject = $subject;
       $mail->Body = $body;
       $mail->AddAddress($to);//
       if(!$mail->Send()) {
               $error = 'Mail error: '.$mail->ErrorInfo;
               return  $error;
       } else {
               $error = 'Message sent!';
               return 1;
       }
}
?><?php
   //sendBillInformation('kwatuha@gmail.com',5002,'November 2013 Water Bill') ;

function sendBillInformation($handlerId,$email,$connection_number,$message,$emailsubject){

$emailfrom="nzoiawaterservices@gmail.com";
$mailto=$email;
$namefrom="Nzoia Water Services Co";
$emailsubject=$emailsubject;
$emailbody= $message;

$created_by= $_SESSION['my_useridloggened'];
$date_created=date('Y-m-d');

       $reasonFailed= smtpMailBills($mailto, $emailfrom, $namefrom, $emailsubject, $emailbody,$attachedDocument);
		if ($reasonFailed==1) 
    {
			   
         
          saveSentEmails($handlerId,$mailto,$connection_number,$message,$date_created,$created_by);
		}
    else{
          saveFailedEmails($handlerId,$email,$connection_number,$message,$date_created,$created_by,$reasonFailed);
    }
}
sendAllBillsByEmail();
function sendAllBillsByEmail(){
$qry="SELECT emailhandle_id,connection_number, email_address, amount, pay_before,sys_track FROM  sms_emailhandle order by emailhandle_id asc";
	$resultsSelect=mysql_query($qry) or die('Could not execute the query');
	$cntreg_stmnt=mysql_num_rows($resultsSelect);
    //echo $qry;
		if($cntreg_stmnt>0){	
$created_by= $_SESSION['my_useridloggened'];
$date_created=date('Y-m-d');
$uuid=gen_uuid();
$stdcolumnsinster="date_created,voided,uuid";
$stdcolumnsvals="'$date_created','$voided','$uuid'";
				while($rws=mysql_fetch_array($resultsSelect)){
				$count++;
				$emailhandle_id=$rws['emailhandle_id'];
				$ac=$rws['connection_number'];
				$connection_number=$rws['connection_number'];
				$email_address=$rws['email_address'];
				$message=$rws['amount'];
				$billdate=$rws['pay_before'];
				$commtype=trim($rws['sys_track']);
        $emailsubject='Bill Notification For:  Connection No. '.$connection_number.' Due For Payment By '.$billdate;
        //collect email details
          $smsArrayDetails=fillPrimaryData('sms_smsmsgcust',3);
      				$custmsg=$smsArrayDetails['message'];
      				$usecustmsg=trim(strtoupper($smsArrayDetails['status']));
      				 			
      				$messagecut=str_replace('{connectionID}',$connection_number,$custmsg); 
      				$message=str_replace('{amount}',$message,$messagecut);
      				$message=str_replace('{bill_date}',$billdate,$message);
      			      
      			sendBillInformation($emailhandle_id,$email_address,$connection_number,$message,$emailsubject);	
        //
        
        }
        
             
        
  }


}

function saveSentEmails($handlerId,$email_address,$connection_number,$message,$date_created,$created_by){
$uuid=gen_uuid();
$insertSQl= "Insert into sms_processedemail (email_address,connection_number,message,date_created,created_by,uuid) 
        values ('$email_address','$connection_number','$message','$date_created','$created_by','$uuid')";
				
				$results=mysql_query($insertSQl) or die('Could not execute the query');
				  
				//delete from handler
				$deleteSQl= "Delete from  sms_emailhandle where emailhandle_id=$handlerId";
				$results=mysql_query($deleteSQl) or die('Could not execute the query');

}

function saveFailedEmails($handlerId,$email_address,$connection_number,$message,$date_created,$created_by,$reasonFailed){
$uuid=gen_uuid();
$insertSQl= "Insert into sms_processedfailedemail (email_address,connection_number,message,date_created,created_by,uuid,reason_failed) 
        values ('$email_address','$connection_number','$message','$date_created','$created_by','$uuid','$reasonFailed')";
				
				$results=mysql_query($insertSQl) or die('Could not execute the query');
				
				//delete from handler
				$deleteSQl= "Delete from  sms_emailhandle where emailhandle_id=$handlerId";
				$results=mysql_query($deleteSQl) or die('Could not execute the query');

}
?>