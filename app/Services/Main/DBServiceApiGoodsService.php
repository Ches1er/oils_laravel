<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 21.04.2020
 * Time: 15:33
 */

namespace App\Services\Main;


use App\Contracts\ServiceApiGoods;
use App\Models\Goods_acea;
use App\Models\Goods_api;
use App\Models\Goods_ilsac;
use App\Models\Goods_oils;
use App\Models\Image;
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
        if ($data['ilsac'][0] !== ''){
            $ilsac = DB::table('goods_ilsac')->whereIn('id_ilsac',$data['ilsac'])->get();
            $goods_arr = [];
            foreach ($ilsac as $unit){
                array_push($goods_arr, $unit->id_goods);
            }
            $goods = $goods->whereIn('id', $goods_arr);
        }

        // Approvals
        foreach ($this->approvalsArray as $item){
            if ($data[$item][0]!== ''){
                $table = $item.'_approval_goods';
                $approvals = DB::table($table)->whereIn('id_approval',$data[$item])->get();
                $goods_arr = [];
                foreach ($approvals as $unit){
                    array_push($goods_arr, $unit->id_goods);
                }
                $goods = $goods->whereIn('id', $goods_arr);
            }
        }
        $goods = $goods->get();
        $result = Goods_oils::hydrate($goods->toArray());
        $result = $this->getWithImagePath($result);
        $result = $this->getOilsWithAddProperties($result);
        return $result;
    }

    public function addGoodsOil(array $data)
    {
        // If has no image
        if (!$data['id_image']){
            $default_image = Image::where('name','default')->first();
            $data['id_image'] = $default_image->id;
        }
        // If exists
        if (Goods_oils::where('name',$data['name'])
                ->first() && $data['action']==='add') return ['response'=>'this object exists'];

        if (Goods_oils::updateOrCreate(['id'=> $data['id']],[
            'name'=>$data['name'],
            'id_image'=>(int)$data['id_image'],
            'art' => $data['art'],
            'id_volume' => (int)$data['id_volume'],
            'id_viscosity' => (int)$data['id_viscosity'],
            'id_base' => (int)$data['id_base'],
            'id_brand' => (int)$data['id_brand'],
            'short_desc' => $data['short_desc'],
            'full_desc' => $data['full_desc'],
        ])){
            // Update
            if ($data['action']==='update'){
                $this->aceaApiIlsacWhenUpdate($data['id'],$data['api'], $data['acea'], $data['ilsac']);
                $this->approvalsUpdate($data);
                return ['response'=>'update success'];
            }
            // Add
            $oil = Goods_oils::where('name', $data['name'])->first();
            $this->aceaApiIlsacWhenAdd($oil->id, $data['api'], $data['acea'], $data['ilsac']);
            $app_server_resp = $this->approvalsAdd($oil->id,$data);
            // if ($app_server_resp) return $app_server_resp;
            return ['response'=>'insert success'];
        }
        return ['response'=>'error'];
    }

    private function approvalsUpdate(array $data){
        foreach ($this->approvalsArray as $ar){
            $req = $ar.'Approval';
            $table = $ar.'_approval_goods';
            if ($data[$req]!=='null'){
                DB::table($table)->where('id_goods',$data['id'])->delete();
                $new_approvals = explode(',', $data[$req]);
                foreach ($new_approvals as $na){
                    DB::table($table)->insert(['id_goods'=>$data['id'], 'id_approval'=>$na]);
                }
            }
        }
    }
    private function approvalsAdd($id, array $data){
        foreach ($this->approvalsArray as $ar){
            $req = $ar.'Approval';
            $table = $ar.'_approval_goods';
            if ($data[$req]!=='null'){
                $new_approvals = explode(',', $data[$req]);
                foreach ($new_approvals as $na){
                    try {
                        DB::table($table)->insert(['id_goods' => $id, 'id_approval' => $na]);
                    } catch (\Exception $e) {
                        return response()->json(['error' => $e->getMessage()], 500);
                    }
                }
            }
        }
    }
    private function aceaApiIlsacWhenAdd($id, $api, $acea, $ilsac){
        $new_acea = explode(',', $acea);
        $new_api = explode(',', $api);
        $new_ilsac = explode(',', $ilsac);
        foreach ($new_acea as $na) {
            Goods_acea::create(['id_acea' => $na, 'id_goods'=>$id]);
        }
        foreach ($new_api as $na) {
            Goods_api::create(['id_api' => $na, 'id_goods'=>$id]);
        }
        foreach ($new_ilsac as $ni) {
            Goods_ilsac::create(['id_ilsac' => $ni, 'id_goods'=>$id]);
        }
    }

    private function aceaApiIlsacWhenUpdate($id, $api, $acea, $ilsac){
        Goods_acea::where('id_goods', $id)->delete();
        Goods_api::where('id_goods', $id)->delete();
        Goods_ilsac::where('id_goods', $id)->delete();
        $new_acea = explode(',', $acea);
        $new_api = explode(',', $api);
        $new_ilsac = explode(',', $ilsac);
        foreach ($new_acea as $na) {
            Goods_acea::create(['id_acea' => $na, 'id_goods'=>$id]);
        }
        foreach ($new_api as $na) {
            Goods_api::create(['id_api' => $na, 'id_goods'=>$id]);
        }
        foreach ($new_ilsac as $ni) {
            Goods_ilsac::create(['id_ilsac' => $ni, 'id_goods'=>$id]);
        }
    }

    public function getGoodsOil($oilid)
    {
        $result = Goods_oils::where('id', (int)$oilid)->get();
        $result = $this->getWithImagePath($result);
        return $this->getOilsWithAddProperties($result);
    }

    public function findGoods($keyword)
    {
        $goods = DB::table('goods_oils')->select(['id', 'name'])->where('name','like','%'.$keyword.'%')->get();
        $goods = $this->addTableDefiner($goods, 'goods_oils');
        return $goods;
    }

    public function getGoodsUnit($id, $table_definer)
    {
        $goods = DB::table($table_definer)->where('id',$id)->get();
        if ($table_definer === 'goods_oils'){
            $result = Goods_oils::hydrate($goods->toArray());
            $result = $this->getWithImagePath($result);
            $result = $this->getOilsWithAddProperties($result);
            return $result;
        }
    }

    public function getGoodsOilsByBrand($brandid)
    {
        $goods =  Goods_oils::where('id_brand',$brandid)->get();
        $goods = $this->getWithImagePath($goods);
        $goods = $this->getOilsWithAddProperties($goods);
        return $goods;
    }
}












/* Old approvals
 /*if ($data['mb'][0] !== ''){
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
        if ($data['porsche'][0] !== ''){
            $approvals = DB::table('porsche_approval_goods')->whereIn('id_approval',$data['porsche'])->get();
            $goods_arr = [];
            foreach ($approvals as $unit){
                array_push($goods_arr, $unit->id_goods);
            }
            $goods = $goods->whereIn('id', $goods_arr);
        }
        if ($data['gm'][0] !== ''){
            $approvals = DB::table('gm_approval_goods')->whereIn('id_approval',$data['gm'])->get();
            $goods_arr = [];
            foreach ($approvals as $unit){
                array_push($goods_arr, $unit->id_goods);
            }
            $goods = $goods->whereIn('id', $goods_arr);
        }
        if ($data['koenig'][0] !== ''){
            $approvals = DB::table('koenig_approval_goods')->whereIn('id_approval',$data['koenig'])->get();
            $goods_arr = [];
            foreach ($approvals as $unit){
                array_push($goods_arr, $unit->id_goods);
            }
            $goods = $goods->whereIn('id', $goods_arr);
        }
        if ($data['chrysler'][0] !== ''){
            $approvals = DB::table('chrysler_approval_goods')->whereIn('id_approval',$data['chrysler'])->get();
            $goods_arr = [];
            foreach ($approvals as $unit){
                array_push($goods_arr, $unit->id_goods);
            }
            $goods = $goods->whereIn('id', $goods_arr);
        }
        if ($data['psa'][0] !== ''){
        $approvals = DB::table('psa_approval_goods')->whereIn('id_approval',$data['psa'])->get();
        $goods_arr = [];
        foreach ($approvals as $unit){
            array_push($goods_arr, $unit->id_goods);
        }
        $goods = $goods->whereIn('id', $goods_arr);
    }
        if ($data['volvo'][0] !== ''){
            $approvals = DB::table('volvo_approval_goods')->whereIn('id_approval',$data['volvo'])->get();
            $goods_arr = [];
            foreach ($approvals as $unit){
                array_push($goods_arr, $unit->id_goods);
            }
            $goods = $goods->whereIn('id', $goods_arr);
        }
        if ($data['jaguar'][0] !== ''){
            $approvals = DB::table('jaguar_approval_goods')->whereIn('id_approval',$data['jaguar'])->get();
            $goods_arr = [];
            foreach ($approvals as $unit){
                array_push($goods_arr, $unit->id_goods);
            }
            $goods = $goods->whereIn('id', $goods_arr);
        }
        if ($data['jaso'][0] !== ''){
            $approvals = DB::table('jaso_approval_goods')->whereIn('id_approval',$data['jaso'])->get();
            $goods_arr = [];
            foreach ($approvals as $unit){
                array_push($goods_arr, $unit->id_goods);
            }
            $goods = $goods->whereIn('id', $goods_arr);
        }
        if ($data['mazda'][0] !== ''){
            $approvals = DB::table('mazda_approval_goods')->whereIn('id_approval',$data['mazda'])->get();
            $goods_arr = [];
            foreach ($approvals as $unit){
                array_push($goods_arr, $unit->id_goods);
            }
            $goods = $goods->whereIn('id', $goods_arr);
        }
        if ($data['nissan'][0] !== ''){
            $approvals = DB::table('nissan_approval_goods')->whereIn('id_approval',$data['nissan'])->get();
            $goods_arr = [];
            foreach ($approvals as $unit){
                array_push($goods_arr, $unit->id_goods);
            }
            $goods = $goods->whereIn('id', $goods_arr);
        }*/
