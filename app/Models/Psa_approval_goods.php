<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Psa_approval_goods extends Model
{
    protected $table = 'psa_approval_goods';
    protected $fillable = ['id_approval','id_goods'];
}
