<?php

namespace App\Providers\Custom;

use App\Contracts\ServiceApiBase;
use App\Services\Main\DBServiceApiBase;
use Illuminate\Support\ServiceProvider;

class ServiceApiBaseProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ServiceApiBase::class, DBServiceApiBase::class);
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
