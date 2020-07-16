<?php

namespace App\Providers\Custom;

use App\Contracts\ServiceApiArticles;
use App\Services\Main\DBServiceApiArticles;
use Illuminate\Support\ServiceProvider;

class ServiceApiArticlesProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ServiceApiArticles::class, DBServiceApiArticles::class);
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
