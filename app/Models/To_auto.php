<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class To_auto extends Model
{
    protected $table = 'to_auto';

    protected $fillable = ['name','id_image','id_model', 'short_desc'];

    public function Goods() {
        $goods = $this->hasManyThrough(To_goods::class, To_auto_goods::class,'id_auto', 'id',
            'id', 'id_goods')->get();
        foreach ($goods as &$item){
            $item->max = null;
            $item->min = null;
        }
        return $goods;
    }
}
