<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VwApprovalTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('vw_approval')->insert([
            ['name'=>'501.01'],
            ['name'=>'502.00'],
            ['name'=>'503.00'],
            ['name'=>'503.01'],
            ['name'=>'504.00'],
            ['name'=>'505.00'],
            ['name'=>'505.01'],
            ['name'=>'506.00'],
            ['name'=>'506.01'],
            ['name'=>'507.00'],
            ['name'=>'508.00'],
            ['name'=>'509.00']
        ]);
    }
}
