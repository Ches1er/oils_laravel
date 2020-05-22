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
        $data = $request->only('brands','base','api','acea','mb','bmw','fiat','ford','ren','vw','volume','viscosity');
        foreach ($data as &$item){
                $item = explode(',',$item);
        }
        return json_encode($this->goodsService->getGoodsOilsWProp($data));

    }

}
