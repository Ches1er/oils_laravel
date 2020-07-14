<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Jaso_approval_goods extends Model
{
    protected $table = 'jaso_approval_goods';
    protected $fillable = ['id_approval','id_goods'];
}
