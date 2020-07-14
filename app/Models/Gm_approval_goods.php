<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gm_approval_goods extends Model
{
    protected $table = 'gm_approval_goods';
    protected $fillable = ['id_approval','id_goods'];
}
