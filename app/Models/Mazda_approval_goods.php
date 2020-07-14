<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mazda_approval_goods extends Model
{
    protected $table = 'mazda_approval_goods';
    protected $fillable = ['id_approval','id_goods'];
}
