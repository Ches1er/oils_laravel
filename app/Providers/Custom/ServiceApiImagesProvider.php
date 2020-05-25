<?php

namespace App\Providers\Custom;

use App\Contracts\ServiceApiImages;
use App\Services\Main\DBServiceApiImages;
use Illuminate\Support\ServiceProvider;

class ServiceApiImagesProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ServiceApiImages::class, DBServiceApiImages::class);
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
