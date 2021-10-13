<?php

namespace App\Http\Controllers\Api\V1\Auth\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Http\Resources\v1\User as UserResource;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $dataValdate= $this-> validate($request,[
            'email' => ['required','email','exists:users'],
            'password'=>['required']
        ]);
        
        if (! Auth::attempt($dataValdate)) {
            
            return response([
                'data' =>[
                    'massage'=>'رمز عبور اشتباه است.'
                ],
                'status' =>'error'
            ],403);
        }
        return new UserResource(Auth::user());
    }
}
