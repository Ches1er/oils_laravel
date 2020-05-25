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

    public function getMb()
    {
        $app_ids = [];
        $approvals = Mb_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Mb_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    public function getBmw()
    {
        $app_ids = [];
        $approvals = Bmw_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Bmw_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    public function getFiat()
    {
        $app_ids = [];
        $approvals = Fiat_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Fiat_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    public function getFord()
    {
        $app_ids = [];
        $approvals = Ford_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Ford_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    public function getRen()
    {
        $app_ids = [];
        $approvals = Ren_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Ren_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    public function getVw()
    {
        $app_ids = [];
        $approvals = Vw_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Vw_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }
}
