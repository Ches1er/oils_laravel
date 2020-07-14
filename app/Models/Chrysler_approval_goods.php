<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Chrysler_approval_goods extends Model
{
    protected $table = 'chrysler_approval_goods';
    protected $fillable = ['id_approval','id_goods'];
}
