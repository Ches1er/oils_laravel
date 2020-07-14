<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Porsche_approval_goods extends Model
{
    protected $table = 'porsche_approval_goods';
    protected $fillable = ['id_approval','id_goods'];
}
