<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VolumeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('volume')->insert([
            ['volume'=>'1'],
            ['volume'=>'2'],
            ['volume'=>'4'],
            ['volume'=>'5']
        ]);
    }
}
