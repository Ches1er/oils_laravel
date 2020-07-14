<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 06.07.2020
 * Time: 14:42
 */

namespace App\Contracts;


interface ServiceApiAuth
{
    public function login(Array $credentials, Array $ifRemember);
    public function loginRemember(string $remember_token);
    public function register(Array $passport);
    public function mail_verification (string $verification_token);
    public function user(string $api_token);
    public function roles(string $api_token);
    public function isAdmin(string $api_token);
    public function updateUser(Array $data);
    public function repeatVerification(string $api_token);
}
