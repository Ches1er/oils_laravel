<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class To_groups extends Model
{
    protected $table = 'to_groups';
    protected $fillable = ['name','table_definer'];
}
