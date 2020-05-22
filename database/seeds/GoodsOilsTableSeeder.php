<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GoodsOilsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('goods_oils')->insert([
            [
               'art'=>'872588',
                'name' => 'SYNPOWER 0W40 SW',
                'id_volume' => 3,
                'id_viscosity' => 9,
                'id_base' => 1,
                'id_brand' =>1,
                'id_image'=>1,
                'short_desc'=>'Краткое описание SYNPOWER 0W40 SW',
                'full_desc'=>'Полное описание SYNPOWER 0W40 SW',
            ],
            [
                'art'=>'872377',
                'name' => 'SYNPOWER 5W30 SW',
                'id_volume' => 1,
                'id_viscosity' => 3,
                'id_base' => 1,
                'id_brand' =>1,
                'id_image'=>1,
                'short_desc'=>'Краткое описание SYNPOWER 5W30 SW',
                'full_desc'=>'Полное описание SYNPOWER 5W30 SW',
            ],
            [
                'art'=>'872295',
                'name' => 'MAXLIFE 10W40 SW',
                'id_volume' => 1,
                'id_viscosity' => 6,
                'id_base' => 2,
                'id_brand' =>1,
                'id_image'=>1,
                'short_desc'=>'Краткое описание MAXLIFE 10W40 SW',
                'full_desc'=>'Полное описание MAXLIFE 10W40 SW',
            ]
        ]);
    }
}
