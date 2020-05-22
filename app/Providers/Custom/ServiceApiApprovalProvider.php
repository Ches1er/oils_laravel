<?php

namespace App\Providers\Custom;

use App\Contracts\ServiceApiApprovals;
use App\Services\Main\DBServiceApiApprovals;
use Illuminate\Support\ServiceProvider;

class ServiceApiApprovalProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ServiceApiApprovals::class, DBServiceApiApprovals::class);
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
