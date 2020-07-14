<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mb_approval_goods extends Model
{
    protected $table = 'mb_approval_goods';
    protected $fillable = ['id_approval','id_goods'];
}
