<?php

namespace App\Providers\Custom;

use App\Contracts\ServiceApiAuth;
use App\Services\Auth\DBServiceApiAuth;
use Illuminate\Support\ServiceProvider;

class ServiceApiAuthProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ServiceApiAuth::class, DBServiceApiAuth::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
