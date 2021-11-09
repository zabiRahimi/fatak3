<?php

use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\CaptchaValidationController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Auth::routes();
Route::prefix('web')->namespace('App\Http\Controllers\Web')->group(function(){
  
 
  Route::post('/check','CheckSessionController@check');
  Route::get('/refreshCaptcha', 'CaptchaController@refreshCaptcha');
  Route::prefix('authUser')->namespace('Auth')->group(function (){
   /**  
    * وظیفه این روت ایجاد سشن برای ثبت نام است.
    * هنگام ورود کاربر به صفحه ثبت نام این روت فراخوانی می شود
  */
  Route::post('/getMobile','RegisterController@getMobile');
  Route::post('/verifyMobileInitial','RegisterController@verifyMobileInitial');
  Route::post('/updateCodeMobileInitial','RegisterController@updateCodeMobileInitial');
  // Route::get('/register','RegisterController@sessionRegister');
  Route::post('/login','LoginController2@login');
  Route::post('/register','RegisterController@register');
  Route::post('/verifyMobile','RegisterController@verifyMobile');
  // Route::post('/updateVerifyCokeMobile','RegisterController@updateVerifyCokeMobile');

  });
  // Route::post('/login','UserController@login');
  // Route::post('/register','Auth\RegisterController@create');
  // Route::get('/user',function(){
  //   return 'ok';
  // });
  
  
 });
// Route::prefix('web')->namespace('App\Http\Controllers\Api\Web')->group(function(){
    
//     Route::post('/check','CheckSessionController@check');
//     Route::get('/refreshCaptcha', 'CaptchaController@refreshCaptcha');
//     Route::prefix('authUser')->namespace('Auth\User')->group(function (){
//     Route::post('/login','LoginController@login');
//     Route::post('/register','RegisterController@register');
//     });
    // Route::post('/login','UserController@login');
    // Route::post('/register','Auth\RegisterController@create');
    // Route::get('/user',function(){
    //   return 'ok';
    // });
  //   Route::middleware('auth:api')->group(function(){
  //     Route::get('/user',function(){
  //       return auth()->user();
  //     });
  //   });
    
  //  });
// Route::get('/captcha21', [CaptchaValidationController::class, 'index']);
// Route::post('captcha-validation', [CaptchaValidationController::class, 'capthcaFormValidate']);
// Route::get('/reload-captcha', [CaptchaValidationController::class, 'reloadCaptcha']);

Route::get('/', 'App\Http\Controllers\HomeController@index')->name('home');
Route::resource('/pros','ProController');