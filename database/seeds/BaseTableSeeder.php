<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BaseTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('base')->insert([
            ['name'=>'Синтетика'],
            ['name'=>'Полу-синтетика'],
            ['name'=>'Минеральное']
        ]);
    }
}
