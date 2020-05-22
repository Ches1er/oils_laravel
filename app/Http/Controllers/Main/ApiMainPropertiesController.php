<?php
namespace App\Http\Controllers\Main;

use App\Contracts\ServiceApiMainProperties;
use App\Http\Controllers\Controller;

class ApiMainPropertiesController extends Controller {
    protected $mainPropService;

    /**
     * ApiMainPropertiesController constructor.
     * @param ServiceApiMainProperties $mainPropService
     */
    public function __construct(ServiceApiMainProperties $mainPropService)
    {
        $this->mainPropService = $mainPropService;
    }

    public function actionShowAcea(){
        return json_encode($this->mainPropService->getAcea());
    }

    public function actionShowApi(){
        return json_encode($this->mainPropService->getApi());
    }
    public function actionShowViscosity(){
        return json_encode($this->mainPropService->getViscosity());
    }
    public function actionShowVolume(){
        return json_encode($this->mainPropService->getVolume());
    }

}
