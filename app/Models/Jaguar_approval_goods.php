<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Jaguar_approval_goods extends Model
{
    protected $table = 'jaguar_approval_goods';
    protected $fillable = ['id_approval','id_goods'];
}
