<?php

namespace App\Http\Controllers\Main;

use App\Contracts\ServiceApiBrands;
use App\Contracts\ServiceApiTo;
use App\Traits\getObjWithImagesPath;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ApiToController extends Controller
{
    protected $toService;
    protected $brandService;

    /**
     * ApiToController constructor.
     * @param ServiceApiTo $toService
     * @param ServiceApiBrands $brandService
     */
    public function __construct(ServiceApiTo $toService, ServiceApiBrands $brandService)
    {
        $this->toService = $toService;
        $this->brandService = $brandService;
    }

    public function actionGetAutos($idmodel){
        return json_encode($this->toService->getAutos($idmodel));
    }
    public function actionGetAuto($id){
        return json_encode($this->toService->getAuto($id));
    }
    public function actionGetAutoGoods($id, $exchange=null){
        return json_encode($this->toService->getGoods($id,$exchange));
    }
    public function actionGetGroups(){
        return json_encode($this->toService->getGroups());
    }
    public function actionGetBrands(){
        return json_encode($this->brandService->getAutoBrands());
    }
    public function actionGetModels($idbrand){
        return json_encode($this->toService->getModels($idbrand));
    }
    public function actionGetExchanges() {
        return json_encode($this->toService->getExchanges());
    }
    public function actionAddExchange(Request $request){
        $data = $request->only('id','name','exchange', 'action');
        return json_encode($this->toService->addExchange($data));
    }
    public function actionAddTo(Request $request){
        $data = $request->only('id','name','id_brand','goods','id_image', 'action', 'is_goods_changes');
        return json_encode($this->toService->addTo($data));
    }
    public function actionAddModel(Request $request){
        $data = $request->only('id','name','id_brand');
        return json_encode($this->toService->addModel($data));
    }

}
