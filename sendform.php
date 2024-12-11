<?php 
$title = trim($_POST['title']); 
$name = trim($_POST['name']); 
$phone = trim($_POST['phone']); 
$textarea = trim($_POST['textarea']); 

$fromMail = 'http://guys/'; //Почта отправителя (в домене почты должен быть адрес вашего сайта)
$fromName = 'Поступила заявка с сайта Гайз'; //Заголовок письма
$emailTo = 'kud74@ukr.net'; //Ваша почта
$subject = 'Форма обратной связи site.com'; 
$subject = '=?utf-8?b?'. base64_encode($subject) .'?='; 
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n"; 
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n"; 

// Содержимое письма 
$body = "Получено письмо с сайта: $title\nИмя: $name\nТелефон: $phone\О проекте: $textarea"; 

// сообщение будет отправлено в случае, если поле с номером телефона не пустое 
if (strlen($phone) > 0) { 
$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail ); 
return;
} 

?>