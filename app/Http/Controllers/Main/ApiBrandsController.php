<?php

namespace App\Http\Controllers\Main;

use App\Contracts\ServiceApiBrands;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ApiBrandsController extends Controller
{
    protected $brandsService;

    /**
     * ApiBrandsController constructor.
     * @param $brandsService
     */
    public function __construct(ServiceApiBrands $brandsService)
    {
        $this->brandsService = $brandsService;
    }


    public function actionShowBrands(){
        return json_encode($this->brandsService->getBrands());
    }
    public function actionShowBrandsByType($producttypeid){
        return json_encode($this->brandsService->getBrandsByProductType($producttypeid));
    }
    public function actionAddBrand(Request $request) {
        $data = $request->only('id','action','name','id_image','types');
        return json_encode($this->brandsService->addBrand($data));
    }
}
