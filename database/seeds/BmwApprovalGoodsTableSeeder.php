<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BmwApprovalGoodsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('bmw_approval_goods')->insert([
            ['id_approval'=>1, 'id_goods'=>1],
            ['id_approval'=>1, 'id_goods'=>2]
        ]);
    }
}
