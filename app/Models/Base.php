<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Base extends Model
{
    protected $table = 'base';
    protected $fillable = ['name'];
}
