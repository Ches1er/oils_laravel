<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 21.04.2020
 * Time: 15:33
 */

namespace App\Services\Main;


use App\Contracts\ServiceApiGoods;
use App\Models\Goods_oils;
use App\Traits\getObjWithAddProperties;
use App\Traits\getObjWithImagesPath;
use Illuminate\Support\Facades\DB;

class DBServiceApiGoodsService implements ServiceApiGoods
{
    use getObjWithImagesPath;
    use getObjWithAddProperties;

    public function getGoodsOils()
    {
        $goods =  Goods_oils::all();
        $goods = $this->getWithImagePath($goods);
        $goods = $this->getOilsWithAddProperties($goods);
        return $goods;
    }

    public function getGoodsOilsWProp(array $data)
    {
        $goods = DB::table('goods_oils');
        if ($data['brands'][0] !== '')$goods = $goods->whereIn('id_brand', $data['brands']);
        if ($data['volume'][0] !== '')$goods = $goods->whereIn('id_volume', $data['volume']);
        if ($data['viscosity'][0] !== '')$goods = $goods->whereIn('id_viscosity', $data['viscosity']);
        if ($data['api'][0] !== ''){
            $api = DB::table('goods_api')->whereIn('id_api',$data['api'])->get();
            $goods_arr = [];
            foreach ($api as $unit){
                array_push($goods_arr, $unit->id_goods);
            }
            $goods = $goods->whereIn('id', $goods_arr);
        }
        if ($data['acea'][0] !== ''){
            $acea = DB::table('goods_acea')->whereIn('id_acea',$data['acea'])->get();
            $goods_arr = [];
            foreach ($acea as $unit){
                array_push($goods_arr, $unit->id_goods);
            }
            $goods = $goods->whereIn('id', $goods_arr);
        }
        if ($data['mb'][0] !== ''){
            $approvals = DB::table('mb_approval_goods')->whereIn('id_approval',$data['mb'])->get();
            $goods_arr = [];
            foreach ($approvals as $unit){
                array_push($goods_arr, $unit->id_goods);
            }
            $goods = $goods->whereIn('id', $goods_arr);
        }
        if ($data['bmw'][0] !== ''){
            $approvals = DB::table('bmw_approval_goods')->whereIn('id_approval',$data['bmw'])->get();
            $goods_arr = [];
            foreach ($approvals as $unit){
                array_push($goods_arr, $unit->id_goods);
            }
            $goods = $goods->whereIn('id', $goods_arr);
        }
        if ($data['fiat'][0] !== ''){
            $approvals = DB::table('fiat_approval_goods')->whereIn('id_approval',$data['fiat'])->get();
            $goods_arr = [];
            foreach ($approvals as $unit){
                array_push($goods_arr, $unit->id_goods);
            }
            $goods = $goods->whereIn('id', $goods_arr);
        }
        if ($data['ford'][0] !== ''){
            $approvals = DB::table('ford_approval_goods')->whereIn('ford_approval',$data['ford'])->get();
            $goods_arr = [];
            foreach ($approvals as $unit){
                array_push($goods_arr, $unit->id_goods);
            }
            $goods = $goods->whereIn('id', $goods_arr);
        }
        if ($data['ren'][0] !== ''){
            $approvals = DB::table('ren_approval_goods')->whereIn('id_approval',$data['ren'])->get();
            $goods_arr = [];
            foreach ($approvals as $unit){
                array_push($goods_arr, $unit->id_goods);
            }
            $goods = $goods->whereIn('id', $goods_arr);
        }
        if ($data['vw'][0] !== ''){
            $approvals = DB::table('vw_approval_goods')->whereIn('id_approval',$data['vw'])->get();
            $goods_arr = [];
            foreach ($approvals as $unit){
                array_push($goods_arr, $unit->id_goods);
            }
            $goods = $goods->whereIn('id', $goods_arr);
        }
        $goods = $goods->get();
        $result = Goods_oils::hydrate($goods->toArray());
        $result = $this->getWithImagePath($result);
        $result = $this->getOilsWithAddProperties($result);
        return $result;
    }
}
