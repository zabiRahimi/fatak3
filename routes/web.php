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