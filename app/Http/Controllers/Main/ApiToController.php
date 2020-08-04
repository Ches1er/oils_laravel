<?php

namespace App\Http\Controllers\Main;

use App\Contracts\ServiceApiTo;
use App\Traits\getObjWithImagesPath;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ApiToController extends Controller
{
    protected $toService;


    /**
     * ApiToController constructor.
     * @param $toService
     */
    public function __construct(ServiceApiTo $toService)
    {
        $this->toService = $toService;
    }

    public function actionGetAutos(){
        return json_encode($this->toService->getAutos());
    }
    public function actionGetAuto($id){
        return json_encode($this->toService->getAuto($id));
    }
    public function actionGetAutoGoods($id){
        return json_encode($this->toService->getGoods($id));
    }
    public function actionGetGroups(){
        return json_encode($this->toService->getGroups());
    }
    public function actionGetBrands(){
        return json_encode($this->toService->getBrands());
    }

}
