<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FiatApprovalGoodsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('fiat_approval_goods')->insert([
            ['id_approval'=>2, 'id_goods'=>2],
            ['id_approval'=>1, 'id_goods'=>3],
            ['id_approval'=>3, 'id_goods'=>3]
        ]);
    }
}
