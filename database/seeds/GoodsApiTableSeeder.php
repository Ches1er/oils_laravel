<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GoodsApiTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('goods_api')->insert(
        [
            ['id_goods'=>1, 'id_api'=>1],
            ['id_goods'=>1, 'id_api'=>3],
            ['id_goods'=>2, 'id_api'=>1],
            ['id_goods'=>2, 'id_api'=>4],
            ['id_goods'=>3, 'id_api'=>2],
            ['id_goods'=>3, 'id_api'=>4],
        ]
    );
    }
}
