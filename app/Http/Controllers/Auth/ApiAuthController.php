<?php

namespace App\Http\Controllers\Auth;

use App\Contracts\ServiceApiAuth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Configs\RedirectUrlConfig;

class ApiAuthController extends Controller
{
    protected $authService;
    private $redirectUrlConfigs;

    public function __construct(ServiceApiAuth $serviceApiAuth)
    {
        $this->authService = $serviceApiAuth;
        $this->redirectUrlConfigs = new RedirectUrlConfig();
    }

    public function actionLogin(Request $request){
        $credentials = $request->only('name', 'password');
        $ifRemember = $request->only('rememberMe');
        return $this->authService->login($credentials, $ifRemember);
    }

    public function actionLoginRemember(Request $request){
        $params = $request->only('remember_token');
        return $this->authService->loginRemember($params['remember_token']);
    }

    public function actionRegister(Request $request){
        $passport = $request->only('name','email','password','phones','confirmedClient');
        return json_encode($this->authService->register($passport));
    }
    public function actionRepeatVerEmail(Request $request){
        // $server_request = $request->only('api_token');
        $api_token =  $request->bearerToken();
        return json_encode($this->authService->repeatVerification($api_token));
    }

    public function actionEmailVerification($verificationtoken){
        if($this->authService->mail_verification($verificationtoken)){
            return redirect($this->redirectUrlConfigs::ROOT);
        };
        return null;
    }

    public function actionUser(Request $request){
        $api_token =  $request->bearerToken();
        return $this->authService->user($api_token);
    }

    public function actionRoles(Request $request){
        $params = $request->only('api_token');
        return $this->authService->roles($params['api_token']);
    }
    public function actionIsAdmin(Request $request){
        $params = $request->only('api_token');
        return json_encode($this->authService->isAdmin( $params['api_token']));
    }
    public function actionUpdateUser(Request $request){
        $data = $request->only('id','name','email','phones','confirmed_client','email_verified_at', 'new_password','change_pass');
        return json_encode($this->authService->updateUser($data));
    }
}
