<?php
namespace app\mail\sender;

use Yii;
use yii\swiftmailer\Mailer;

class SenderMail extends Mailer
{
    public static $mail_from = 'test@test.com';

    public static function sendEmailMessages($email, $subject, $message)
    {
       return Yii::$app->mailer->compose()
            ->setFrom(self::$mail_from)
           ->setReplyTo(self::$mail_from)
            ->setTo($email)
           ->setSubject($subject)
           ->setHtmlBody($message)
            ->send();
    }

}
    