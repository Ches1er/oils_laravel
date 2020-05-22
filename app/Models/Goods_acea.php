<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Goods_acea extends Model
{
    protected $table = 'goods_acea';
    protected $fillable = ['id_acea', 'id_goods'];
}
