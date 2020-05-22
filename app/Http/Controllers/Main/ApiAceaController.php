<?php

namespace App\Http\Controllers\Main;

use App\Contracts\ServiceApiMainProperties;
use App\Http\Controllers\Controller;

class ApiAceaController extends Controller
{
    protected $aceaService;

    /**
     * ApiAceaController constructor.
     * @param ServiceApiMainProperties $aceaService
     */
    public function __construct(ServiceApiMainProperties $aceaService)
    {$this->aceaService = $aceaService;}


    public function actionShowAcea(){
        return json_encode($this->aceaService->getAcea());
    }

    public function actionShowApi(){
        return json_encode($this->aceaService->getApi());
    }


}
