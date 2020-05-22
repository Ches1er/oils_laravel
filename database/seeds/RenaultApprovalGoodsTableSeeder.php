<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RenaultApprovalGoodsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ren_approval_goods')->insert([
            ['id_approval'=>1, 'id_goods'=>1],
            ['id_approval'=>1, 'id_goods'=>3]
        ]);
    }
}
