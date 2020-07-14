<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bmw_approval_goods extends Model
{
    protected $table = 'bmw_approval_goods';
    protected $fillable = ['id_approval','id_goods'];
}
