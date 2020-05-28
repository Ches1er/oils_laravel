<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 26.05.2020
 * Time: 16:25
 */

namespace App\Services\Main;


use App\Contracts\ServiceApiProductsTypes;
use App\Models\Image;
use App\Models\Product_type;
use App\Traits\getObjWithImagesPath;

class DBServiceApiProductsTypes implements ServiceApiProductsTypes
{
    use getObjWithImagesPath;
    public function getProductsTypes()
    {
        $product_types = Product_type::all();
        return $this->getWithImagePath($product_types);
    }

    public function addProductType(array $data)
    {
        if (!$data['id_image']){
            $default_image = Image::where('name','default')->first();
            $data['id_image'] = $default_image->id;
        }
        if (Product_type::where('name',$data['name'])
                ->first() && $data['action']==='add') return ['response'=>'this object exists'];
        if (Product_type::updateOrCreate(['id'=> $data['id']],[
            'name'=>$data['name'],
            'id_image'=>(int)$data['id_image']
        ])) {
            if ($data['action']==='update')return ['response'=>'update success'];
            return ['response'=>'insert success'];
        };
        return ['response'=>'error'];
    }
}
