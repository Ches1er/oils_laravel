<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $table = 'brands';
    protected $fillable = ['name', 'id_image'];

    public function types(){
        $types = $this->hasManyThrough(Product_type::class,
            Product_type_brand::class, 'id_brand',
            'id','id','id_product_type')->get();
        return $types;
    }
}

