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
use App\Models\Chrysler_approval;
use App\Models\Chrysler_approval_goods;
use App\Models\Fiat_approval;
use App\Models\Fiat_approval_goods;
use App\Models\Ford_approval;
use App\Models\Ford_approval_goods;
use App\Models\Gm_approval;
use App\Models\Gm_approval_goods;
use App\Models\Jaguar_approval;
use App\Models\Jaguar_approval_goods;
use App\Models\Jaso_approval;
use App\Models\Jaso_approval_goods;
use App\Models\Koenig_approval;
use App\Models\Koenig_approval_goods;
use App\Models\Mazda_approval;
use App\Models\Mazda_approval_goods;
use App\Models\Mb_approval;
use App\Models\Mb_approval_goods;
use App\Models\Nissan_approval;
use App\Models\Nissan_approval_goods;
use App\Models\Porsche_approval;
use App\Models\Porsche_approval_goods;
use App\Models\Psa_approval;
use App\Models\Psa_approval_goods;
use App\Models\Ren_approval;
use App\Models\Ren_approval_goods;
use App\Models\Volvo_approval;
use App\Models\Volvo_approval_goods;
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

    public function getPorsche($definer)
    {
        $app_ids = [];
        if ($definer === 'all') return Porsche_approval::all();
        $approvals = Porsche_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Porsche_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    public function getGm($definer)
    {
        $app_ids = [];
        if ($definer === 'all') return Gm_approval::all();
        $approvals = Gm_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Gm_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    public function getKoenig($definer)
    {
        $app_ids = [];
        if ($definer === 'all') return Koenig_approval::all();
        $approvals = Koenig_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Koenig_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    public function getChrysler($definer)
    {
        $app_ids = [];
        if ($definer === 'all') return Chrysler_approval::all();
        $approvals = Chrysler_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Chrysler_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    public function getPsa($definer)
    {
        $app_ids = [];
        if ($definer === 'all') return Psa_approval::all();
        $approvals = Psa_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Psa_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    public function getVolvo($definer)
    {
        $app_ids = [];
        if ($definer === 'all') return Volvo_approval::all();
        $approvals = Volvo_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Volvo_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    public function getJaguar($definer)
    {
        $app_ids = [];
        if ($definer === 'all') return Jaguar_approval::all();
        $approvals = Jaguar_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Jaguar_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    public function getJaso($definer)
    {
        $app_ids = [];
        if ($definer === 'all') return Jaso_approval::all();
        $approvals = Jaso_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Jaso_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    public function getMazda($definer)
    {
        $app_ids = [];
        if ($definer === 'all') return Mazda_approval::all();
        $approvals = Mazda_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Mazda_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }

    public function getNissan($definer)
    {
        $app_ids = [];
        if ($definer === 'all') return Nissan_approval::all();
        $approvals = Nissan_approval_goods::all();
        foreach ($approvals as $approval){
            array_push($app_ids, $approval->id_approval);
        }
        return Nissan_approval::whereIn('id', $this->getUnique($app_ids))->get();
    }
}
