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
use App\Models\Product_type;
use App\Traits\getObjWithImagesPath;

class DBServiceApiBrandsApiService implements ServiceApiBrands
{
    use getObjWithImagesPath;

    public function getBrands()
    {
        $brands = Brand::all();
        return $this->getWithImagePath($brands);
    }

    public function addBrand(array $data)
    {
        // TODO: Implement addBrand() method.
    }

    public function getBrandsByProductType(int $producttypeid)
    {
        $producttype = Product_type::where('id', $producttypeid)->first();
        $brands = $this->getWithImagePath($producttype->Brands());
        return $brands;
    }
}
