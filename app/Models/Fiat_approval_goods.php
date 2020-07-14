<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Fiat_approval_goods extends Model
{
    protected $table = 'fiat_approval_goods';
    protected $fillable = ['id_approval','id_goods'];
}
