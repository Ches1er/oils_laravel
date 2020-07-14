<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Volvo_approval_goods extends Model
{
    protected $table = 'volvo_approval_goods';
    protected $fillable = ['id_approval','id_goods'];
}
