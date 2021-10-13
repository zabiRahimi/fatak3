<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\User;
use App\Models\Pro;
use App\Models\PicturePro;

use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
    ];
});

$factory->define(Pro::class, function (Faker $faker) {
    return [
        // 'name' => $faker->name,
        // 'email' => $faker->unique()->safeEmail,
        // 'email_verified_at' => now(),
        // 'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        // 'remember_token' => Str::random(10),

             'shop_id'=>1,
            'typePro'=>'ثابت',
            'name'=> $faker->name,
            // 'maker'=> Str::random(10),
            // 'brand'=> Str::random(10),
            // 'model'=> Str::random(10),
            'price'=> rand(100 , 99999),
            'vahed'=> 'عدد',
            'num'=> 1,
            // 'vazn'=> Str::random(10),
            'vaznPost'=> 500,
            'dimension'=> 1,
            // 'pakat'=> Str::random(10),
            // 'dis'=> Str::random(10),
            // 'dateMake'=> Str::random(10),
            // 'dateExpiration'=> Str::random(10),
            // 'term'=> Str::random(10),
            // 'offerOrder'=> Str::random(10),
            // 'bazdid'=> Str::random(10),
            // 'numBuy'=> Str::random(10),
            'date_ad'=> 1575104396,
            'date_up'=> 1575104396,
            'seo'=> 'no',
            'show'=>1,
    ];
});

$factory->define(PicturePro::class, function (Faker $faker) {
    static $number = 1;
    static $number2 = 1;
    static $number3 = 1;
    $i1=rand(1 , 30). '.jpg';
    $i2=rand(1 , 30). '.jpg';
    $i3=rand(1 , 30). '.jpg';
    $i4=rand(1 , 30). '.jpg';
    $i5=rand(1 , 30). '.jpg';
    $i6=rand(1 , 30). '.jpg';
    return [
        // 'name' => $faker->name,
        // 'email' => $faker->unique()->safeEmail,
        // 'email_verified_at' => now(),
        // 'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        // 'remember_token' => Str::random(10),

        'pro_id'=>$number++,
        'pic_b1' =>$number2++ . '.jpg' ,
        'pic_b2'  =>$i1 ,
        'pic_b3'  => $i2,
        'pic_b4'  => $i3,
        'pic_b5' => $i4, 
        'pic_b6' =>$i5 , 
        'pic_s1' => $number3++ . '.jpg', 
        'pic_s2' =>$i1 , 
        'pic_s3' =>$i2, 
        'pic_s4' =>$i3 , 
        'pic_s5' =>$i4 , 
        'pic_s6' =>$i5 , 
        'show' => 1,
        
    ];
});
