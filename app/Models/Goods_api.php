<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Goods_api extends Model
{
    protected $table = 'goods_api';
    protected $fillable = ['id_api', 'id_goods'];
}
