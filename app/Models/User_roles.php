<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User_roles extends Model
{
    protected $table = 'users_roles';

    protected $fillable = [
        'user_id',
        'role_id'
    ];
}
