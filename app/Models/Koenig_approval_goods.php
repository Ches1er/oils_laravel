<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Koenig_approval_goods extends Model
{
    protected $table = 'koenig_approval_goods';
    protected $fillable = ['id_approval','id_goods'];
}
