<?php

namespace App\Http\Controllers\Main;

use App\Contracts\ServiceApiProductsTypes;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ApiProductsTypesController extends Controller
{
    protected $productTypesService;

    /**
     * ApiProductsTypesController constructor.
     * @param ServiceApiProductsTypes $serviceApiProductsTypes
     */
    public function __construct(ServiceApiProductsTypes $serviceApiProductsTypes)
    {
        $this->productTypesService = $serviceApiProductsTypes;
    }
    public function actionShowProductsTypes(){
        return json_encode($this->productTypesService->getProductsTypes());
    }
    public function actionAddProductType(Request $request){
        $data = $request->only('id','action','name','id_image');
        return json_encode($this->productTypesService->addProductType($data));
    }

}
