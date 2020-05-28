<?php

namespace App\Providers\Custom;

use App\Contracts\ServiceApiProductsTypes;
use App\Services\Main\DBServiceApiProductsTypes;
use Illuminate\Support\ServiceProvider;

class ServiceApiProductTypeProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ServiceApiProductsTypes::class, DBServiceApiProductsTypes::class);
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
