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
use App\Models\To_model;
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

    public function getAutos($idmodel)
    {
        if ($idmodel === 'all') {
            $autos =  To_auto::all();
            return $this->getWithImagePath($autos);
        }
        $autos =  To_auto::where('id_model',$idmodel)->get();
        return $this->getWithImagePath($autos);
    }

    public function getGoods($id_auto, $exchange=null)
    {
        $auto = To_auto::where('id',$id_auto)->get();
        $goods = $auto[0]->goods();
        $this->getExchangesFromPBApi();
        return $this->getToObjWProp($goods, $exchange);
    }

    // Update Exchanges from Privatbank API

    private function getExchangesFromPBApi(){
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "Cache-Control: no-cache",
            ),
        ));
        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if ($err) {
            return "cURL Error #:" . $err;
        } else {
            $this->updateExchanges(json_decode($response));
            return true;
        }
    }
    private function updateExchanges($exch_array){
        foreach ($exch_array as $e){
            if ($e->ccy === 'USD') To_price_exchange::where('name','usd')->update(['exchange'=>$e->sale]);
            if ($e->ccy === 'EUR') To_price_exchange::where('name','euro')->update(['exchange'=>$e->sale]);
        }
    }


    public function getGroups()
    {
        return To_groups::all();
    }

    public function getBrands()
    {
        // todo
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
        if ($auto = To_auto::updateOrCreate(['id'=> $data['id']],[
            'name'=>$data['name'],
            'id_brand'=>(int)$data['id_brand'],
            'id_image'=>(int)$data['id_image']
        ])){
            if ($data['action']==='update' && $data['is_goods_changes']==='false'){
                return ['response'=>'update success'];
            }
            if ($data['action']==='update' && $data['is_goods_changes']==='true'){
                To_auto_goods::where('id_auto', $data['id'])->delete();
                if (strlen($data['goods']) === 0) return ['response'=>'update success'];
                $goods_ids_array = $this->addGoods($data['goods']);
                array_map(function ($e) use ($data){
                    To_auto_goods::create(['id_auto'=>$data['id'],'id_goods'=>$e]);
                },$goods_ids_array);
                return ['response'=>'update success'];
            }
            if ($data['action']!=='update' && $data['goods']){
                $goods_ids_array = $this->addGoods($data['goods']);
                array_map(function ($e)use ($data, $auto){
                    To_auto_goods::create(['id_auto'=>$auto->id,'id_goods'=>$e]);
                },$goods_ids_array);
                return ['response'=>'insert success'];
            } else {
                return ['response'=>'insert success'];
            }
        }
        return ['response'=>'error'];
    }

    private function addGoods(string $data)
    {
        $ids = [];
        $goods_str_arr = explode(';', $data);
        $goods_arr = [];
        foreach ($goods_str_arr as $unit){
            $goods_arr[] = json_decode($unit);
        }
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

    public function getModels($idbrand)
    {
        if ($idbrand === 'all') return To_model::all();
        $models = To_model::where('id_brand', $idbrand)->get();
        return $models;
    }

    public function addModel(array $data)
    {
        if (To_model::where('name',$data['name'])
                ->first() && $data['action']==='add') return ['response'=>'this object exists'];

        // Create-update
        if ($model = To_model::updateOrCreate(['id'=> $data['id']],[
            'name'=>$data['name'],
            'id_brand'=>(int)$data['id_brand']
        ])){
            if ($data['action']==='update'){
                return ['response'=>'update success'];
            } else {
                return ['response'=>'insert success'];
            }
        }
        return ['response'=>'error'];
    }
}
