<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ViscocityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('viscosity')->insert([
            ['name'=>'5W-20'],
            ['name'=>'5W-50'],
            ['name'=>'5W-30'],
            ['name'=>'5W-40'],
            ['name'=>'10W-60'],
            ['name'=>'10W-40'],
            ['name'=>'0W-20'],
            ['name'=>'0W-30'],
            ['name'=>'0W-40']
        ]);
    }
}
