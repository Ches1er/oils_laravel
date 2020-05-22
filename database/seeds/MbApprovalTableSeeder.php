<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MbApprovalTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('mb_approval')->insert([
            ['name'=>'MB-229.3'],
            ['name'=>'MB-229.1'],
            ['name'=>'MB-229-31'],
            ['name'=>'MB-226.5'],
            ['name'=>'MB-226.51'],
            ['name'=>'MB-226.7'],
            ['name'=>'MB-229.5'],
            ['name'=>'MB-229.51'],
            ['name'=>'MB-229.52'],
        ]);
    }
}
