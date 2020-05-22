<?php

namespace App\Http\Controllers\Main;

use App\Contracts\ServiceApiBase;
use App\Http\Controllers\Controller;

class ApiBaseController extends Controller
{
    protected $baseService;

    /**
     * ApiAceaController constructor.
     * @param ServiceApiBase $baseService
     */
    public function __construct(ServiceApiBase $baseService)
    {$this->baseService = $baseService;}

    public function actionShowBase(){
        return json_encode($this->baseService->getBase());
    }
}
