<?php

namespace App\Http\Controllers\Main;

use App\Contracts\ServiceApiGoods;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ApiGoodsController extends Controller
{

    protected $goodsService;

    /**
     * ApiGoodsController constructor.
     * @param ServiceApiGoods $goodsService
     */
    public function __construct(ServiceApiGoods $goodsService)
    { $this->goodsService = $goodsService;
    }
    public function actionGetGoodsOils(){
        return json_encode($this->goodsService->getGoodsOils());
    }
    public function actionGetGoodsOilsWProp(Request $request){
        $data = $request->only('brands','base','api','acea', 'ilsac',
            'mb','bmw','fiat','ford', 'ren','vw','porsche',
            'gm','koenig', 'chrysler','psa', 'volvo',
            'jaguar','jaso','mazda', 'nissan',
            'volume','viscosity');
        foreach ($data as &$item){
                $item = explode(',',$item);
        }
        return json_encode($this->goodsService->getGoodsOilsWProp($data));
    }
    public function actionAddGoodsOil(Request $request){
        $data = $request->only('action', 'id', 'name', 'art', 'id_volume', 'id_viscosity', 'id_base', 'id_brand',
            'id_image','short_desc','full_desc','acea','api','ilsac','mbApproval','bmwApproval','fiatApproval','fordApproval',
            'renApproval', 'vwApproval', 'porscheApproval', 'gmApproval', 'koenigApproval', 'chryslerApproval',
            'psaApproval', 'volvoApproval', 'jaguarApproval', 'jasoApproval', 'mazdaApproval', 'nissanApproval');
        return json_encode($this->goodsService->addGoodsOil($data));
    }
    public function actionGetGoodsUnit($id, $table_definer){
        return json_encode($this->goodsService->getGoodsUnit($id, $table_definer));
    }
    public function actionFindGoods($keyword){
        return json_encode($this->goodsService->findGoods($keyword));
    }
    public function actionGetGoodsOilsByBrand($brandid){
        return json_encode($this->goodsService->getGoodsOilsByBrand($brandid));
    }
}
