<?php

namespace App\Providers\Custom;

use App\Contracts\ServiceApiMainProperties;
use App\Services\Main\DBServiceApiAcea;
use Illuminate\Support\ServiceProvider;

class ServiceApiAceaProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        // $this->app->bind(ServiceApiMainProperties::class, DBServiceApiAcea::class);
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
