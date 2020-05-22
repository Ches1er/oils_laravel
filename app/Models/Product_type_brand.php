<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product_type_brand extends Model
{
    protected $table = 'product_types_brands';
    protected $fillable = ['id_brand', 'id_product_type'];
}
