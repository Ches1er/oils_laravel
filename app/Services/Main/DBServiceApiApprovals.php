<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 14.05.2020
 * Time: 16:14
 */

namespace App\Services\Main;


use App\Contracts\ServiceApiApprovals;
use App\Models\Bmw_approval;
use App\Models\Bmw_approval_goods;
use App\Models\Fiat_approval;
use App\Models\Fiat_approval_goods;
use App\Models\Ford_approval;
use App\Models\Ford_approval_goods;
use App\Models\Mb_approval;
use App\Models\Mb_approval_goods;
use App\Models\Ren_approval;
use App\Models\Ren_approval_goods;
use App\Models\Vw_approval;
use App\Models\Vw_approval_goods;

class DBServiceApiApprovals implements ServiceApiApprovals
{

    private function getUnique($arr){
        $result = [];
        if (count($arr) === 0) {
            return $result;
        }
        foreach ($arr as $item){
            if (!in_array($item, $result)) array_push($result, $item);
        }
    return $result;
    }

    /**
     * @param string $definer
     * @return mixed
     */
    public function getMb($definer)
    {
        $app_ids = [];
        if ($definer === 'all') return Mb_approval::all();
        $approvals = Mb_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Mb_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    /**
     * @param $definer
     * @return mixed
     */
    public function getBmw($definer)
    {
        $app_ids = [];
        if ($definer === 'all') return Bmw_approval::all();
        $approvals = Bmw_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Bmw_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    /**
     * @param $definer
     * @return mixed
     */
    public function getFiat($definer)
    {
        $app_ids = [];
        if ($definer === 'all') return Fiat_approval::all();
        $approvals = Fiat_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Fiat_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    /**
     * @param $definer
     * @return mixed
     */
    public function getFord($definer)
    {
        $app_ids = [];
        if ($definer === 'all') return Ford_approval::all();
        $approvals = Ford_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Ford_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    public function getRen($definer)
    {
        $app_ids = [];
        if ($definer === 'all') return Ren_approval::all();
        $approvals = Ren_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Ren_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    public function getVw($definer)
    {
        $app_ids = [];
        if ($definer === 'all') return Vw_approval::all();
        $approvals = Vw_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Vw_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    public function addApproval(array $data)
    {
        $eloquent = "App\Models\\" . $data['definer'].'_approval';
        if ($eloquent::where('name',$data['name'])
                ->first() && $data['action']==='add') return ['response'=>'this object exists'];
        if ($eloquent::updateOrCreate(['id'=> $data['id']],[
            'name'=>$data['name']
        ])) {
            if ($data['action']==='update')return ['response'=>'update success'];
            return ['response'=>'insert success'];
        };
        return ['response'=>'error'];
    }
}
