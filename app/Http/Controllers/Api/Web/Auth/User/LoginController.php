<?php

namespace App\Http\Controllers\Api\Web\Auth\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use App\Models\VerifyCodeMobile;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

use App\Rules\Name;
use App\Rules\Mobile;
use App\Rules\Pass;
use Exception;
use Mews\Captcha;
use Throwable;

class LoginController extends Controller
{
    public function logout(){

    }
}
