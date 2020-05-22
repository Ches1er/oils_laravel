<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 06.05.2020
 * Time: 10:59
 */

namespace App\Services\Main;


use App\Contracts\ServiceApiAcea;
use App\Contracts\ServiceApiMainProperties;
use App\Models\Acea;
use App\Models\Api;
use App\Models\Goods_oils;

class DBServiceApiAcea
{

    private function uniqueElementsInArray($array){
        $result = [];
        if (count($array)===0) return $result;
        foreach ($array as $item){
            if (!in_array($item, $result)) array_push($result, $item);
        }
        return $result;
    }
    public function getAcea()
    {
        $acea = [];
        $acea_ids = [];
        $goods = Goods_oils::all();
        foreach ($goods as $good){
            $acea = array_merge($acea, $good->Acea());
        }
        foreach ($acea as $item){
            array_push($acea_ids, $item->id);
        }
        $acea_ids = $this->uniqueElementsInArray($acea_ids);
        $result = Acea::whereIn('id',$acea_ids)->get();
        return $result;
    }

    public function getApi()
    {
        $api = [];
        $api_ids = [];
        $goods = Goods_oils::all();
        foreach ($goods as $good){
            $api = array_merge($api, $good->Api());
        }
        foreach ($api as $item){
            array_push($api_ids, $item->id);
        }
        $api_ids = $this->uniqueElementsInArray($api_ids);
        $result = Api::whereIn('id',$api_ids)->get();
        return $result;
    }

    public function getViscosity()
    {
        // TODO: Implement getViscosity() method.
    }

    public function getVolume()
    {
        // TODO: Implement getVolume() method.
    }
}
