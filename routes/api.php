<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Monolog\Handler\RotatingFileHandler;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
// این گروه از روتها فقط برای وب استفاده می شود
Route::prefix('web')->namespace('App\Http\Controllers\Api\Web')->group(function(){
  Route::post('/rahimi',function(){
    return 'ok';
  });
 
  Route::post('/check','CheckSessionController@check');
  Route::get('/refreshCaptcha', 'CaptchaController@refreshCaptcha');
  Route::prefix('authUser')->namespace('Auth')->group(function (){
   /**  
    * وظیفه این روت ایجاد سشن برای ثبت نام است.
    * هنگام ورود کاربر به صفحه ثبت نام این روت فراخوانی می شود
  */
  Route::post('/getMobile','RegisterController2@getMobile');
  Route::get('/register','RegisterController2@sessionRegister');
  Route::post('/login','LoginController2@login');
  Route::post('/register','RegisterController2@register');
  Route::post('/verifyMobile','RegisterController2@verifyMobile');
  Route::post('/updateVerifyCokeMobile','RegisterController2@updateVerifyCokeMobile');

  });
  // Route::post('/login','UserController@login');
  // Route::post('/register','Auth\RegisterController@create');
  // Route::get('/user',function(){
  //   return 'ok';
  // });
  Route::middleware('auth:api')->group(function(){
    Route::get('/user',function(){
      return auth()->user();
    });
  });
  
 });
Route::prefix('v1')->namespace('App\Http\Controllers\Api\V1')->group(function(){

  Route::prefix('authUser')->namespace('Auth\User')->group(function (){

  Route::post('/login','LoginController@login');
  Route::post('/register','RegisterController@create');
  });
  // Route::post('/login','UserController@login');
  // Route::post('/register','Auth\RegisterController@create');
  // Route::get('/user',function(){
  //   return 'ok';
  // });
  Route::middleware('auth:api')->group(function(){
    Route::get('/user',function(){
      return auth()->user();
    });
  });
  
 });
