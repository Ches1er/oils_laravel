<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Nissan_approval_goods extends Model
{
    protected $table = 'nissan_approval_goods';
    protected $fillable = ['id_approval','id_goods'];
}
