<?php

namespace App\Providers\Custom;

use App\Contracts\ServiceApiBrands;
use App\Services\Main\DBServiceApiBrandsApiService;
use Illuminate\Support\ServiceProvider;

class ServiceApiBrandsProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ServiceApiBrands::class, DBServiceApiBrandsApiService::class);
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
