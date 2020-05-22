<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FordApprovalTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ford_approval')->insert([
            ['name'=>'Ford WSS-M2C-153E'],
            ['name'=>'Ford WSS-M2C917-A'],
            ['name'=>'Ford WSS-M2C947-A'],
            ['name'=>'Ford WSS-M2C948-B '],
            ['name'=>'Ford WSS-M2C913-D'],
            ['name'=>'Ford WSS-M2C934-B ']
        ]);
    }
}
