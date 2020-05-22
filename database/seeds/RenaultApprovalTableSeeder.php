<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RenaultApprovalTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('renault_approval')->insert([
            ['name'=>'Renault RN0700/0710'],
            ['name'=>'Renault RN0700'],
            ['name'=>'Renault RN0720'],
            ['name'=>'Renault RN17']
        ]);
    }
}
