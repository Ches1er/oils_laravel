<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 03.08.2020
 * Time: 15:52
 */

namespace App\Services\Main;


use App\Contracts\ServiceApiTo;
use App\Models\Brand;
use App\Models\Image;
use App\Models\To_auto;
use App\Models\To_auto_goods;
use App\Models\To_goods;
use App\Models\To_groups;
use App\Models\To_price_exchange;
use App\Traits\getObjWithImagesPath;
use App\Traits\getToObjWithAddProperties;

class DBServiceApiTo implements ServiceApiTo
{
    use getObjWithImagesPath;
    use getToObjWithAddProperties;
    public function getAuto($id)
    {
        $autos =  To_auto::where('id',$id)->get();
        return $this->getWithImagePath($autos);

    }

    public function getAutos($idbrand)
    {
        if ($idbrand === 'all') {
            $autos =  To_auto::all();
            return $this->getWithImagePath($autos);
        }
        $autos =  To_auto::where('id_brand',$idbrand)->get();
        return $this->getWithImagePath($autos);
    }

    public function getGoods($id_auto, $exchange)
    {
        $auto = To_auto::where('id',$id_auto)->get();
        $goods = $auto[0]->goods();
        return $this->getToObjWProp($goods, $exchange);
    }

    public function getGroups()
    {
        return To_groups::all();
    }

    public function getBrands()
    {
        $autos =  To_auto::all();
        $brand_ids = [];
        foreach ($autos as $auto){
            array_push($brand_ids, $auto->id_brand);
        }
        return Brand::whereIn('id',$brand_ids)->get();
    }

    public function addExchange(array $data)
    {
        // Create-update
        if (To_price_exchange::updateOrCreate(['id'=> $data['id']],['name'=>$data['name'],
            'exchange'=>$data['exchange']])){
            if ($data['action']==='update')return ['response'=>'update success'];
            else return ['response'=>'insert success'];
        }
        return ['response'=>'error'];
    }

    public function addTo(array $data)
    {
        // If has no image
        if (!$data['id_image']){
            $default_image = Image::where('name','default')->first();
            $data['id_image'] = $default_image->id;
        }

        if (To_auto::where('name',$data['name'])
                ->first() && $data['action']==='add') return ['response'=>'this object exists'];

        // Create-update
        if (To_auto::updateOrCreate(['id'=> $data['id']],[
            'name'=>$data['name'],
            'id_brand'=>(int)$data['id_brand'],
            'id_image'=>(int)$data['id_image']
        ])){
            if ($data['action']==='update' && $data['is_goods_changes']==='false'){
                return ['response'=>'update success'];
            }
            if ($data['action']==='update' && $data['is_goods_changes']==='true'){
                $goods_ids_array = $this->addGoods($data['goods']);
                To_auto_goods::where('id_auto', $data['id'])->delete();
                array_map(function ($e) use ($data){
                    To_auto_goods::create(['id_auto'=>$data['id'],'id_goods'=>$e]);
                },$goods_ids_array);
                return ['response'=>'update success'];
            }
            if ($data['action']==='create'){
                $goods_ids_array = $this->addGoods($data['goods']);
                array_map(function ($e,$data){
                    To_auto_goods::create(['id_auto'=>$data['id'],'id_goods'=>$e]);
                },$goods_ids_array);
                return ['response'=>'insert success'];
            }
        }
        return ['response'=>'error'];
    }

    private function addGoods(string $data)
    {
        $goods_str_arr = explode(';', $data);
        $goods_arr = [];
        foreach ($goods_str_arr as $unit){
            array_push($goods_arr, json_decode($unit));
        }
        $ids = [];
        array_map(function ($e) use (&$ids){
            $obj = To_goods::updateOrCreate(['id' => $e->pId],[
                'name'=>$e->pName,
                'price'=>(int)$e->pPrice,
                'cat_number'=>$e->pCatNumber,
                'id_group'=>$e->pIdGroup,
                'id_exchange'=>$e->pIdExchange
            ]);
            $ids[]=$obj->id;
        },$goods_arr);
        return $ids;
    }

    public function getExchanges()
    {
        $exchanges = To_price_exchange::all();
        return $exchanges;
    }
}
