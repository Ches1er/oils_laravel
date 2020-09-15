<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 22.05.2020
 * Time: 10:34
 */

namespace App\Services\Main;


use App\Contracts\ServiceApiMainProperties;
use App\Models\Acea;
use App\Models\Api;
use App\Models\Goods_oils;
use App\Models\Ilsac;
use App\Models\Viscosity;
use App\Models\Volume;

class DBServiceMainProperties implements ServiceApiMainProperties
{

    private function uniqueElementsInArray($array){
        $result = [];
        if (count($array)===0) return $result;
        foreach ($array as $item){
            if (!in_array($item, $result)) array_push($result, $item);
        }
        return $result;
    }
    public function getAcea($definer)
    {
        $acea = [];
        $acea_ids = [];
        if ($definer === 'all') return Acea::all();
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

    public function getApi($definer)
    {
        $api = [];
        $api_ids = [];
        if ($definer === 'all') return Api::all();
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

    public function getViscosity($definer)
    {
        $visc_ids = [];
        if ($definer === 'all') return Viscosity::all();
        $goods = Goods_oils::all();
        foreach ($goods as $good){
            array_push($visc_ids, $good->id_viscosity);
        }
        $visc_ids = $this->uniqueElementsInArray($visc_ids);
        $result = Viscosity::whereIn('id',$visc_ids)->get();
        return $result;
    }

    public function getVolume($definer)
    {
        $volume_ids = [];
        if ($definer === 'all') return Volume::all();
        $goods = Goods_oils::all();
        foreach ($goods as $item){
            array_push($volume_ids, $item->id_volume);
        }
        $volume_ids = $this->uniqueElementsInArray($volume_ids);
        $result = Volume::whereIn('id',$volume_ids)->get();
        return $result;
    }

    public function addVolume(array $data)
    {
        // If exists
        if (Volume::where('volume',$data['volume'])
                ->first() && $data['action']==='add') return ['response'=>'this object exists'];

        // Create-update
        if (Volume::updateOrCreate(['id'=> $data['id']],['volume'=>$data['volume']])){
            if ($data['action']==='update')return ['response'=>'update success'];
            else return ['response'=>'insert success'];
        }
        return ['response'=>'error'];
    }

    public function addViscosity(array $data)
    {
        // If exists
        if (Viscosity::where('name',$data['name'])
                ->first() && $data['action']==='add') return ['response'=>'this object exists'];

        // Create-update
        if (Viscosity::updateOrCreate(['id'=> $data['id']],['name'=>$data['name']])){
            if ($data['action']==='update')return ['response'=>'update success'];
            else return ['response'=>'insert success'];
        }
        return ['response'=>'error'];
    }

    public function addAcea(array $data)
    {
        // If exists
        if (Acea::where('name',$data['name'])
                ->first() && $data['action']==='add') return ['response'=>'this object exists'];

        // Create-update
        if (Acea::updateOrCreate(['id'=> $data['id']],['name'=>$data['name']])){
            if ($data['action']==='update')return ['response'=>'update success'];
            else return ['response'=>'insert success'];
        }
        return ['response'=>'error'];
    }

    public function addApi(array $data)
    {
        // If exists
        if (Api::where('name',$data['name'])
                ->first() && $data['action']==='add') return ['response'=>'this object exists'];

        // Create-update
        if (Api::updateOrCreate(['id'=> $data['id']],['name'=>$data['name']])){
            if ($data['action']==='update')return ['response'=>'update success'];
            else return ['response'=>'insert success'];
        }
        return ['response'=>'error'];
    }

    public function getIlsac($definer)
    {
        $ilsac = [];
        $ilsac_ids = [];
        if ($definer === 'all') return Ilsac::all();
        $goods = Goods_oils::all();
        foreach ($goods as $good){
            $ilsac = array_merge($ilsac, $good->Ilsac());
        }
        foreach ($ilsac as $item){
            array_push($ilsac_ids, $item->id);
        }
        $ilsac_ids = $this->uniqueElementsInArray($ilsac_ids);
        $result = Ilsac::whereIn('id',$ilsac_ids)->get();
        return $result;
    }

    public function addIlsac(array $data)
    {
        // TODO: Implement addIlsac() method.
    }
}
