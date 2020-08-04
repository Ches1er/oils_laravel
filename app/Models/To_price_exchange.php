<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class To_price_exchange extends Model
{
    protected $table = 'to_price_exchange';
    protected $fillable = ['name','exchange'];
}
