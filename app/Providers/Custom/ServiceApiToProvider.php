<?php

namespace App\Providers\Custom;

use App\Contracts\ServiceApiTo;
use App\Services\Main\DBServiceApiTo;
use Illuminate\Support\ServiceProvider;

class ServiceApiToProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ServiceApiTo::class, DBServiceApiTo::class);
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
