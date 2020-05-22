<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BmwApprovalTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('bmw_approval')->insert([
            ['name'=>'BMW LL-01'],
            ['name'=>'BMW LL-12 FE'],
            ['name'=>'BMW LL-04']
        ]);
    }
}
