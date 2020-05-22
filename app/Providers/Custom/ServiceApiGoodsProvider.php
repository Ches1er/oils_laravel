<?php

namespace App\Providers\Custom;

use App\Contracts\ServiceApiGoods;
use App\Services\Main\DBServiceApiGoodsService;
use Illuminate\Support\ServiceProvider;

class ServiceApiGoodsProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ServiceApiGoods::class, DBServiceApiGoodsService::class);
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
