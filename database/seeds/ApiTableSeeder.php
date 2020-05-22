<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ApiTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('api')->insert([
            ['name'=>'SL'],
            ['name'=>'SN'],
            ['name'=>'SM'],
            ['name'=>'CF']
        ]);
    }
}
