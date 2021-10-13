<?php

namespace App\Http\Controllers\Api\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

// use Session;

class CheckSessionController extends Controller
{
    //
    public function check(Request $request)
    {
        return response()->json(
            [
                'data'=>session('captca')
            ]

        ); 
    }
}
