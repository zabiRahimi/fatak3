<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CaptchaController extends Controller
{
    

  
  
/**
 * از این متد برای استفاده کپچا در ری اکت استفاده می شود
 * این متد هم ایمیج و هم کلید برای استفاده در ای پی آی را ایجاد می کند
 * هنگامی که از ای پی آی استفاده می کنیم  برای احراز کد کپچا که کاربر وارد می کند لازم است در کنار کد کپچای وارد شده توسط کاربر، کلید مربوط به کپچا را نیز ارسال کنیم، قبل از آن باید این کلید ساخته شود که با متد زیر این مهم انجام می شود
 * @return response
 * @return url->img
 * @return url->key for check api captcha
 */
       public function refreshCaptcha()
    {
      return response()->json([
        'status_code' => '200',
        'message' => 'created succeed',
        'url' => app('captcha')->create('default', true)
    ]);
    }
}
