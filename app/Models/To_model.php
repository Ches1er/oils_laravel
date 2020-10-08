<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class To_model extends Model
{
    protected $table = 'to_models';
    protected $fillable = ['name', 'id_brand'];
}
