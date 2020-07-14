<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ford_approval_goods extends Model
{
    protected $table = 'ford_approval_goods';
    protected $fillable = ['id_approval','id_goods'];
}
