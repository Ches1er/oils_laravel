<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class To_auto_goods extends Model
{
    protected $table = 'to_auto_goods';
    protected $fillable = ['id_goods','id_auto'];
}
