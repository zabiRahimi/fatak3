<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;


// use Illuminate\Validation\Validator as ValidationValidator;
use Validator;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
      Schema::defaultStringLength(191);
        // Validator::extend('mobile', function($attribute, $value, $parameters, $validator) {
        //     return preg_match('/^09[0-9]{9}$/', $value);
        //   });
        //   Validator::extend('tel', function($attribute, $value, $parameters, $validator) {
        //     return preg_match('/^0[0-9]{10}$/', $value);
        //   });
        //   Validator::extend('pass', function($attribute, $value, $parameters, $validator) {
        //     return preg_match('/^[A-Za-z0-9_]{1,}$/', $value);
        //   });
        //   Validator::extend('codepost', function($attribute, $value, $parameters, $validator) {
        //     return preg_match('/^[0-9]{5}_?\s?-?[0-9]{5}$/', $value);
        //   });
        //   Validator::extend('codemly', function($attribute, $value, $parameters, $validator) {
        //     return preg_match('/^[0-9]{5}_?\s?-?[0-9]{5}$/', $value);
        //   });
        //   Validator::extend('onlyFarsi', function($attribute, $value, $parameters, $validator) {
        //     return preg_match('/^[\x{0621}-\x{0628}\x{062A}-\x{063A}\x{0641}-\x{0642}\x{0644}-\x{0648}\x{064E}-\x{0651}\x{0655}\x{067E}\x{0686}\x{0698}\x{06A9}\x{06AF}\x{06BE}\x{06CC} \s]+$/u', $value);
        //   });
        //   Validator::extend('farsi', function($attribute, $value, $parameters, $validator) {
        //     return preg_match('/^[\x{0621}-\x{0628}\x{062A}-\x{063A}\x{0641}-\x{0642}\x{0644}-\x{0648}\x{064E}-\x{0651}\x{0655}\x{067E}\x{0686}\x{0698}\x{06A9}\x{06AF}\x{06BE}\x{06CC} \s]{1,}$/u', $value);
        //   });
        //   Validator::extend('name', function($attribute, $value, $parameters, $validator) {
        //     return preg_match('/^[\x{0621}-\x{0628}\x{062A}-\x{063A}\x{0641}-\x{0642}\x{0644}-\x{0648}\x{064E}-\x{0651}\x{0655}\x{067E}\x{0686}\x{0698}\x{06A9}\x{06AF}\x{06BE}\x{06CC} \s]{3,}$/u', $value);
        //   });
        //   Validator::extend('address', function($attribute, $value, $parameters, $validator) {
        //     return preg_match('/^[\p{Arabic}\d?_?،?,?\-?\/?\s?]{2,}$/u', $value);
        //   });
        //   Validator::extend('imgName', function($attribute, $value, $parameters, $validator) {
        //     return preg_match('/^[0-9]{5,}[A-Za-z_\-0-9]{2,}\.[A-Za-z]{2,6}$/', $value);
        //   });
        //   Validator::extend('allAlfaNumber', function($attribute, $value, $parameters, $validator) {
        //     return preg_match('/^[\p{Arabic}a-zA-Z0-9_\-\/\s۰۱۲۳۴۵۶۷۸۹]+$/u', $value);
        //   });
    }
}
