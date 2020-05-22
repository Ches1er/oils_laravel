<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AceaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('acea')->insert([
            ['name'=>'A3'],
            ['name'=>'B3'],
            ['name'=>'B4'],
            ['name'=>'A1'],
            ['name'=>'B1'],
            ['name'=>'B5'],
            ['name'=>'C1'],
            ['name'=>'C2'],
            ['name'=>'C3'],
            ['name'=>'C4'],
            ['name'=>'C5'],
            ['name'=>'A5']
        ]);
    }
}
