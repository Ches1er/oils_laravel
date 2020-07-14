<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 21.04.2020
 * Time: 11:12
 */

namespace App\Services\Main;


use App\Contracts\ServiceApiBrands;
use App\Models\Brand;
use App\Models\Image;
use App\Models\Product_type;
use App\Models\Product_type_brand;
use App\Traits\getObjWithAddProperties;
use App\Traits\getObjWithImagesPath;

class DBServiceApiBrandsApiService implements ServiceApiBrands
{
    use getObjWithImagesPath;
    use getObjWithAddProperties;

    public function getBrands()
    {
        $brands = Brand::all();
        $brands = $this->addTypesToTheBrands($brands);
        return $this->getWithImagePath($brands);
    }

    public function addBrand(array $data)
    {
        // If has no image
        if (!$data['id_image']){
            $default_image = Image::where('name','default')->first();
            $data['id_image'] = $default_image->id;
        }

        // If exists
        if (Brand::where('name',$data['name'])
                ->first() && $data['action']==='add') return ['response'=>'this object exists'];

        // Create-update
        if (Brand::updateOrCreate(['id'=> $data['id']],[
            'name'=>$data['name'],
            'id_image'=>(int)$data['id_image']
        ])) {

            // Add product_types_brand if update
            if ($data['action']==='update'){
                Product_type_brand::where('id_brand', $data['id'])->delete();
                $types = explode(',', $data['types']);
                foreach ($types as $type) {
                    Product_type_brand::create(['id_brand' => $data['id'], 'id_product_type'=>$type]);
                }
                return ['response'=>'update success'];
            };

            // Add product_types_brand if create
            $types = explode(',', $data['types']);
            $brand = Brand::where('name',$data['name'])->first();
            foreach ($types as $type) {
                Product_type_brand::create(['id_brand' => $brand->id, 'id_product_type'=>$type]);
            }
            return ['response'=>'insert success'];
        };
        return ['response'=>'error'];
    }

    public function getBrandsByProductType(int $producttypeid)
    {
        $producttype = Product_type::where('id', $producttypeid)->first();
        $brands = $this->getWithImagePath($producttype->Brands());
        return $brands;
    }
}
