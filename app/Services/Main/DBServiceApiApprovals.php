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
use App\Models\Fiat_approval;
use App\Models\Ford_approval;
use App\Models\Mb_approval;
use App\Models\Ren_approval;
use App\Models\Vw_approval;

class DBServiceApiApprovals implements ServiceApiApprovals
{

    public function getMb()
    {
        return Mb_approval::all();
    }

    public function getBmw()
    {
        return Bmw_approval::all();
    }

    public function getFiat()
    {
        return Fiat_approval::all();
    }

    public function getFord()
    {
        return Ford_approval::all();
    }

    public function getRen()
    {
        return Ren_approval::all();
    }

    public function getVw()
    {
        return Vw_approval::all();
    }
}
