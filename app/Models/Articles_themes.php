<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Articles_themes extends Model
{
    protected $table = 'articles_themes';
    protected $fillable = ['name','id_image'];
}
