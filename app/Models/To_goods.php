<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class To_goods extends Model
{
    protected $table = 'to_goods';
    protected $fillable = ['name','price','cat_number','id_group','id_exchange'];
}
