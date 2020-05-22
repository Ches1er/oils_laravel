<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 12.05.2020
 * Time: 14:22
 */

namespace App\Services\Main;


use App\Contracts\ServiceApiBase;
use App\Models\Base;

class DBServiceApiBase implements ServiceApiBase
{

    public function getBase()
    {
        return Base::all();
    }
}
