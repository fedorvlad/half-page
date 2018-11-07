<? php
// Файли phpmailer

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'composer\vendor\autoload.php';

if ($_POST)
{
// Змінні print_r($_POST);
$name = $_POST['name'];
$number = $_POST['numbers'];
$email = $_POST['email'];
$message = $_POST['message'];
// Налаштування
$mail = new PHPMailer(TRUE);

$mail->isSMTP(); 
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = TRUE;
$mail->Username = 'fedorvlad'; // Ваш логін в GMAIL.Саме логін, без @gmail.com
$mail->Password = ''; // Ваш пароль
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$mail->CharSet = 'UTF-8';

$mail->setFrom('fedorvlad@gmail.com'); // Ваш Email
$mail->addAddress('if.obti@gmail.com'); // Email отримувача тобто відправляємо самі собі
//$mail->addAddress('example@gmail.com'); // Ще один email, якщо є потреба.

// Долучення файлів
 /*
 for ($ct = 0; $ct < count($_FILES[‘userfile’][‘tmp_name’]); $ct++) {
 $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES[‘userfile’][‘name’][$ct]));
 $filename = $_FILES[‘userfile’][‘name’][$ct];
 if (move_uploaded_file($_FILES[‘userfile’][‘tmp_name’][$ct], $uploadfile)) {
 $mail->addAttachment($uploadfile, $filename);
 } else {
 $msg .= ‘Failed to move file to ‘ . $uploadfile;
 }
 } */
 
// Лист
$mail->isHTML(TRUE);
$mail->Subject = 'Запит з сайту www.alttex.biz'; // Заголовок письма
$mail->Body = 'Імя $name . Телефон $number . Почта $email . Повідомлення $message'; // Текст письма

//$mail->Body = 'Имя $name . Телефон $number . Почта $email'; // Текст письма
//$mail->AltBody = 'Имя $name . Телефон $number . Почта $email'; // Текст письма

//налаштування рівня опису помилки $mail->ErrorInfo
$mail->SMTPDebug = 1;
// Результат

if ($mail->send())
   {
    $answer = 1;
   }
else
   {
   $answer = 0;
   }
}
else
echo 'Post is null';
?>