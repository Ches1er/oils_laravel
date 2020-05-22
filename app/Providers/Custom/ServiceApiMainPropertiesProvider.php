<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 22.05.2020
 * Time: 10:36
 */

namespace App\Providers\Custom;
use App\Contracts\ServiceApiMainProperties;
use App\Services\Main\DBServiceMainProperties;
use Illuminate\Support\ServiceProvider;


class ServiceApiMainPropertiesProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ServiceApiMainProperties::class, DBServiceMainProperties::class);
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
