<?php

namespace App\Providers;

use App\Providers\Custom\ServiceApiApprovalProvider;
use App\Providers\Custom\ServiceApiBaseProvider;
use App\Providers\Custom\ServiceApiBrandsProvider;
use App\Providers\Custom\ServiceApiGoodsProvider;
use App\Providers\Custom\ServiceApiImagesProvider;
use App\Providers\Custom\ServiceApiMainPropertiesProvider;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(ServiceApiBrandsProvider::class);
        $this->app->register(ServiceApiGoodsProvider::class);
        $this->app->register(ServiceApiMainPropertiesProvider::class);
        $this->app->register(ServiceApiBaseProvider::class);
        $this->app->register(ServiceApiApprovalProvider::class);
        $this->app->register(ServiceApiImagesProvider::class);

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
