<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GoodsAceaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('goods_acea')->insert([
            ['id_goods'=>1, 'id_acea'=>1],
            ['id_goods'=>1, 'id_acea'=>3],
            ['id_goods'=>2, 'id_acea'=>1],
            ['id_goods'=>2, 'id_acea'=>3],
            ['id_goods'=>3, 'id_acea'=>1],
            ['id_goods'=>3, 'id_acea'=>2],
            ['id_goods'=>3, 'id_acea'=>3],
        ]);
    }
}
