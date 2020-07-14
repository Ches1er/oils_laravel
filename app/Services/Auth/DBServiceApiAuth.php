<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 06.07.2020
 * Time: 14:43
 */

namespace App\Services\Auth;


use App\Contracts\ServiceApiAuth;
use App\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\UserResource;
use Illuminate\Support\Str;


class DBServiceApiAuth implements ServiceApiAuth
{
    private function apiToken(User $user){

        $header = json_encode((object)['alg'=>'HS256', 'typ'=>'JWT']);
        $payload = json_encode((object)['roles'=>$user->Roles()]);
        $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
        $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));
        // $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, 'secret', true);
        $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, $user->name, true);
        $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
        return $base64UrlHeader.'.'.$base64UrlPayload.'.'.$base64UrlSignature;
    }

    public function login(Array $credentials, Array $ifRemember)
    {
        if (Auth::attempt($credentials)) {
            $remember = $ifRemember['rememberMe']==='true'?true:false;
            $user = User::where('name',$credentials['name'])->first();
            $api_token = $this->apiToken($user);
            if ($remember){
                $remember_token = Str::random(20);
                $user->update(['api_token'=>$api_token,'remember_token'=>$remember_token]);
                return json_encode(new UserResource($user));
            }
            else {
                $user->update(['api_token'=>$api_token,'remember_token'=>null]);
                return json_encode(new UserResource($user));
            }
        }
        return json_encode(['error'=>'Ошибка! Логин или пароль введены неверно!']);
    }

    public function loginRemember(string $remember_token)
    {
        $user = User::where('remember_token',$remember_token)->first();
        if (!empty($user)) {
            return json_encode(new UserResource($user));
        }
        return null;
    }

    public function register(Array $passport)
    {
        // TODO: Implement register() method.
    }

    public function mail_verification(string $verification_token)
    {
        // TODO: Implement mail_verification() method.
    }

    public function user(string $api_token)
    {
        if (!$api_token) return null;
        $user = User::where('api_token',$api_token)->first();
        if (empty($user)) return null;
        return json_encode($user);
    }

    public function roles(string $api_token)
    {
        if (!$api_token) return null;
        $user = User::where('api_token',$api_token)->first();
        if (empty($user)) return null;
        $user_roles = $user->Roles();
        if (count($user_roles) === 0) $user_roles[0] = 'empty';
        return json_encode($user_roles);
    }


    public function isAdmin(string $api_token)
    {
        $roles =  json_decode($this->roles($api_token));
        if (!$roles)return ['response'=>false];
        if (in_array('admin',$roles)) return ['response'=>true];
        return ['response'=>false];
    }

    public function updateUser(Array $data)
    {
        // TODO: Implement updateUser() method.
    }

    public function repeatVerification(string $api_token)
    {
        // TODO: Implement repeatVerification() method.
    }
}
