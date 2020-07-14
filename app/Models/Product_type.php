<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 30.04.2020
 * Time: 15:26
 */

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Product_type extends Model
{
    protected $table = 'product_types';
    protected $fillable = ['name','id_image'];

    public function Brands():array {
        $brands_array = [];
        $collection = $this->hasManyThrough(Brand::class,
            Product_type_brand::class,
            'id_product_type', 'id', 'id', 'id_brand')->get();
        foreach ($collection as $brand) {
            $brands_array[]=$brand;
        }
        return $brands_array;
    }
}
