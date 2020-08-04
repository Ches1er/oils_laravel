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
use App\Models\To_auto;
use App\Models\To_groups;
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

    public function getAutos()
    {
        $autos =  To_auto::all();
        return $this->getWithImagePath($autos);
    }

    public function getGoods($id_auto)
    {
        $auto = To_auto::where('id',$id_auto)->get();
        $goods = $auto[0]->goods();
        return $this->getToObjWProp($goods);
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
}
