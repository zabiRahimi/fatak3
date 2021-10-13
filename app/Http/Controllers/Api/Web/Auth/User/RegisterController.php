<?php

namespace App\Http\Controllers\Api\Web\Auth\User;


use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use App\Models\VerifyCodeMobile;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

use App\Rules\UserName;
use App\Rules\Name;
use App\Rules\Mobile;
use App\Rules\Pass;
use Exception;
use Mews\Captcha;
use Throwable;

class RegisterController extends Controller
{

    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    // use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    // protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('guest:shop');
        // $this->middleware('guest');
    }

    
    public function sessionRegister(Request $request)
    {
        if($request->session()->has('register')) {
            return  response()->json(['register'=> 'has session']);
        }
    //    session(['register'=> now()]);
       $val =session('register' ,'zabi');
       
        return  response()->json(['register'=> $val]);
    }

    /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {

        $this->validator($request->all())->validate();
        // این شرط برای این است که اطمسنان حاصل کنیم که کاربر دکمه ثبت فرم را انتخاب کردن و همه فیلدها احراز شده باشن و نه فقط یک فیلد احراز شده باشد، البته می توان بغیر از این دو فیلد دو یا چند فیلد دیگر را داخل شرط گذاشت
        if ($request->userName && $request->captcha) {

            try {
                DB::beginTransaction();
                $user = $this->create($request->all());
                $createVerifyCodeMobile=$this->createVerifyCodeMobile($user);
                DB::commit();
                
            } catch (Exception $e) {
                DB::rollBack();
                $user = false;
            }
            

            if ( !empty($user) ) {
                Auth::login($user);

                // Auth::guard('api')->login($user);
                // Auth::guard('api')->attempt($user);
                // Auth::guard('web')->login($user);

                // $model = new VerifyCodeMobile();
                // $model->sendCode();
                // event(new Registered($user = $this->create($request->all())));
                // $this->guard('web')->login($user);

                // // // return $this->registered($request, $user)
                // // //                 ?: redirect($this->redirectPath());
                // // return $this->registered($request, $user)
                // //                 ?: response()->json(['user'=> $user]);
                // }
                
                 return  response()->json(['user_id'=> $user->id , 'code'=> $createVerifyCodeMobile->code]);
            } else {
                return response()->json([], 500);
            }
            // // // $this->guard('shop')->login($user);

            // // // return $this->registered($request, $user)
            // // //                 ?: redirect($this->redirectPath());
            // // return $this->registered($request, $user)
            // //                 ?: response()->json(['user'=> $user]);
            // }
        }
    }



    /**
     * The user has been registered.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function registered(Request $request, $user)
    {
        //
    }
    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        (!empty($data['id'])) ? $id = ',' . $data['id'] : $id = ',';
        (!empty($data['key'])) ? $key = $data['key'] : $key = null;
        return Validator::make($data, [
            'userName' => ['sometimes', 'required',new UserName(),'unique:users,user_name'],
            'mobile' => ['sometimes', 'required', new Mobile, 'unique:users,mobile' . $id],
            'pass' => ['sometimes', 'required', new Pass],
            'captcha' => ['sometimes', 'required', 'captcha_api:' . $key],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'user_name' => $data['userName'],
            'mobile' => $data['mobile'],
            'password' => Hash::make($data['pass']),
            'api_token' => Str::random(100),
            // 'date_ad' => time(),
            // 'date_up' => time(),
            // 'stage'=>'1',
            // 'show' => '1',
        ]);
    }
    public function verifyMobile (Request $request){
        $this->validatorVerifyCodeMobile($request->all())->validate();
        if($request->code && $request->captcha){
           return $this->checkCodeMobile($request->all());
        }
    }
    protected function createVerifyCodeMobile($user)
    {
        return VerifyCodeMobile::create([
            'user_id' => $user->id,
            'mobile' => $user->mobile,
        ]);
    }
    protected function updateVerifyCokeMobile(Request $request){
        $model = new VerifyCodeMobile();
        $newCode=$model->generateCode();
       $dataAll= VerifyCodeMobile::where('user_id', $request->user_id)
      ->update(['code' =>$newCode]);
    //   $newCode->sendCode();
    if (!empty($dataAll)) {
        return  response()->json([ 'code'=> $newCode]);
    }
    }
    protected function validatorVerifyCodeMobile(array $data)
    {
        (!empty($data['key'])) ? $key = $data['key'] : $key = null;
        return Validator::make($data, [
            'user_id' => [ 'sometimes','required'],
            'code'=> ['sometimes', 'required', 'min:4'],
            'captcha' => ['sometimes', 'required', 'captcha_api:' . $key],
        ]);
    }

    protected function checkCodeMobile(array $data)
    {
        $code=VerifyCodeMobile::where('user_id',$data['user_id'])->first();
        if($code['code']==$data['code']){
            return true;
        }
        return response()->json(['message'=>'The given data was invalid.','errors'=>['codeVerify'=>'کد وارد شده معتبر نیست.']],422);
    }
    // public function reloadCaptcha()
    // {
    //     return response()->json(['captcha'=> captcha_img()]);
    // }
}
